import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { hideModal } from "@redux/actions/modal";
import { connect, useSelector } from "react-redux";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import modals from "./Modals";
import { Container } from "./styles";
import { useOutsideClickClose } from "@hooks";

const Modal = ({ hideModal }) => {
  const modalRef = useRef(null);
  const { modalType, modalProps } = useSelector(state => state.modal);
  useOutsideClickClose(modalRef, hideModal);

  useEffect(() => {
    disableBodyScroll(document.body);
    return () => enableBodyScroll(document.body);
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

const mapDispatchToProps = {
  hideModal,
};

export default connect(null, mapDispatchToProps)(Modal);
