import { useRef, useEffect, useState } from "react";

import { Icon, Text } from "@atoms";
import { Container } from "./styles";
import GTAG from "utils/gtag";
import YM from "utils/yandex";
import { getCookie, setCookie } from "utils/cookies";

const CallUs = ({ showNumberBox, ...props }) => {
  const textRef = useRef(null);
  const [isClickedToNumber, setIsClickedToNumber] = useState(false);

  useEffect(() => {
    const cookie = getCookie("user_view_phone");

    if (cookie === "visited") {
      setIsClickedToNumber(true);
    }
  }, []);

  const handleShowNumber = () => {
    if (isClickedToNumber) {
      return;
    }

    setIsClickedToNumber(true);
    setCookie("user_view_phone", "visited", {
      expires: 1100 * 60 * 60 * 24,
    });

    GTAG.PokazatNomer();
    YM.PokazatNomer();
  };

  return (
    <Container className="call-us" {...props}>
      <Icon
        width={38}
        name="phone"
        fill="secondary"
        aria-label="корзина"
        onClick={showNumberBox}
      />
      <div className="call-us-inner">
        <p>
          <Text
            tag="span"
            clr="primary"
            sz={"normal"}
            className="phone-number"
            onClick={handleShowNumber}
          >
            {"+7[495] 668-" +
              (isClickedToNumber
                ? "65-11"
                : "<span class='blur'>------</span>")}
          </Text>
        </p>
        <Text
          sz="small"
          tag="span"
          clr="primary"
          textRef={textRef}
          title="Оставить мой номер"
          className="leave-my-number"
          onClick={showNumberBox}
        >
          Заказать звонок
        </Text>
      </div>
    </Container>
  );
};

export default CallUs;
