import { memo, useRef, useState } from "react";
import { StyledLabel } from "../styles";
import { Text } from "@atoms";
import cn from "classnames";

import { useOutsideClickClose } from "@hooks";

const Select = ({
  type,
  label,
  inputRef,
  options = [],
  onChange: parentOnChange,
}) => {
  const ref = useRef(null);
  const [selected, setSelectd] = useState(options[0]?.title || "");
  const [isOpen, setOpen] = useState(false);

  useOutsideClickClose(ref, () => setOpen(false));

  const handleOnchange = title => {
    setSelectd(title);
    parentOnChange && parentOnChange(title);
  };

  return (
    <StyledLabel className="select" ref={ref}>
      <Text tag="p" clr="secondary" sz="normal">
        {label}
      </Text>
      <input
        onClick={() => setOpen(o => !o)}
        value={selected}
        ref={inputRef}
        type={type}
        readOnly
      />
      <ul className={cn("custom-selest", { isOpen })}>
        {options.map(({ title }, idx) => (
          <li
            id={idx}
            onClick={() => handleOnchange(title)}
            className={cn({ selected: selected === title })}
          >
            {title}
          </li>
        ))}
      </ul>
    </StyledLabel>
  );
};

export default memo(Select);
