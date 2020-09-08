import { useMemo } from "react";
import thunkMiddleware from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware } from "redux";
import combinedReducer from "./reducers";

let store: any;

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["counter"], // place to select which state you want to persist
};

const bindMiddleware = (middleware: any[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const initStore = (preloadedState = {}) => {
  return createStore(
    persistedReducer,
    preloadedState,
    bindMiddleware([thunkMiddleware])
  );
};

export const initializeStore = (preloadedState: any) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const useStore = (initialState: any) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
