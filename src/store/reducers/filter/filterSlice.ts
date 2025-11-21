import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFilter, IFilterCategory } from "@/store/reducers/filter/types";
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
    min: 0,
    max: 0,
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
          min: minPrice,
          max: maxPrice,
        },
        categories: categories,
      };

      state.current = {
        search: "",
        status: statuses,
        priceRange: {
          min: minPrice,
          max: maxPrice,
        },
        categories: [],
      };
    },

    updateStatus: (state, action: PayloadAction<StatusEnum>) => {
      state.current.status.push(action.payload);
    },

    updateSearch: (state, action: PayloadAction<string>) => {
      state.current.search = action.payload;
    },

    applyFilters: (state) => {
      state.applied = { ...state.current };
      state.isApplied = true;
    },

    resetFilter: () => initialState,
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;

//   updateCityFilter: (state, action: PayloadAction<string | null>) => {
//       state.current.city = action.payload;
//     },

//     updateGenderFilter: (state, action: PayloadAction<GenderType | null>) => { // Добавил null
//       state.current.gender = action.payload;
//     },

//     updateAgeFilter: (state, action: PayloadAction<[number, number]>) => {
//       state.current.ages = action.payload;
//     },

//     addTagFilter: (state, action: PayloadAction<string>) => {
//       const tagExists = state.current.tags.some(tag => tag === action.payload);
//       if (!tagExists) {
//         state.current.tags.push(action.payload);
//       }
//     },

//     removeTagFilter: (state, action: PayloadAction<string>) => {
//       state.current.tags = state.current.tags.filter(tag => tag !== action.payload);
//     },

//     applyFilters: (state) => {
//       state.applied = { ...state.current };
//       state.isApplied = true;
//     },

//     resetFilters: (state) => {
//       state.current = { ...initialFilters };
//       state.applied = null;
//       state.isApplied = false;
//     },

//     replaceFilters: (state, action: PayloadAction<Partial<IHomeFilters>>) => {
//       state.current = { ...state.current, ...action.payload };
//       state.isApplied = false;
//     },
