import { memo } from "react";
import { Text } from "@atoms";
import { StyledLabel } from "../styles";

const Input = ({ label, type, inputRef }) => {
  return (
    <StyledLabel>
      <Text tag="p" clr="secondary" sz="normal">
        {label}
      </Text>
      <input ref={inputRef} type={type} placeholder={label} />
    </StyledLabel>
  );
};

export default memo(Input);
