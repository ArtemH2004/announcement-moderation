import type { PeriodEnum } from "@/common/enums/PeriodEnum";
import { periodFormatter } from "@/common/helpers/periodFormatter";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { statsApi } from "@/store/reducers/stats/statsApi";
import type { IStatsActivity } from "@/store/reducers/stats/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Empty } from "@/common/components/Empty";
import { StatsDiagramItem } from "./StatsDiagramItem";
import { TextLoading } from "@/common/components/loading/TextLoading";

export const StatsActivity = () => {
  const period = useAppSelector((state) => state.statsReducer.period);
  const formatPeriod = periodFormatter(period);
  const [data, setData] = useState<IStatsActivity[]>();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await statsApi.getActivity(
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

  if (loading) return <TextLoading sizeClassName="w-full h-97 rounded-xl"/>;
  if (!data) return <Empty />;
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
    });
  };

  // Находим максимальное значение для масштабирования
  const getMaxValue = () => {
    if (data.length === 0) return 1; // Минимум 1 чтобы избежать деления на 0
    const max = Math.max(
      ...data.map(
        (item) =>
          (item.approved || 0) +
          (item.rejected || 0) +
          (item.requestChanges || 0)
      )
    );
    return max > 0 ? max : 1;
  };

  const maxValue = getMaxValue();

  const divClassName = "rounded-t transition-sm hover:opacity-80 w-full";

  if (loading) return <div className="p-4">Загрузка...</div>;
  if (!data || data.length === 0) return <Empty />;

  return (
    <div className="p-4 flex flex-col gap-y-4 bg-blue-100 rounded-xl">
      <h3 className="text-lg">
        График активности
        {formatPeriod !== "По умолчанию" && (
          <strong className="text-gray-500">{` (${formatPeriod.toLowerCase()})`}</strong>
        )}
      </h3>

      {/* Контейнер для диаграммы */}
      <div className="flex items-end justify-between gap-x-2 h-64">
        {data.map((item, index) => {
          const total =
            (item.approved || 0) +
            (item.rejected || 0) +
            (item.requestChanges || 0);

          return (
            <div
              key={index}
              className="flex flex-col items-center flex-1 gap-y-2 h-full"
            >
              <div className="flex items-end justify-center w-full h-full gap-x-1 relative">
                <div
                  className={`bg-green-400 ${divClassName}`}
                  style={{
                    height: `${((item.approved || 0) / maxValue) * 100}%`,
                    minHeight: (item.approved || 0) > 0 ? "4px" : "0px",
                  }}
                  title={`Одобрено: ${item.approved || 0}`}
                />
                <div
                  className={`bg-red-400 ${divClassName}`}
                  style={{
                    height: `${((item.rejected || 0) / maxValue) * 100}%`,
                    minHeight: (item.rejected || 0) > 0 ? "4px" : "0px",
                  }}
                  title={`Отклонено: ${item.rejected || 0}`}
                />
                <div
                  className={`bg-yellow-400 ${divClassName}`}
                  style={{
                    height: `${((item.requestChanges || 0) / maxValue) * 100}%`,
                    minHeight: (item.requestChanges || 0) > 0 ? "4px" : "0px",
                  }}
                  title={`На доработке: ${item.requestChanges || 0}`}
                />
              </div>

              <div className="text-xs text-gray-600 text-center min-h-5">
                {formatDate(item.date)}
              </div>

              <div className="text-sm font-medium text-gray-700 min-h-5">
                {total}
              </div>
            </div>
          );
        })}
      </div>

      <ul className="mx-auto w-fit flex-center flex-col gap-y-2 md:flex-row md:gap-x-6 mt-4">
        <StatsDiagramItem title="Одобрено" color="bg-green-400" />
        <StatsDiagramItem title="Отклонено" color="bg-red-400" />
        <StatsDiagramItem title="На доработке" color="bg-yellow-400" />
      </ul>
    </div>
  );
};
