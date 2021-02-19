/*******************************************************/
/*                  Credit Button                       */
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
    const { products, totalPrice, ...singleProduct } = creditData;
    let validateCreditData = {
      products,
      totalPrice,
    };

    if (!products) {
      validateCreditData.products = [{ ...singleProduct }];
      validateCreditData.totalPrice =
        singleProduct.price * (singleProduct.count ?? 1);
    }

    dispatch(
      showModal({
        modalType: "bankOrder",
        modalProps: validateCreditData,
      })
    );
  }, []);

  return (
    <Button
      type="button"
      variant="secondary"
      title="Купить в кредит"
      onClick={handleShowBankOrder}
      {...props}
    />
  );
};

export default memo(ButtonCredit);
