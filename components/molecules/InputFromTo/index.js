import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDidUpdate } from "@hooks";
import { Input, Text } from "@atoms";
// import useCheckedFilters from "hooks/useCheckedFilters";
import { StyledFieldSet } from "./styles";
import Skeleton from "./skeleton";

let timeId;

const InputFromTo = ({
  fromText = "От",
  toText = "до",
  inputName,
  loading,
  title,
}) => {
  const router = useRouter();
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  const changeQuery = (from, to) => {
    clearTimeout(timeId);
    setFrom(from);
    setTo(to);

    timeId = setTimeout(() => {
      const query = { ...router.query, page: 1 };

      if (from || to) {
        query[inputName] = [from || "null", to || "null"].join(" ");
      } else {
        delete query[inputName];
      }

      router.push({
        pathname: router.pathname,
        query,
      });
    }, 1500);
  };

  useEffect(() => {
    const range = router.query[inputName];
    if (!range) {
      setFrom("");
      setTo("");
    } else {
      const [from, to] = range.split(" ");
      setFrom(from === "null" ? "" : Number(from));
      setTo(to === "null" ? "" : Number(to));
    }
  }, [router.query[inputName]]);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <StyledFieldSet>
      <legend>
        <Text tag="span" clr="secondary" sz="normal" bold>
          {title}
        </Text>
      </legend>
      <div>
        <Input
          label={fromText}
          value={from}
          type="number"
          name={`${inputName}_from`}
          onChange={e => changeQuery(e.target.value || null, to)}
        />
        <Input
          label={toText}
          value={to}
          type="number"
          name={`${inputName}_to`}
          onChange={e => changeQuery(from, e.target.value || null)}
        />
      </div>
    </StyledFieldSet>
  );
};

export default InputFromTo;
