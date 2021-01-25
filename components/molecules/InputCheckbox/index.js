import { useEffect, useState } from "react";
import useCheckedFilters from "hooks/useCheckedFilters";
import { Text, Checkbox, Loading } from "@atoms";
import { StyledFieldSet } from "./styles";
import Skeleton from "./skeleton";

const InputCheckbox = ({ data, loading }) => {
  const [inputName, setInputName] = useState("");
  const { handleOnCheck, isChecked } = useCheckedFilters(inputName);

  useEffect(() => {
    if (data) setInputName(data.id);
  }, [data?.id]);

  if (loading) {
    return <Skeleton />;
  }

  if (!loading && !data) {
    return null;
  }

  const { title, values: checkboxes } = data;

  return (
    <StyledFieldSet>
      {title && (
        <legend>
          <Text tag="span" clr="secondary" sz="normal" bold>
            {title}
          </Text>
        </legend>
      )}

      {checkboxes
        .filter(({ label }) => label !== "не выбрано")
        .sort((a, b) => a.value - b.value)
        .map(({ label, value }, idx) => (
          <label key={idx}>
            <Checkbox
              value={value}
              name={inputName}
              checked={isChecked(value)}
              onChange={handleOnCheck}
            />
            <Text
              tag="span"
              sz="smaller"
              {...(title
                ? { clr: "primary" }
                : { clr: "secondary", bold: true })}
            >
              {label}
            </Text>
          </label>
        ))}
    </StyledFieldSet>
  );
};

export default InputCheckbox;
