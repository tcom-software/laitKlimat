import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";

import { Text } from "@atoms";

const CertificateView = ({
  file_name,
  logo: brandLogo,
  name: certificateName,
}) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = React.useState({
    certificate: false,
    brand: false,
  });

  const certificatePath = (size = "size300") =>
    `${process.env.NEXT_PUBLIC_API_UPLOADS_URL}manufacturer_certificate/${size}/${file_name}`;

  const brandLogoPath = (size = "size150") =>
    `${process.env.NEXT_PUBLIC_API_UPLOADS_URL}manufacturer_logo/${size}/${brandLogo}`;

  const handleShowImage = useCallback(() => {
    dispatch(
      showModal({
        modalType: "imageView",
        modalProps: {
          responsive: false,
          alt: certificateName,
          url: certificatePath("size800"),
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
        onClick={handleShowImage}
      >
        <picture>
          <img
            alt={certificateName}
            data-src={certificatePath()}
            onLoad={() => setLoaded(state => ({ ...state, certificate: true }))}
          />
        </picture>
      </div>
      <Text tag="p" sz="normal" clr="primary">
        {certificateName}
      </Text>
      <picture style={styles("brand")}>
        <img
          alt={certificateName}
          data-src={brandLogoPath()}
          onLoad={() => setLoaded(state => ({ ...state, brand: true }))}
        />
      </picture>
    </div>
  );
};

export default CertificateView;
