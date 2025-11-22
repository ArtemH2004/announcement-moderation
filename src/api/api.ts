import axios from "axios";

export const api = axios.create({
  baseURL: "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const adsService = "/ads";
const statsService = "/stats";

export enum AdsServiceEndpoints {
  ALL = `${adsService}`,
}

export enum StatsServiceEndpoints {
  SUMMARY = `${statsService}/summary`,
  DECISIONS = `${statsService}/chart/decisions`,
}
