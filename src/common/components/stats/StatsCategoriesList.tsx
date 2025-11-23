import { PeriodEnum } from "@/common/enums/PeriodEnum";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Empty } from "@/common/components/Empty";
import type { IStatsCategories } from "@/store/reducers/stats/types";
import { statsApi } from "@/store/reducers/stats/statsApi";
import { StatsItem } from "@/common/components/stats/StatsItem";
import { StatsListLoading } from "@/common/components/loading/stats/StatsListLoading";

export const StatsCategoriesList = () => {
  document.title = "График по категориям";

  const [data, setData] = useState<IStatsCategories[]>();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await statsApi.getCategories(
          (searchParams.get("period") as PeriodEnum) ?? undefined
        );
        setData(response);
      } catch {
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  if (loading) return <StatsListLoading />;
  if (!data) return <Empty />;

  const arrayData = Object.entries(data).map(([key, value]) => ({
    key,
    value,
  }));

  return (
    <ul className="grid grid-cols-2 gap-4">
      {arrayData.map((item, index) => (
        <StatsItem key={index} title={item.key} value={Number(item.value)} />
      ))}
    </ul>
  );
};
