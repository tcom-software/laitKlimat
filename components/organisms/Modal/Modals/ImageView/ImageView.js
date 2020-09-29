import { Icon } from "@atoms";
import { Container } from "./styles";

const ImageView = ({ modalRef, hideModal, modalProps: { url, alt, type } }) => {
  return (
    <Container ref={modalRef}>
      <div onClick={hideModal}>
        <Icon name="close" fill="secondary" />
      </div>
      <picture>
        <source srcSet={`${url}.webp`} type="image/webp" />
        <source srcSet={`${url}.${type}`} type={`image/${type}`} />
        <img alt={alt} src={`${url}.${type}`} />
      </picture>
    </Container>
  );
};

export default ImageView;
