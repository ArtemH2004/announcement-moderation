import axios from "axios";
import { api, StatsServiceEndpoints } from "@/api/api.ts";
import type { PeriodEnum } from "@/common/enums/PeriodEnum";
import { checkParam } from "@/common/helpers/checkParam";

export const statsApi = {
  async getSummary(period?: PeriodEnum) {
    const periodParam = checkParam("period", period);

    try {
      const response = await api.get(
        `${StatsServiceEndpoints.SUMMARY}?${periodParam}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) throw new Error("Статистика не найдена");
    }
  },

  async getDecisions(period?: PeriodEnum) {
    const periodParam = checkParam("period", period);

    try {
      const response = await api.get(
        `${StatsServiceEndpoints.DECISIONS}?${periodParam}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        throw new Error("График решений не найден");
    }
  },

  async getActivity(period?: PeriodEnum) {
    const periodParam = checkParam("period", period);

    try {
      const response = await api.get(
        `${StatsServiceEndpoints.ACTIVITY}?${periodParam}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        throw new Error("График активности не найден");
    }
  },

  async getCategories(period?: PeriodEnum) {
    const periodParam = checkParam("period", period);

    try {
      const response = await api.get(
        `${StatsServiceEndpoints.CATEGORIES}?${periodParam}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        throw new Error("График по категориям не найден");
    }
  },
};
