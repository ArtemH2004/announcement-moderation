import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  IFilter,
  IFilterCategory,
  IFilterPriceRange,
} from "@/store/reducers/filter/types";
import type { IAdsFullInfo } from "@/store/reducers/ads/types";
import type { StatusEnum } from "@/common/enums/StatusEnum";

export interface IFilterSlice {
  filters: IFilter;
  current: IFilter;
  applied: IFilter | null;
  isApplied: boolean;
}

const initialFilters: IFilter = {
  search: "",
  status: [],
  priceRange: {
    min: "",
    max: "",
  },
  categories: [],
};

const initialState: IFilterSlice = {
  filters: { ...initialFilters },
  current: { ...initialFilters },
  applied: null,
  isApplied: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<IAdsFullInfo[]>) => {
      const ads = action.payload;

      if (ads.length === 0) {
        state.filters = { ...initialFilters };
        return;
      }

      const statuses = [
        ...new Set(ads.map((item) => item.status)),
      ] as StatusEnum[];

      const categoriesMap = new Map<number, IFilterCategory>();
      ads.forEach((item) => {
        if (item.category && item.categoryId) {
          categoriesMap.set(item.categoryId, {
            id: item.categoryId,
            name: item.category,
          });
        }
      });
      const categories = Array.from(categoriesMap.values());

      const prices = ads.map((item) => item.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      state.filters = {
        search: "",
        status: statuses,
        priceRange: {
          min: minPrice.toString(),
          max: maxPrice.toString(),
        },
        categories: categories,
      };

      state.current = {
        search: "",
        status: [],
        priceRange: {
          min: minPrice.toString(),
          max: maxPrice.toString(),
        },
        categories: [],
      };
    },

    updateStatus: (state, action: PayloadAction<StatusEnum>) => {
      const statusIndex = state.current.status.findIndex(
        (status) => status === action.payload
      );

      if (statusIndex !== -1) {
        state.current.status.splice(statusIndex, 1);
      } else {
        state.current.status.push(action.payload);
      }
    },

    updateCategory: (state, action: PayloadAction<IFilterCategory>) => {
      const categoryIndex = state.current.categories.findIndex(
        (category) => category.id === action.payload.id
      );

      if (categoryIndex !== -1) {
        state.current.categories.splice(categoryIndex, 1);
      } else {
        state.current.categories = [action.payload];
      }
    },

    updatePriceRange: (state, action: PayloadAction<IFilterPriceRange>) => {
      state.current.priceRange = action.payload;
    },

    updateSearch: (state, action: PayloadAction<string>) => {
      state.current.search = action.payload;
    },

    applyFilters: (state) => {
      state.applied = { ...state.current };
      state.isApplied = true;
    },

    resetFilters: (state) => {
      state.current = { ...initialFilters };
      state.applied = null;
      state.isApplied = false;
    },

    resetFilter: () => initialState,
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;