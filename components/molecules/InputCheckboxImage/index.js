import { Text, Checkbox, Loading } from "@atoms";
import useCheckedFilters from "hooks/useCheckedFilters";
import { useEffect, useState } from "react";
import { StyledFieldSet } from "./styles";

const InputCheckboxImage = ({ data, loading }) => {
  const [inputName, setInputName] = useState("");
  const { handleOnCheck, isChecked } = useCheckedFilters(inputName);

  useEffect(() => {
    if (data) {
      setInputName(data.id);
    }
  }, [data?.id]);

  if (loading) {
    return <Loading mode="dark" />;
  }

  if (!loading && !data) {
    return null;
  }

  const { title, values: checkboxes } = data;

  return (
    <StyledFieldSet>
      <legend>
        <Text tag="span" clr="secondary" sz="normal" bold>
          {title}
        </Text>
      </legend>
      <div>
        {checkboxes
          .filter(({ label }) => label !== "не выбрано")
          .map(({ label, value }, index) => (
            <label title={label} key={index}>
              <img
                src={`images/country-flags/${countryAbbr[label]}.svg`}
                alt={label}
                title={label}
              />
              <Text tag="span" sz="small" clr="primary">
                {label}
              </Text>
              <Checkbox
                value={value}
                name={inputName}
                onChange={handleOnCheck}
                checked={isChecked(value)}
              />
            </label>
          ))}
      </div>
    </StyledFieldSet>
  );
};

export default InputCheckboxImage;

const countryAbbr = {
  Китай: "cn",
  Корея: "kr",
  США: "us",
  Япония: "jp",
  Израиль: "il",
  Малайзия: "my",
  Россия: "ru",
  Великобритания: "gb",
  Австралия: "au",
  Италия: "it",
  Тайланд: "th",
  Швеция: "se",
  Швейцария: "ch",
  Чехия: "cz",
  Германия: "de",
  Норвегия: "no",
  Испания: "es",
  Бельгия: "be",
};
