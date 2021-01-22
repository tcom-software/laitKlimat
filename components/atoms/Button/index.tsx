import React, { FC, memo } from "react";
import cn from "classnames";

import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  title,
  type,
  variant,
  className = "",
  refName = null,
  children = null,
  loading = false,
  loadingMode = "dark",
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
        <span className={cn(loadingMode)}>
          <img src="/images/loading.svg" />
        </span>
      )}
      {children}
      <span dangerouslySetInnerHTML={{ __html: title as string }} />
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "primary",
};

export default memo(Button);
