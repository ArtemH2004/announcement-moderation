import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPagination } from "@/store/reducers/pagination/types";

const initialState: IPagination = {
  currentPage: 1,
  totalPages: 0,
  totalItems: 0,
  itemsPerPage: 10,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination: (_, action: PayloadAction<IPagination>) => {
      return action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },

    nextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },

    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },

    resetPagination: () => initialState,
  },
});

export const { actions: paginationActions, reducer: paginationReducer } = paginationSlice;
