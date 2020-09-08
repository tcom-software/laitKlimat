import { Icon, Text } from "@atoms";

import { Container } from "./styles";

const CallUs = props => {
  return (
    <Container className="call-us" {...props}>
      <Icon name="phone" width={38} fill="secondary" aria-label="корзина" />
      <div className="call-us-inner">
        <p>
          <Text clr="primary" sz="small" tag="span">
            наш номер
          </Text>
          <Text clr="primary" sz="normal" tag="span" className="phone-number">
            +7[495] 668-65-11
          </Text>
        </p>
        <Text
          tag="span"
          sz="small"
          clr="primary"
          title="Оставить мой номер"
          className="leave-my-number"
        >
          Оставить мой номер
        </Text>
      </div>
    </Container>
  );
};

export default CallUs;
