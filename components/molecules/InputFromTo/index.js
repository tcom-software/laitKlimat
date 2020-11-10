import { Input, Text } from "@atoms";
import { StyledFieldSet } from "./styles";

const InputFromTo = ({ fromText = "От", toText = "до", title, inputName }) => {
  return (
    <StyledFieldSet>
      <legend>
        <Text tag="span" clr="secondary" sz="normal" bold>
          {title}
        </Text>
      </legend>
      <div>
        <Input label={fromText} type="number" name={`${inputName}_from`} />
        <Input label={toText} type="number" name={`${inputName}_to`} />
      </div>
    </StyledFieldSet>
  );
};

export default InputFromTo;
