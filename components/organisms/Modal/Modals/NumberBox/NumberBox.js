import { useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import { tabs } from "data";
import { Link, Icon, Button, Text } from "@atoms";
import { Logo } from "@molecules";
import { Container } from "./styles";

import { SocialIcons, Location, WorkHours } from "@molecules";

const NumberBox = ({ modalRef, hideModal, style }) => {
  const route = useRouter();
  const [checked, setChecked] = useState("no");

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
            <label htmlFor="checkbox-no">
              <Text tag="span" sz="normal" clr="white">
                нет
              </Text>
              <input
                type="radio"
                id="checkbox-no"
                name="checkbox_answer"
                value="no"
                checked={checked === "no"}
                onChange={() => setChecked("no")}
              />
            </label>
            <label htmlFor="checkbox-yes">
              <Text tag="span" sz="normal" clr="white">
                да
              </Text>
              <input
                type="radio"
                id="checkbox-yes"
                name="checkbox_answer"
                value="yes"
                checked={checked === "yes"}
                onChange={() => setChecked("yes")}
              />
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
