import { useState } from "react";
import { Button, Text } from "@atoms";
import { Hgroup } from "@molecules";
import { Container } from "./styles";

const inputs = [
  {
    title: "Номер телефона который оставили при заказе",
    name: "tel-order",
    type: "tel",
  },
  {
    title: "Дополнительный контакты номер",
    name: "tel",
    type: "tel",
  },
  {
    title: "Модель кондиционера",
    name: "model",
    type: "text",
  },
];

const radio = {
  title: "Причины неисправности",
  inputs: [
    "не охлаждает при включении",
    "внутренний и наружные блоки работают но не охлаждают",
    "не включается совсем",
    "другое",
  ],
};

const ServiceCenter = () => {
  const [checked, setChecked] = useState(radio[0]);

  return (
    <Container className="container">
      <Hgroup
        h1="СЕРВИС ЦЕНТР"
        h2="Мы установили более 50 000 кондиционеров."
      />
      <div className="form--wrapper">
        <form>
          {inputs.map(({ title, name, type }, idx) => (
            <label key={idx}>
              <Text tag="p" sz="larg" clr="primary">
                {title}
              </Text>
              <input type={type} name={name} />
            </label>
          ))}

          <fieldset>
            <legend>
              <Text tag="p" sz="larg" clr="primary">
                {radio.title}
              </Text>
            </legend>
            {radio.inputs.map((title, idx) => (
              <label htmlFor={`radio-${idx}`} key={idx}>
                <input
                  type="radio"
                  id={`radio-${idx}`}
                  name="form-radio"
                  value={title}
                  checked={checked === title}
                  onChange={() => setChecked(title)}
                />
                <Text tag="span" sz="normal" clr="ptimary">
                  {title}
                </Text>
              </label>
            ))}
          </fieldset>

          <Button title="Отправить" type="submit" />
        </form>
      </div>
    </Container>
  );
};

export default ServiceCenter;
