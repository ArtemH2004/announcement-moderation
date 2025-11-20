import axios from "axios";
import { AdsServiceEndpoints } from "@/api/api.ts";
import { api } from "@/api/api.ts";
import type { SortEnum } from "@/common/enums/SortEnum";
import { checkParam } from "@/common/helpers/checkParam";

export const adsApi = {
  async getAll(
    page: number,
    limit: number,
    sortBy?: SortEnum,
    sortOrder?: "asc" | "desc"
  ) {
    const pageParam = checkParam("page", page);
    const limitParam = checkParam("limit", limit);
    const sortByParam = checkParam("sortBy", sortBy);
    const sortOrderParam = !!sortByParam ? checkParam("sortOrder", sortOrder) : "";

    try {
      const response = await api.get(
        `${AdsServiceEndpoints.ALL}?${pageParam}&${limitParam}&${sortByParam}&${sortOrderParam}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) throw new Error("Объявления не найдены");
    }
  },
};
