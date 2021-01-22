import { useState, useRef } from "react";
import { Button, Text, Icon, Input, Textarea } from "@atoms";
import { Filter as FilterComponent } from "@organisms";
import { Container } from "./styles";

import FormWithBackground from "../FormWithBackground";

const Filter = ({ modalRef, hideModal }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const formElement = e.target;
    const formData = {};
    const inputs = Array.from(formElement.elements).filter(
      ({ name }, idx, self) =>
        self.findIndex(input => input.name === name) === idx
    );

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name !== "") {
        const value =
          inputs[i].type !== "checkbox"
            ? inputs[i].value
            : Array.from(
                formElement.querySelectorAll(`input[name="${inputs[i].name}"]`)
              )
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
        formData[inputs[i].name] = value;
      }
    }
    console.log(formData);
  };

  return (
    <Container ref={modalRef}>
      <FormWithBackground
        hideModal={hideModal}
        handleSubmit={handleSubmit}
        footerRenderProps={() => (
          <div className="btns_group">
            <Button variant="secondary" title="сброс" type="reset" />
            <Button variant="primary" title="Отправить" type="submit" />
          </div>
        )}
      >
        <FilterComponent />
      </FormWithBackground>
    </Container>
  );
};

export default Filter;
