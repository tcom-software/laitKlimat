import { useState } from "react";
import { Icon, Text, Input, Checkbox } from "@atoms";
import { StyledFieldSet } from "./styles";

const InputCheckboxImageSearch = ({ title, inputName, checkboxes }) => {
  const [search, setSearch] = useState("");

  const values = search
    ? checkboxes.filter(({ label }) =>
        search ? label.toLowerCase().indexOf(search.toLowerCase()) !== -1 : true
      )
    : checkboxes;

  return (
    <StyledFieldSet>
      <legend>
        <Text tag="span" clr="secondary" sz="normal" bold>
          {title}
        </Text>
      </legend>
      <div className="wrapper">
        {values.map(({ label, image, value, count }, idx) => (
          <label key={idx} title={label}>
            <img
              src={`images/brands-logo/${image}`}
              alt={label}
              title={label}
            />

            <Text tag="span" sz="smaller" clr="primary">
              {label}
            </Text>

            <Text tag="span" sz="smaller" clr="primary">
              {count}
            </Text>

            <Checkbox name={inputName} value={value} />
          </label>
        ))}
        {!!values.length || (
          <Text tag="span" sz="smaller" clr="primary">
            ......
          </Text>
        )}
      </div>
      <div className="search">
        <Input
          list="fdgfdg, sdgsdg"
          type="search"
          name="search"
          label="поиск производителя"
          aria-label="поиск производителя"
          autoComplete="off"
          onChange={({ target }) => setSearch(target.value)}
        />
        <button type="button" aria-label="search">
          <Icon name="search" />
        </button>
      </div>
    </StyledFieldSet>
  );
};

export default InputCheckboxImageSearch;
