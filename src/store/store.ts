import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { paginationReducer } from "@/store/reducers/pagination/paginationSlice";

const rememberedReducers = ["paginationReducer"];

const rootReducer = combineReducers({
  paginationReducer,
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
  reducer: rememberedReducer,
  enhancers: (getDefaultEnhancer) =>
    getDefaultEnhancer().concat(
      rememberEnhancer(window.localStorage, rememberedReducers)
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
