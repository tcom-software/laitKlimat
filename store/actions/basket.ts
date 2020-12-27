// action types
export const types = {
  ADD_PRODUCT: "basket/ADD_PRODUCT",
  REMOVE_PRODUCT: "basket/REMOVE_PRODUCT",
  CLEAR_BASKET: "basket/CLEAR_BASKET",
  INCREMENT_PRODUCT_COUNT: "basket/INCREMENT_PRODUCT_COUNT",
  DECREMENT_PRODUCT_COUNT: "basket/DECREMENT_PRODUCT_COUNT",

  ORDER_PRODUCT_LOADING: "basket/ORDER_PRODUCT_LOADING",
  ORDER_PRODUCT_SUCCESS: "basket/ORDER_PRODUCT_SUCCESS",
  ORDER_PRODUCT_FAILURE: "basket/ORDER_PRODUCT_FAILURE",
};

// action creators

export type ProductPayload = {
  id: number;
  price: number;
};

export const basketAddProduct = (product: ProductPayload) => ({
  type: types.ADD_PRODUCT,
  payload: product,
});

export const basketRemoveProduct = (productId: number) => ({
  type: types.REMOVE_PRODUCT,
  payload: productId,
});

export const basketClear = () => ({
  type: types.CLEAR_BASKET,
});

export const incrementProductCount = (productId: number) => ({
  type: types.INCREMENT_PRODUCT_COUNT,
  payload: productId,
});

export const decrementProductCount = (productId: number) => ({
  type: types.DECREMENT_PRODUCT_COUNT,
  payload: productId,
});
