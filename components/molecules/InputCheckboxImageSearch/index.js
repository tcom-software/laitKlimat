import { useEffect, useState, useRef } from "react";
import useCheckedFilters from "hooks/useCheckedFilters";
import { Icon, Text, Input, Checkbox, Loading } from "@atoms";
import { StyledFieldSet } from "./styles";
import Skeleton from "./skeleton";

let lastY;

const InputCheckboxImageSearch = ({
  title,
  loading,
  inputName,
  checkboxes,
}) => {
  const scrollRef = useRef(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const { handleOnCheck, isChecked } = useCheckedFilters(inputName);

  useEffect(() => {
    if (search) {
      const result = checkboxes.filter(
        ({ label }) => label.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      setSearchResult(result);
    } else {
      setSearchResult(null);
    }
  }, [search]);

  if (loading) {
    return <Skeleton />;
  }

  if (!loading && (!checkboxes || checkboxes.length === 0)) {
    return null;
  }

  return (
    <StyledFieldSet>
      <legend>
        <Text tag="span" clr="secondary" sz="normal" bold>
          {title || ""}
        </Text>
      </legend>
      {!loading && (
        <>
          <div
            className="wrapper"
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
            {(searchResult || checkboxes).map(
              ({ label, image, value, count }, idx) => (
                <label key={idx} title={label}>
                  <img src={image} alt={label} title={label} />
                  <Text tag="span" sz="smaller" clr="primary">
                    {label}
                  </Text>
                  <Text tag="span" sz="smaller" clr="primary">
                    {count + ""}
                  </Text>
                  <Checkbox
                    value={value}
                    name={inputName}
                    onChange={handleOnCheck}
                    checked={isChecked(value)}
                  />
                </label>
              )
            )}
            {searchResult?.length === 0 && (
              <Text tag="span" sz="smaller" clr="primary" className="no-search">
                {`????????????????, ???? ???? ?????????? ?????????????? ???? ???????????? ?????????????? "${search}".`}
              </Text>
            )}
          </div>

          <div className="search">
            <Input
              list="fdgfdg, sdgsdg"
              type="search"
              name="search"
              label="?????????? ??????????????????????????"
              aria-label="?????????? ??????????????????????????"
              autoComplete="off"
              onChange={e => setSearch(e.target.value)}
            />
            <button type="button" aria-label="search">
              <Icon name="search" />
            </button>
          </div>
        </>
      )}
    </StyledFieldSet>
  );
};

export default InputCheckboxImageSearch;
