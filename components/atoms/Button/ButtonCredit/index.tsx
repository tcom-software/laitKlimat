/*******************************************************/
/*                  Creit Button                       */
/*******************************************************/
import React, { FC, memo } from "react";
import Button from "..";

type ButtonCreditProps = {
  [x: string]: any;
};

const ButtonCredit: FC<ButtonCreditProps> = ({ productId, ...props }) => {
  return (
    <Button
      type="button"
      variant="secondary"
      title="купить в кредит"
      // onClick={handleShowNumberBox}
      {...props}
    />
  );
};

export default memo(ButtonCredit);
