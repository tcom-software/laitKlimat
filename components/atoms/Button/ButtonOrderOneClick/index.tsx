/*******************************************************/
/*             Order one click Button                 */
/*******************************************************/
import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";
import { Variant } from "../types";
import Button from "..";

type ButtonOrderOneClickProps = {
  title?: string;
  variant?: Variant;
  [x: string]: any;
};

export const ButtonOrderOneClick: FC<ButtonOrderOneClickProps> = ({
  variant = "tercary",
  title = "Купить в 1 клик",
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
      title={title}
      variant={variant}
      onClick={handleShowNumberBox}
      {...props}
    />
  );
};

export default memo(ButtonOrderOneClick);
