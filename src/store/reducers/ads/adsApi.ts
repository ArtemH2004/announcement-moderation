import axios from "axios";
import { AdsServiceEndpoints } from "@/api/api.ts";
import { api } from "@/api/api.ts";

export const adsApi = {
  async getAll() // page: number = 1,
  // limit: number = 5
  {
    try {
      const response = await api.get(AdsServiceEndpoints.ALL);
      //   const response = await api.get(
      //     `${EateryServiceEndpoints.ALL}?${cityParam}${eateryParam}${typeParam}${priceParam}${pageParam}${limitParam}`
      //   );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) throw new Error("Объявления не найдены");
    }
  },
};
