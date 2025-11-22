import { useActions } from "@/store/actions";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useSearchParams } from "react-router-dom";
import { PeriodEnum } from "@/common/enums/PeriodEnum";
import { periodFormatter } from "@/common/helpers/periodFormatter";
import type { IStatsPeriod } from "@/store/reducers/stats/types";

interface IPeriodItemButtonProps {
  period: PeriodEnum;
}

export const PeriodItemButton = ({ period }: IPeriodItemButtonProps) => {
  const currentPeriod = useAppSelector((state) => state.statsReducer.period);
  const formatPeriod = periodFormatter(period);
  const { setPeriod } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    const per: IStatsPeriod = {
      period: period,
    };
    setPeriod(per);

    const newSearchParams = new URLSearchParams(searchParams);

    if (period === PeriodEnum.DEFAULT) {
      newSearchParams.delete("period");
    } else {
      newSearchParams.set("period", period);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <li className="w-full">
      <button
        className="w-full px-3 py-2 flex items-center justify-between gap-x-4 hover:bg-gray-100 active:bg-gray-200"
        onClick={handleClick}
      >
        <span className="text-sm">{formatPeriod}</span>
        {currentPeriod === period && (
          <SvgHelper size="16" iconName="check_mark" />
        )}
      </button>
    </li>
  );
};
