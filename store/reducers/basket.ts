import { types } from "../actions/basket";
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
const addProduct = (state: BaketState, action: ActionCreatorType) => {
  return {
    ...state,
    count: state.count + 1,
    products: {
      ...state.products,
      [action.payload.articule]: {
        ...action.payload,
        count: -~(state.products[action.payload.articule] || {}).count,
      },
    },
    totalPrice: state.totalPrice + action.payload.price,
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
      return addProduct(state, action);
    case types.REMOVE_PRODUCT:
      return removeProduct(state, action);
    case types.CLEAR_BASKET:
      return { ...initialState };
    case types.INCREMENT_PRODUCT_COUNT:
      const incProduct = state.products[action.payload];
      return {
        ...state,
        count: state.count + 1,
        products: {
          ...state.products,
          [action.payload]: {
            ...incProduct,
            count: incProduct.count + 1,
          },
        },
        totalPrice: state.totalPrice + incProduct.price,
      };
    case types.DECREMENT_PRODUCT_COUNT:
      const decProduct = state.products[action.payload];
      return {
        ...state,
        count: state.count - 1,
        products: {
          ...state.products,
          [action.payload]: {
            ...decProduct,
            count: decProduct.count - 1,
          },
        },
        totalPrice: state.totalPrice - decProduct.price,
      };
    default:
      return state;
  }
};

export default basketReducer;
export type BaketState = Readonly<typeof initialState>;
