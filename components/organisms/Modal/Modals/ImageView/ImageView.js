import { useState } from "react";
import { Icon } from "@atoms";
import { Container } from "./styles";

const ImageView = ({ modalRef, hideModal, modalProps: { url, alt, type } }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Container ref={modalRef}>
      <div
        onClick={hideModal}
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        <Icon name="close" fill="secondary" />
      </div>
      <picture>
        <source srcSet={`${url}.webp`} type="image/webp" />
        <source srcSet={`${url}.${type}`} type={`image/${type}`} />
        <img
          alt={alt}
          src={`${url}.${type}`}
          onLoad={() => setLoading(false)}
        />
      </picture>
    </Container>
  );
};

export default ImageView;
