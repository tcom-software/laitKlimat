import { Text, Checkbox } from "@atoms";
import { StyledFieldSet } from "./styles";

const InputCheckboxImage = ({ title, inputName, checkboxes }) => {
  return (
    <StyledFieldSet>
      <legend>
        <Text tag="span" clr="secondary" sz="normal" bold>
          {title}
        </Text>
      </legend>
      <div>
        {checkboxes.map(({ label, image, value }, idx) => (
          <label key={idx} title={label}>
            <img src={`images/filter/${image}`} alt={label} title={label} />

            <Text tag="span" sz="small" clr="primary">
              {label}
            </Text>

            <Checkbox name={inputName} value={value} />
          </label>
        ))}
      </div>
    </StyledFieldSet>
  );
};

export default InputCheckboxImage;
