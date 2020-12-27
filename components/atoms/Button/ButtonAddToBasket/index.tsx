/*******************************************************/
/*               Add to Basket Button                  */
/*******************************************************/
import { basketAddProduct, ProductPayload } from "@redux/actions/basket";
import React, { FC, useState, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import Button from "..";

type ButtonAddToBasketProps = {
  product: ProductPayload;
  [x: string]: any;
};

const ButtonAddToBasket: FC<ButtonAddToBasketProps> = ({
  product,
  ...props
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const addToBasket = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(basketAddProduct(product));
    }, 300);
  }, [product]);

  return (
    <Button
      type="button"
      variant="primary"
      title="в корзину"
      loading={loading}
      onClick={addToBasket}
      {...props}
    />
  );
};

export default memo(ButtonAddToBasket);
