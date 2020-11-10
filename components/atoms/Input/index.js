import { memo } from "react";
import { Text } from "@atoms";
import { StyledLabel } from "../styles";

const Input = ({
  label,
  type,
  name = "",
  inputRef = null,
  placeholder = "",
  ...rest
}) => {
  return (
    <StyledLabel>
      <Text tag="p" clr="secondary" sz="normal">
        {label}
      </Text>
      <input
        {...rest}
        type={type}
        name={name}
        ref={inputRef}
        placeholder={placeholder ? placeholder : label}
      />
    </StyledLabel>
  );
};

export default memo(Input);
