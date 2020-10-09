import { memo } from "react";
import { Text } from "@atoms";
import { StyledLabel } from "../styles";

const Textarea = ({ label, type, inputRef, rows = "4" }) => {
  return (
    <StyledLabel>
      <Text tag="p" clr="secondary" sz="normal">
        {label}
      </Text>
      <textarea ref={inputRef} type={type} placeholder={label} rows={rows} />
    </StyledLabel>
  );
};

export default memo(Textarea);
