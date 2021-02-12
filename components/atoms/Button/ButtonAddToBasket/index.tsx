/*******************************************************/
/*               Add to Basket Button                  */
/*******************************************************/
import { basketAddProduct, ProductPayload } from "@redux/actions/basket";
import { addNotification } from "@redux/actions/notification";
import React, { FC, useState, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { Variant } from "../types";
import Button from "..";

type ButtonAddToBasketProps = {
  title?: string;
  variant?: Variant;
  callBack?: Function;
  product: ProductPayload;
  [x: string]: any;
};

const ButtonAddToBasket: FC<ButtonAddToBasketProps> = ({
  product,
  callBack,
  title = "В корзину",
  variant = "primary",
  ...props
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const addToBasket = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(basketAddProduct(product));
      dispatch(
        addNotification({
          description: "Продукт добавлен в корзину",
          state: "success",
        })
      );
      if (typeof callBack === "function") {
        callBack();
      }
    }, 300);
  }, [product]);

  return (
    <Button
      type="button"
      title={title}
      variant={variant}
      loading={loading}
      onClick={addToBasket}
      {...props}
    />
  );
};

export default memo(ButtonAddToBasket);
