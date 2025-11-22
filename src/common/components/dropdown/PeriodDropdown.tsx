import { PeriodItemButton } from "@/common/components/ui/button/PeriodItemButton";
import { PeriodEnum } from "@/common/enums/PeriodEnum";

export const PeriodDropdown = () => {
  return (
    <ul className="w-50 shadow bg-white py-4 flex flex-col rounded-2xl">
      <PeriodItemButton period={PeriodEnum.DEFAULT} />
      <PeriodItemButton period={PeriodEnum.TODAY} />
      <PeriodItemButton period={PeriodEnum.WEEK} />
      <PeriodItemButton period={PeriodEnum.MONTH} />
    </ul>
  );
};
