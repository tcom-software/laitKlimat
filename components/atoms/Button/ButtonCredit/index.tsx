/*******************************************************/
/*                  Creit Button                       */
/*******************************************************/
import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "@redux/actions/modal";
import Button from "..";

type ButtonCreditProps = {
  [x: string]: any;
};

const ButtonCredit: FC<ButtonCreditProps> = ({
  productId,
  creditData,
  ...props
}) => {
  const dispatch = useDispatch();

  const handleShowBankOrder = useCallback(() => {
    dispatch(
      showModal({
        modalType: "bankOrder",
        modalProps: {
          ...creditData,
        },
      })
    );
  }, []);

  return (
    <Button
      type="button"
      variant="secondary"
      title="купить в кредит"
      onClick={handleShowBankOrder}
      {...props}
    />
  );
};

export default memo(ButtonCredit);
