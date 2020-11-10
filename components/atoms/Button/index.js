import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";

const variants = ["primary", "secondary", "tercary"];
// const sizes = [];

const Button = ({
  title,
  type,
  refName,
  variant,
  className,
  children=null,
  ...buttonProps
}) => {
  return (
    <StyledButton
      type={type}
      ref={refName}
      variant={variant}
      className={className}
      aria-label={title}
      {...buttonProps}
    >
      {children}
      <span>{title}</span>
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
  refName: null,
  className: "",
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(variants),
  refName: PropTypes.object,
  className: PropTypes.string,
};

export default React.memo(Button);
