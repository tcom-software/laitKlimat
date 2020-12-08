import { combineReducers } from "redux";
import modalReducer from "./modal";
import filterReducer from "./filters";
import filtersDataReducer from "./filtersData";
import productsReducer from "./products";
import siteReducer from "./site";
import loaderReducer from "./loader";
import basketReducer from "./basket";

const combinedReducer = combineReducers({
  site: siteReducer,
  modal: modalReducer,
  loader: loaderReducer,
  basket: basketReducer,
  filters: filterReducer,
  products: productsReducer,
  filtersData: filtersDataReducer,
});

export default combinedReducer;
