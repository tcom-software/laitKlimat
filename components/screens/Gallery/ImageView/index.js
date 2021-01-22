import React, { useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";

const ImageView = ({ name, count }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const imagePath = useMemo(() => `/images/gallery/${name}`, [name]);

  const handleShowImage = useCallback(() => {
    dispatch(
      showModal({
        modalType: "imageView",
        modalProps: {
          count,
          type: "jpg",
          number: name,
          asSlider: true,
          url: `/images/gallery/`,
          alt: "Фото наших монтажей",
        },
      })
    );
  }, []);

  const styles = () => ({
    visibility: loaded ? "visible" : "hidden",
    opacity: loaded ? 1 : 0,
  });

  return (
    <div
      style={styles()}
      className="image--wrapper"
      onClick={() => handleShowImage()}
    >
      <picture>
        <source data-srcset={`${imagePath}_min.webp`} type="image/webp" />
        <source data-srcset={`${imagePath}_min.jpg`} type="image/jpg" />
        <img
          alt="Фото наших монтажей"
          data-src={`${imagePath}_min.jpg`}
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </div>
  );
};

export default ImageView;
