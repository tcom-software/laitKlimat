// import PropTypes from "prop-types";

import { values as breakpoints } from "@styles/breakpoints";
import { StyledPicture } from "./styles";

interface ImageInterface {
  path: string;
  type: string;
  alt: string;
  withShadow?: boolean;
  responsive?: boolean;
  onClick?: (evant: any) => void;
  imageProps?: Object;
}

/**
 * Image component for responsive images
 */
const Image = ({
  path,
  type,
  alt,
  withShadow,
  responsive,
  onClick,
  ...imageProps
}: ImageInterface) => {
  return (
    <StyledPicture withShadow {...imageProps}>
      {responsive ? (
        <>
          <source
            srcSet={`${path}_mobile.webp`}
            media={`(max-width: ${breakpoints.xs}px)`}
            type="image/webp"
          />
          <source
            srcSet={`${path}_mobile.${type}`}
            media={`(max-width: ${breakpoints.xs}px)`}
            type={`image/${type}`}
          />
          <source srcSet={`${path}_desktop.webp`} type="image/webp" />
          <source srcSet={`${path}_desktop.${type}`} type={`image/${type}`} />
          <img src={`${path}_desktop.${type}`} alt={alt} onClick={onClick} />
        </>
      ) : (
        <>
          <source srcSet={`${path}.webp`} type="image/webp" />
          <source srcSet={`${path}.${type}`} type={`image/${type}`} />
          <img src={`${path}.${type}`} alt={alt} onClick={onClick} />
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

// Image.propTypes = {
//   alt: PropTypes.string,
//   path: PropTypes.string,
//   type: PropTypes.string,
//   withShadow: PropTypes.bool,
// };

export default Image;
