import { useState } from "react";
import { useRouter } from "next/router";

import { Icon, Button, Text } from "@atoms";
import { Container } from "./styles";
import GTAG from "utils/gtag";
import YM from "utils/yandex";

import Input from "react-phone-number-input/input";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

const NumberBox = ({ modalRef, hideModal, modalProps: style }) => {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [showError, setShowError] = useState("");

  // send data
  const handleSubmit = e => {
    e.preventDefault();
    const { name, answer } = e.target;

    if (!isValidPhoneNumber(phone)) {
      setShowError(true);
      return;
    }

    setLoading(true);
    fetch("/api/callBack", {
      method: "POST",
      body: JSON.stringify({
        phone: phone,
        name: name.value,
        previouslyContactedUs: Boolean(Number(answer.value)),
      }),
    }).then(() => {
      hideModal();
      setLoading(false);
      GTAG.NeDozvonilis();
      YM.NeDozvonilis();
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
            className="hidden"
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
