import { useState } from "react";
import { Icon } from "@atoms";
import { Container } from "./styles";

const ImageView = ({
  modalRef,
  hideModal,
  modalProps: { url, alt, type, asSlider, number, count, responsive = true },
}) => {
  const [loading, setLoading] = useState(true);
  const [photoNumber, setPhotoNumber] = useState(number);
  const [currentUrl, setCurrentUrl] = useState(
    asSlider ? `${url}${photoNumber}_max` : url
  );

  /**
   * Change slide when using in gallery page
   */
  const changeSlide = to => {
    const changeTo =
      to === "prev"
        ? photoNumber === 1
          ? 0
          : -1
        : photoNumber === count
        ? 0
        : 1;
    setCurrentUrl(`${url}${photoNumber + changeTo}_max`);
    setPhotoNumber(number => number + changeTo);
  };

  return (
    <Container ref={modalRef}>
      <div
        className="close"
        onClick={hideModal}
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        <Icon name="close" fill="secondary" />
      </div>
      {asSlider && (
        <div className="prev" onClick={() => changeSlide("prev")}></div>
      )}
      <picture>
        {responsive && (
          <>
            <source srcSet={`${currentUrl}.webp`} type="image/webp" />
            <source srcSet={`${currentUrl}.${type}`} type={`image/${type}`} />
          </>
        )}
        <img
          alt={alt}
          src={`${currentUrl}${type ? `.${type}` : ""}`}
          onLoad={() => setLoading(false)}
        />
      </picture>
      {asSlider && (
        <div className="next" onClick={() => changeSlide("next")}></div>
      )}
    </Container>
  );
};

export default ImageView;
