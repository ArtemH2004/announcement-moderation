import { paginationActions } from "@/store/reducers/pagination/paginationSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const actions = {
  ...paginationActions,
};

export const useActions = () => {
  return bindActionCreators(actions, useDispatch());
};
