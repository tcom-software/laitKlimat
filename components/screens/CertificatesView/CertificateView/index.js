import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";

import { Text } from "@atoms";

const CertificateView = ({ brandName, certificate }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = React.useState({
    certificate: false,
    brand: false,
  });

  const certificatePath = useMemo(() => `/images/certificates/${certificate}`, [
    certificate,
  ]);

  const brandLogoPath = useMemo(() => `/images/brands-logo/${brandName}`, [
    brandName,
  ]);

  const handleShowImage = useCallback(() => {
    dispatch(
      showModal({
        modalType: "imageView",
        modalProps: {
          alt: brandName,
          type: "jpg",
          url: `${certificatePath}_max`,
        },
      })
    );
  }, []);

  const styles = name => ({
    visibility: loaded[name] ? "visible" : "hidden",
    opacity: loaded[name] ? 1 : 0,
  });

  return (
    <div>
      <div
        className="certificate--wrapper"
        style={styles("certificate")}
        onClick={() => handleShowImage()}
      >
        <picture>
          <source
            data-srcset={`${certificatePath}_min.webp`}
            type="image/webp"
          />
          <source data-srcset={`${certificatePath}_min.jpg`} type="image/jpg" />
          <img
            alt={brandName}
            data-src={`${certificatePath}_min.jpg`}
            onLoad={() => setLoaded(state => ({ ...state, certificate: true }))}
          />
        </picture>
      </div>
      <Text tag="p" sz="normal" clr="primary">
        {brandName}
      </Text>
      <picture style={styles("brand")}>
        <img
          alt={brandName}
          data-src={`${brandLogoPath}.png`}
          onLoad={() => setLoaded(state => ({ ...state, brand: true }))}
        />
      </picture>
    </div>
  );
};

export default CertificateView;
