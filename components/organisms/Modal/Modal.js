import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import modals from "./Modals";
import { Container } from "./styles";
import { useOutsideClickClose } from "@hooks";

const Modal = ({ modalType, modalProps, hideModal }) => {
  const modalRef = useRef(null);
  useOutsideClickClose(modalRef, hideModal);

  useEffect(() => {
    document.body.classList.add("scroll-hidden");
    return () => document.body.classList.remove("scroll-hidden");
  }, []);

  const CurrentModal = modals[modalType];

  return createPortal(
    <Container>
      <CurrentModal
        modalRef={modalRef}
        hideModal={hideModal}
        modalProps={modalProps}
      />
    </Container>,
    document.getElementById("portal")
  );
};

export default Modal;
