import { useRouter } from "next/router";

import { Icon, Button, Text } from "@atoms";
import { Container } from "./styles";

const NumberBox = ({ modalRef, hideModal, style }) => {

  const handleSubmit = e => {
    e.preventDefault();

    // console.log(e.target.phone_number.value);
    // console.log(e.target.checkbox_answer.value);
  };

  return (
    <Container ref={modalRef} style={style}>
      <div>
        <Icon name="close" width={20} height={20} onClick={hideModal} />
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone" className="srOnly">
            номер
          </label>
          <input
            type="number"
            placeholder="номер"
            id="phone"
            name="phone_number"
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
                name="checkbox_answer"
                value="no"
                defaultChecked={true}
              />
            </label>
            <label>
              <Text tag="span" sz="normal" clr="white">
                да
              </Text>
              <input type="radio" name="checkbox_answer" value="yes" />
            </label>
          </div>
          <Button variant="secondary" title="Отправить" type="submit" />
        </form>
      </div>
      <div data-bg-image />
    </Container>
  );
};

export default NumberBox;
