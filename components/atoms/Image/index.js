import React from "react";
import PropTypes from "prop-types";

import { values as breakoints } from "@styles/breakpoints";
import { StyledPicture } from "./styles";

/**
 * Image component for responsive images
 * @param {Object} props
 */
const Image = ({ path, type, alt, withShadow, responsive, ...imageProps }) => {
  return (
    <StyledPicture withShadow {...imageProps}>
      {responsive ? (
        <>
          <source
            srcSet={`${path}_mobile.webp`}
            media={`(max-width: ${breakoints.xs}px)`}
            type="image/webp"
          />
          <source
            srcSet={`${path}_mobile.${type}`}
            media={`(max-width: ${breakoints.xs}px)`}
            type={`image/${type}`}
          />
          <source srcSet={`${path}_desktop.webp`} type="image/webp" />
          <source srcSet={`${path}_desktop.${type}`} type={`image/${type}`} />
          <img src={`${path}_desktop.${type}`} alt={alt} />
        </>
      ) : (
        <>
          <source srcSet={`${path}.webp`} type="image/webp" />
          <source srcSet={`${path}.${type}`} type={`image/${type}`} />
          <img src={`${path}.${type}`} alt={alt} />
        </>
      )}
    </StyledPicture>
  );
};

Image.defaultProps = {
  alt: "",
  path: "",
  type: "jpg",
  withShadow: false,
};

Image.propTypes = {
  alt: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string,
  withShadow: PropTypes.bool,
};

export default Image;
