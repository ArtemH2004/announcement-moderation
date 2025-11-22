import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { paginationReducer } from "@/store/reducers/pagination/paginationSlice";
import { sortReducer } from "@/store/reducers/sort/sortSlice";
import { filterReducer } from "@/store/reducers/filter/filterSlice";
import { statsReducer } from "@/store/reducers/stats/statsSlice";

const rememberedReducers = [
  "paginationReducer",
  "sortReducer",
  "filterReducer",
  "statsReducer",
];

const rootReducer = combineReducers({
  paginationReducer,
  sortReducer,
  filterReducer,
  statsReducer,
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
