import { Icon, Text } from "@atoms";
import { FC } from "react";
import { Container } from "./styles";

interface Props {
  modalRef: any;
  hideModal: () => void;
  modalProps: {
    heading: string;
    description?: string;
    callBack?: () => void;
  };
}

const Alert: FC<Props> = ({
  modalRef,
  hideModal,
  modalProps: { heading, description, callBack },
}) => {
  const hideModalWithCallBack = () => {
    hideModal();
    if (typeof callBack === "function") {
      callBack();
    }
  };

  return (
    <Container ref={modalRef}>
      <div className="close" onClick={hideModalWithCallBack}>
        <Icon name="close" fill="secondary" />
      </div>
      <Icon name="done" className="done" />
      <Text tag="h1" sz="larg" clr="secondary">
        {heading}
      </Text>
      {description && (
        <Text tag="p" sz="normal" clr="primary">
          {description}
        </Text>
      )}
    </Container>
  );
};

export default Alert;
