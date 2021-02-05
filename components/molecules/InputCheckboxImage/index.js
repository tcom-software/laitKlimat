import { useEffect, useState } from "react";
import { Text, Checkbox, Loading } from "@atoms";
import useCheckedFilters from "hooks/useCheckedFilters";
import { StyledFieldSet } from "./styles";
import Skeleton from "./skeleton";

let lastY;

const InputCheckboxImage = ({ data, loading }) => {
  const [inputName, setInputName] = useState("");
  const { handleOnCheck, isChecked } = useCheckedFilters(inputName);

  useEffect(() => {
    if (data) {
      setInputName(data.id);
    }
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
      <legend>
        <Text tag="span" clr="secondary" sz="normal" bold>
          {title}
        </Text>
      </legend>
      <div
        onTouchMove={function (e) {
          e.stopPropagation();
          lastY ?? (lastY = e.touches[0].clientY);
          if (e.touches[0].clientY < lastY) {
            e.currentTarget.scrollBy(0, 15);
          } else {
            e.currentTarget.scrollBy(0, -15);
          }
          lastY = e.touches[0].clientY;
        }}
      >
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
