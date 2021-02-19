import { useState } from "react";
import { useRouter } from "next/router";

import GTAG from "utils/gtag";
import YM from "utils/yandex";
import { Container } from "./styles";
import { Icon, Button, Text } from "@atoms";
import { getCookie, setCookie } from "utils/cookies";

import Input from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { GlobalServices } from "api/GlobalServices";

const NumberBox = ({ modalRef, hideModal, modalProps }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState("");

  // send "ostavit nomer" data
  const handleSubmit = e => {
    e.preventDefault();
    const { name, answer } = e.target;

    if (!isValidPhoneNumber(phone)) {
      setShowError(true);
      return;
    }

    let is_unique = getCookie("is_unique");
    if (is_unique === null) {
      setCookie("is_unique", true, 365);
      is_unique = true;
    } else if (is_unique) {
      setCookie("is_unique", false, 365);
      is_unique = false;
    }

    setLoading(true);

    const body = {
      phone,
      is_unique,
      name: name.value,
      previouslyContactedUs: Boolean(Number(answer.value)),
    };

    GlobalServices.callBack(body).then(() => {
      hideModal();
      setLoading(false);
      switch (modalProps.type) {
        case "product":
          GTAG.Kupit1Click();
          YM.Kupit1Click();
          break;
        case "header":
          GTAG.OstavitNomer();
          YM.OstavitNomer();
          break;
      }
      GTAG.OstavitNomerAll();
      YM.OstavitNomerAll();
    });
  };

  return (
    <Container ref={modalRef}>
      <div>
        <Icon name="close" width={20} height={20} onClick={hideModal} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="srOnly">
            номер
          </label>
          <input
            id="name"
            required
            name="name"
            type="text"
            placeholder="ваше имя"
          />
          <Input
            required
            international
            value={phone}
            placeholder="номер"
            onChange={setPhone}
          />
          {showError && !isValidPhoneNumber(phone) && (
            <span style={{ color: "#ff9b9b", fontWeight: "bold" }}>
              Неправильный номер телефона
            </span>
          )}
          <Text tag="legend" sz="normal" clr="white">
            Ранее обращались к нам ?
          </Text>
          <div>
            <label>
              <Text tag="span" sz="normal" clr="white">
                нет
              </Text>
              <input
                type="radio"
                name="answer"
                value="0"
                defaultChecked={true}
              />
            </label>
            <label>
              <Text tag="span" sz="normal" clr="white">
                да
              </Text>
              <input type="radio" name="answer" value="1" />
            </label>
          </div>
          <Button
            type="submit"
            title="Отправить"
            variant="secondary"
            loading={loading}
            loadingMode="light"
          />
        </form>
      </div>
      <div data-bg-image />
    </Container>
  );
};

export default NumberBox;
