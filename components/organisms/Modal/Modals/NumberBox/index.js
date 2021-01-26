import { useState } from "react";
import { useRouter } from "next/router";

import { Icon, Button, Text } from "@atoms";
import { Container } from "./styles";
import GTAG from "utils/gtag";
import YM from "utils/yandex";
import { getCookie, setCookie } from "utils/cookies";

const NumberBox = ({ modalRef, hideModal, modalProps }) => {
  const [loading, setLoading] = useState(false);

  // send data
  const handleSubmit = e => {
    e.preventDefault();
    const { phone, name, answer } = e.target;

    let is_unique = getCookie("is_unique");
    if (is_unique === null) {
      setCookie("is_unique", true, 365);
      is_unique = true;
    } else if (is_unique) {
      setCookie("is_unique", false, 365);
      is_unique = false;
    }

    setLoading(true);
    fetch("/api/callBack", {
      method: "POST",
      body: JSON.stringify({
        phone: phone.value,
        name: name.value,
        previouslyContactedUs: Boolean(Number(answer.value)),
        is_unique,
      }),
    }).then(() => {
      hideModal();
      setLoading(false);
      if (modalProps.type === "product") {
        GTAG.Kupit1Click();
        YM.Kupit1Click();
      } else if (modalProps.type === "header") {
        GTAG.OstavitNomer();
        YM.OstavitNomer();
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
            type="text"
            placeholder="ваше имя"
            id="name"
            name="name"
            required
          />

          <label htmlFor="phone" className="srOnly">
            номер
          </label>
          <input
            type="text"
            placeholder="номер"
            id="phone"
            name="phone"
            required
          />

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
