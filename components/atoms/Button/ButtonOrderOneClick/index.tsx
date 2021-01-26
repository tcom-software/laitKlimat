/*******************************************************/
/*             Oreder one click Button                 */
/*******************************************************/
import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";
import Button from "..";

type ButtonOrderOneClickProps = {
  [x: string]: any;
};

export const ButtonOrderOneClick: FC<ButtonOrderOneClickProps> = ({
  ...props
}) => {
  const dispatch = useDispatch();

  const handleShowNumberBox = useCallback(() => {
    dispatch(
      showModal({
        modalType: "numberBox",
        modalProps: {
          type: "product",
        },
      })
    );
  }, []);

  return (
    <Button
      type="button"
      variant="tercary"
      title="Купить в 1 клик"
      onClick={handleShowNumberBox}
      {...props}
    />
  );
};

export default memo(ButtonOrderOneClick);
