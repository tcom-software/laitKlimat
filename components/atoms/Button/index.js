import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { StyledButton } from "./styles";

const variants = ["primary", "secondary", "tercary"];
// const sizes = [];

const Button = ({
  title,
  type,
  variant,
  className = "",
  refName = null,
  children = null,
  loading = false,
  ...buttonProps
}) => {
  return (
    <StyledButton
      type={type}
      ref={refName}
      variant={variant}
      className={cn([className, { loading }])}
      aria-label={title}
      {...buttonProps}
    >
      {loading && (
        <span>
          <img src="/images/loading.svg" />
        </span>
      )}
      {children}
      <span dangerouslySetInnerHTML={{ __html: title }} />
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(variants),
  refName: PropTypes.object,
  className: PropTypes.string,
};

export default React.memo(Button);
