import { ProductPayload, types } from "../actions/basket";
import { ActionCreatorType } from "../types";

const removeProduct = (state: BaketState, action: ActionCreatorType) => {
  const { price, count } = state.products[action.payload];
  const products = { ...state.products };
  delete products[action.payload];

  return {
    ...state,
    count: state.count - count,
    products,
    totalPrice: state.totalPrice - price * count,
  };
};
const addProduct = (state: BaketState, action: { payload: ProductPayload }) => {
  return {
    ...state,
    count: state.count + 1,
    products: {
      ...state.products,
      [action.payload.id]: {
        ...action.payload,
        count: -~state.products[action.payload.id]?.count,
      },
    },
    totalPrice: state.totalPrice + action.payload.price,
  };
};

const incrementProductCount = (
  state: BaketState,
  action: ActionCreatorType
) => {
  const { [action.payload]: incProduct, ...rest } = state.products;

  return {
    ...state,
    count: state.count - 1,
    totalPrice: state.totalPrice - incProduct.price,
    products:
      incProduct.count === 1
        ? rest
        : {
            ...rest,
            [action.payload]: {
              ...incProduct,
              count: incProduct.count - 1,
            },
          },
  };
};

const decrementProductCount = (
  state: BaketState,
  action: ActionCreatorType
) => {
  const { [action.payload]: decProduct, ...rest } = state.products;

  return {
    ...state,
    count: state.count + 1,
    totalPrice: state.totalPrice + decProduct.price,
    products: {
      ...rest,
      [action.payload]: {
        ...decProduct,
        count: decProduct.count + 1,
      },
    },
  };
};

const initialState = {
  count: 0,
  products: {} as any,
  totalPrice: 0,
  loading: false,
};

const basketReducer = (
  state = initialState,
  action: ActionCreatorType
): BaketState => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return addProduct(state, action as any);

    case types.REMOVE_PRODUCT:
      return removeProduct(state, action);

    case types.CLEAR_BASKET:
      return { ...initialState };

    case types.INCREMENT_PRODUCT_COUNT:
      return decrementProductCount(state, action);

    case types.DECREMENT_PRODUCT_COUNT:
      return incrementProductCount(state, action);

    default:
      return state;
  }
};

export default basketReducer;
export type BaketState = Readonly<typeof initialState>;
