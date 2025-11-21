import axios from "axios";
import { AdsServiceEndpoints } from "@/api/api.ts";
import { api } from "@/api/api.ts";
import type { SortEnum } from "@/common/enums/SortEnum";
import { checkParam } from "@/common/helpers/checkParam";

export const adsApi = {
  async getAll(
    page: number,
    limit: number,
    search: string,
    sortBy?: SortEnum,
    sortOrder?: "asc" | "desc"
  ) {
    const pageParam = checkParam("page", page);
    const limitParam = checkParam("limit", limit);
    const searchParam = checkParam("search", search);
    const sortByParam = checkParam("sortBy", sortBy);
    const sortOrderParam = !!sortByParam
      ? checkParam("sortOrder", sortOrder)
      : "";

    try {
      const response = await api.get(
        `${AdsServiceEndpoints.ALL}?${pageParam}&${limitParam}&${searchParam}&${sortByParam}&${sortOrderParam}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) throw new Error("Объявления не найдены");
    }
  },

  async getById(id: string) {
    try {
      const response = await api.get(`${AdsServiceEndpoints.ALL}/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) throw new Error("Объявление не найдено");
    }
  },

  async getFilters(limit: number) {
    const limitParam = checkParam("limit", limit);

    try {
      const response = await api.get(
        `${AdsServiceEndpoints.ALL}?${limitParam}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) throw new Error("Фильтры не найдены");
    }
  },
};
