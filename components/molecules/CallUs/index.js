import { useRef, useEffect } from "react";
import { Icon, Text } from "@atoms";

import { Container } from "./styles";

const CallUs = ({ showNumberBox = () => null, ...props }) => {
  const textRef = useRef(null);
  const styles = useRef(null);

  useEffect(() => {
    const { top, left, width } = textRef.current.getBoundingClientRect();
    styles.current = {
      top: `${top}px`,
      right: `${globalThis.innerWidth - left - width / 2}px`,
    };
  }, []);

  return (
    <Container className="call-us" {...props}>
      <Icon name="phone" width={38} fill="secondary" aria-label="корзина" />
      <div className="call-us-inner">
        <p>
          <Text clr="primary" sz={"small"} tag="span">
            наш номер
          </Text>
          <Text clr="primary" sz={"normal"} tag="span" className="phone-number">
            +7[495] 668-65-11
          </Text>
        </p>
        <Text
          sz="small"
          tag="span"
          clr="primary"
          textRef={textRef}
          title="Оставить мой номер"
          className="leave-my-number"
          onClick={() =>
            showNumberBox(globalThis.innerWidth > 768 ? styles.current : {})
          }
        >
          Оставить мой номер
        </Text>
      </div>
    </Container>
  );
};

export default CallUs;
