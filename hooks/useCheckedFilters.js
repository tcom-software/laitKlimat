import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const useCheckedFilters = inputName => {
  const router = useRouter();
  const [checkedInputs, setCheckedInputs] = useState([]);

  useEffect(() => {
    /**
     * checked values from url search params
     * @example
     * in url => ?3=1+45+12+7
     * 3 => checkboxes group name(inputName)
     * 1+45+12+7 => checked inputs values
     *
     * in router.query[inputName] => "1 45 12 7"
     */
    const checkedValues = router.query[inputName]?.split(" ");
    setCheckedInputs(checkedValues || []);
  }, [router.query, inputName]);

  /**
   *
   */
  const isChecked = useCallback(
    value => {
      return checkedInputs.indexOf(String(value)) !== -1;
    },
    [checkedInputs]
  );

  /**
   *
   */
  const handleOnCheck = useCallback(
    ({ target }) => {
      const isChecked = target.checked;
      const query = { ...router.query, page: 1 };
      console.log(query, 39);

      if (isChecked) {
        query[inputName] = [...checkedInputs, target.value].join(" ");
        console.log(query, 40);
      } else {
        const newSearchParams = checkedInputs
          .filter(val => val !== target.value)
          .join(" ");

        if (!newSearchParams) {
          delete query[inputName];
        } else {
          query[inputName] = newSearchParams;
        }
      }
      console.log(query, 55);
      router.push({
        pathname: router.pathname,
        query,
      });
    },
    [checkedInputs, inputName]
  );

  return { handleOnCheck, isChecked };
};

export default useCheckedFilters;
