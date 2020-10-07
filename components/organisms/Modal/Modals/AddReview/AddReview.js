import { useState } from "react";
import { Icon } from "@atoms";
import { Container } from "./styles";

const AddReview = ({ modalRef, hideModal }) => {
  return (
    <Container ref={modalRef}>
      <div className="close" onClick={hideModal}>
        <Icon name="close" fill="secondary" />
      </div>
    </Container>
  );
};

export default AddReview;
