import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IStatsPeriod } from "@/store/reducers/stats/types";
import { PeriodEnum } from "@/common/enums/PeriodEnum";

const initialState: IStatsPeriod = {
  period: PeriodEnum.DEFAULT,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    setPeriod: (_, action: PayloadAction<IStatsPeriod>) => {
      return action.payload;
    },

    resetPeriod: () => initialState,
  },
});

export const { actions: statsActions, reducer: statsReducer } = statsSlice;
