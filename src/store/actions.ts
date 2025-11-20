import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { paginationActions } from "@/store/reducers/pagination/paginationSlice";
import { sortActions } from "@/store/reducers/sort/sortSlice";

const actions = {
  ...paginationActions,
  ...sortActions,
};

export const useActions = () => {
  return bindActionCreators(actions, useDispatch());
};
