import { Text, Checkbox } from "@atoms";
import { StyledFieldSet } from "./styles";

const InputCheckbox = ({ title, inputName, checkboxes }) => {
  return (
    <StyledFieldSet>
      {title && (
        <legend>
          <Text tag="span" clr="secondary" sz="normal" bold>
            {title}
          </Text>
        </legend>
      )}

      {checkboxes.map(({ label, value }, idx) => (
        <label key={idx}>
          <Checkbox name={inputName} value={value} />

          <Text
            tag="span"
            sz="smaller"
            {...(title ? { clr: "primary" } : { clr: "secondary", bold: true })}
          >
            {label}
          </Text>
        </label>
      ))}
    </StyledFieldSet>
  );
};

export default InputCheckbox;
