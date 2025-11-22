import type { PeriodEnum } from "@/common/enums/PeriodEnum";

export interface IStatsSummary {
  totalReviewed: number;
  totalReviewedToday: number;
  totalReviewedThisWeek: number;
  totalReviewedThisMonth: number;
  approvedPercentage: number;
  rejectedPercentage: number;
  requestChangesPercentage: number;
  averageReviewTime: number;
}

export interface IStatsPeriod {
  period: PeriodEnum;
}

export interface IStatsDecisions {
  approved: number;
  rejected: number;
  requestChanges: number;
}

export interface IStatsActivity extends IStatsDecisions {
  date: string;
}

export interface IStatsCategories {
  [key: string]: number;
}
