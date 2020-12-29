import { combineReducers } from "redux";
import modalReducer from "./modal";
import filterReducer from "./filters";
import filtersDataReducer from "./filtersData";
import productsReducer from "./products";
import siteReducer from "./site";
import loaderReducer from "./loader";
import basketReducer from "./basket";
import previousViewsReducer from "./previousViews";
import notificationReducer from "./notification";

const combinedReducer = combineReducers({
  site: siteReducer,
  modal: modalReducer,
  loader: loaderReducer,
  basket: basketReducer,
  filters: filterReducer,
  products: productsReducer,
  filtersData: filtersDataReducer,
  previousViews: previousViewsReducer,
  notification: notificationReducer,
});

export default combinedReducer;
