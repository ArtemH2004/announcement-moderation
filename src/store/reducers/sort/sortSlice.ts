import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { SortEnum, SortOrderEnum } from "@/common/enums/SortEnum";

export interface ISort {
  sortBy: SortEnum;
  sortOrder: SortOrderEnum;
}

const initialState: ISort = {
  sortBy: SortEnum.DEFAULT,
  sortOrder: SortOrderEnum.DESC,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort: (_, action: PayloadAction<ISort>) => {
      return action.payload;
    },

    resetSort: () => initialState,
  },
});

export const { actions: sortActions, reducer: sortReducer } = sortSlice;
