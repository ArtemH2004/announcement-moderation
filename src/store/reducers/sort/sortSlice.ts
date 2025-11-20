import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { SortEnum } from "@/common/enums/SortEnum";

export interface ISort {
  sortBy: SortEnum;
  sortOrder: "asc" | "desc";
}

const initialState: ISort = {
  sortBy: SortEnum.DEFAULT,
  sortOrder: "desc",
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
