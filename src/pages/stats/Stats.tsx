import { StatsActivity } from "@/common/components/stats/StatsActivity";
import { StatsCircleDiagram } from "@/common/components/stats/StatsCircleDiagram";
import { StatsList } from "@/common/components/stats/StatsList";
import { PeriodButton } from "@/common/components/ui/button/PeriodButton";
import { StatsToggle } from "@/common/components/ui/toggle/StatsToggle";
import { StatsEnum } from "@/common/enums/StatsEnum";
import { statsFormatter } from "@/common/helpers/statsFormatter";
import { useSearchParams } from "react-router-dom";

export const Stats = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section") as StatsEnum;
  const formatSection = statsFormatter(section ?? StatsEnum.SUMMARY);
  return (
    <>
      <div className="flex items-center justify-between gap-x-4">
        <h2 className="text-xl xs:text-2xl md:text-3xl">{formatSection}</h2>
        <PeriodButton />
      </div>
      <StatsToggle />
      {section === StatsEnum.SUMMARY ? (
        <StatsList />
      ) : section === StatsEnum.ACTIVITY ? (
        <StatsActivity />
      ) : section === StatsEnum.DECISIONS ? (
        <StatsCircleDiagram />
      ) : (
        <>Category</>
      )}
    </>
  );
};
