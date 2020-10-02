import React, { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";

import { Text } from "@atoms";

const ClientView = ({ frontUrl, name }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = React.useState(false);

  const frontPath = useMemo(() => `/images/our-clients/companies/${frontUrl}`, [
    frontUrl,
  ]);

  const backPath = useMemo(() => `/images/our-clients/back-view/${frontUrl}`, [
    frontUrl,
  ]);

  const handleShowImage = useCallback(() => {
    dispatch(
      showModal({
        modalType: "imageView",
        modalProps: {
          alt: name,
          type: "jpg",
          url: `${backPath}_max`,
        },
      })
    );
  }, []);

  return (
    <div>
      <div
        class="scene"
        style={{
          visibility: loaded ? "visible" : "hidden",
          opacity: loaded ? 1 : 0,
        }}
      >
        <div class="card">
          <div class="card__face card__face--front">
            <picture>
              <source srcSet={`${frontPath}.webp`} type="image/webp" />
              <source srcSet={`${frontPath}.jpg`} type="image/jpg" />
              <img
                alt={name}
                src={`${frontPath}.jpg`}
                onLoad={() => setLoaded(true)}
              />
            </picture>
          </div>
          <div
            class="card__face card__face--back"
            onClick={() => handleShowImage()}
          >
            <picture>
              <source srcSet={`${backPath}_min.webp`} type="image/webp" />
              <source srcSet={`${backPath}_min.jpg`} type="image/jpg" />
              <img alt={name} src={`${backPath}_min.jpg`} />
            </picture>
          </div>
        </div>
      </div>
      <Text tag="p" sz="normal" clr="primary">
        {name}
      </Text>
    </div>
  );
};

export default ClientView;
