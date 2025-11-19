import axios from "axios";
import { AdsServiceEndpoints } from "@/api/api.ts";
import { api } from "@/api/api.ts";

export const adsApi = {
  async getAll(page: number, limit: number) {
    try {
      const response = await api.get(
        `${AdsServiceEndpoints.ALL}?page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) throw new Error("Объявления не найдены");
    }
  },
};
