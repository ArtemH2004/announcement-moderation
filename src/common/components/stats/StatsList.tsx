import { PeriodEnum } from "@/common/enums/PeriodEnum";
import { periodFormatter } from "@/common/helpers/periodFormatter";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Empty } from "@/common/components/Empty";
import type { IStatsSummary } from "@/store/reducers/stats/types";
import { statsApi } from "@/store/reducers/stats/statsApi";
import { StatsItem } from "@/common/components/stats/StatsItem";
import { millisecondsFormatter } from "@/common/helpers/timeFormatter";
import { StatsListLoading } from "@/common/components/loading/stats/StatsListLoading";

export const StatsList = () => {
  document.title = "Общая статистика";

  const period = useAppSelector((state) => state.statsReducer.period);
  const formatPeriod = periodFormatter(period);
  const [data, setData] = useState<IStatsSummary>();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await statsApi.getSummary(
          (searchParams.get("period") as PeriodEnum) ?? undefined
        );
        setData(response);
      } catch {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  if (loading) return <StatsListLoading />;
  if (!data) return <Empty />;

  const periodTitle = `Проверено ${formatPeriod.toLowerCase()}`;
  const periodValue =
    period === PeriodEnum.TODAY
      ? data.totalReviewedToday
      : PeriodEnum.WEEK
      ? data.totalReviewedThisWeek
      : PeriodEnum.MONTH
      ? data.totalReviewedThisMonth
      : data.totalReviewed;

  return (
    <ul className="grid grid-cols-2 gap-4">
      <StatsItem title="Всего проверено" value={data.totalReviewed} />
      <StatsItem title={periodTitle} value={periodValue} />
      <StatsItem
        title="Одобрено"
        value={`${data.approvedPercentage.toFixed()}%`}
      />
      <StatsItem
        title="Отклонено"
        value={`${data.rejectedPercentage.toFixed()}%`}
      />
      <StatsItem
        title="На доработке"
        value={`${data.requestChangesPercentage.toFixed()}%`}
      />
      <StatsItem
        title="Среднее время просмотра"
        value={millisecondsFormatter(data.averageReviewTime)}
      />
    </ul>
  );
};
