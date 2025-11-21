import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { paginationActions } from "@/store/reducers/pagination/paginationSlice";
import { sortActions } from "@/store/reducers/sort/sortSlice";
import { filterActions } from "@/store/reducers/filter/filterSlice";

const actions = {
  ...paginationActions,
  ...sortActions,
  ...filterActions,
};

export const useActions = () => {
  return bindActionCreators(actions, useDispatch());
};
