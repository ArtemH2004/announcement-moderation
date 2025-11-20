import axios from "axios";
import { AdsServiceEndpoints } from "@/api/api.ts";
import { api } from "@/api/api.ts";
import type { SortEnum } from "@/common/enums/SortEnum";

export const adsApi = {
  async getAll(
    page: number,
    limit: number,
    sortBy?: SortEnum,
    sortOrder?: "asc" | "desc"
  ) {
    try {
      const response = await api.get(
        `${AdsServiceEndpoints.ALL}?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) throw new Error("Объявления не найдены");
    }
  },
};
