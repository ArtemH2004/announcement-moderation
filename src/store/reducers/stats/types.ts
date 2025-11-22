import type { PeriodEnum } from "@/common/enums/PeriodEnum";

export interface IStatsPercentage {
  approvedPercentage: number;
  rejectedPercentage: number;
  requestChangesPercentage: number;
}

export interface IStatsSummary extends IStatsPercentage {
  totalReviewed: number;
  totalReviewedToday: number;
  totalReviewedThisWeek: number;
  totalReviewedThisMonth: number;

  averageReviewTime: number;
}

export interface IStatsPeriod {
  period: PeriodEnum;
}
