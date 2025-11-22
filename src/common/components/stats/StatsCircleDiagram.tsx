import { periodFormatter } from "@/common/helpers/periodFormatter";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import type { IStatsDecisions } from "@/store/reducers/stats/types";
import { StatsDiagramItem } from "@/common/components/stats/StatsDiagramItem";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { statsApi } from "@/store/reducers/stats/statsApi";
import type { PeriodEnum } from "@/common/enums/PeriodEnum";
import { Empty } from "@/common/components/Empty";

export const StatsCircleDiagram = () => {
  const period = useAppSelector((state) => state.statsReducer.period);
  const formatPeriod = periodFormatter(period);
  const [data, setData] = useState<IStatsDecisions>();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await statsApi.getDecisions(
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

  if (loading) return <>loading</>;
  if (!data) return <Empty />;

  const diagramData = [
    {
      title: "Одобрено",
      value: data.approved,
      color: "#05df72",
      bgColor: "bg-green-400",
    },
    {
      title: "Отклонено",
      value: data.rejected,
      color: "#ff6467",
      bgColor: "bg-red-400",
    },
    {
      title: "На доработке",
      value: data.requestChanges,
      color: "#fdc700",
      bgColor: "bg-yellow-400",
    },
  ];

  // Рассчитываем углы для сегментов круга
  const calculateSegment = (value: number, offset: number) => {
    const circumference = 2 * Math.PI * 40; // 40 - радиус круга
    const dashLength = (value / 100) * circumference;
    const gapLength = circumference - dashLength;

    return {
      dashArray: `${dashLength} ${gapLength}`,
      dashOffset: (-offset * circumference) / 100,
    };
  };

  // Сумма всех значений для проверки
  const total = diagramData.reduce((sum, item) => sum + item.value, 0);

  // Рассчитываем накопленные смещения
  let accumulatedOffset = 0;
  const segments = diagramData.map((item) => {
    const segment = {
      ...item,
      offset: accumulatedOffset,
    };
    accumulatedOffset += item.value;
    return segment;
  });

  return (
    <div className="p-4 flex flex-col gap-y-1 bg-blue-100 rounded-xl">
      <h3 className="text-lg">
        Диаграмма решений
        {formatPeriod !== "По умолчанию" && (
          <strong className="text-gray-500">{` (${formatPeriod.toLowerCase()})`}</strong>
        )}
      </h3>

      <div className="flex-center gap-x-15 ">
        {/* Круговая диаграмма */}
        <div className="relative size-65">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Фоновый круг */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#51a2ff"
              strokeWidth="12"
            />

            {/* Сегменты диаграммы */}
            {segments.map((item) => {
              const { dashArray, dashOffset } = calculateSegment(
                item.value,
                item.offset
              );

              return (
                <circle
                  key={item.title}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="12"
                  strokeDasharray={dashArray}
                  strokeDashoffset={dashOffset}
                  transform="rotate(-90 50 50)"
                  strokeLinecap="round"
                />
              );
            })}

            {/* Центральный текст */}
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-center text-lg font-medium fill-black"
            >
              {total}%
            </text>
          </svg>
        </div>

        <ul className="flex flex-col gap-y-3 w-1/5">
          {diagramData.map((item) => (
            <StatsDiagramItem
              key={item.title}
              title={item.title}
              value={item.value}
              color={item.bgColor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
