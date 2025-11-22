import { useSearchParams } from "react-router-dom";
import { StatsToggleButton } from "@/common/components/ui/button/StatsToggleButton";
import { statsFormatter } from "@/common/helpers/statsFormatter";
import { StatsEnum } from "@/common/enums/StatsEnum";
import { useEffect, useState } from "react";

export const StatsToggle = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isActive, setActive] = useState(StatsEnum.SUMMARY);

  const statsData = Object.values(StatsEnum);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && statsData.includes(section as StatsEnum)) {
      setActive(section as StatsEnum);
    }
  }, [searchParams, statsData]);

  const handleClick = (statsEnum: StatsEnum) => {
    setActive(statsEnum);

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("section", statsEnum);
    setSearchParams(newSearchParams);
  };

  return (
    <nav className="w-fit flex mx-auto">
      <ul className="p-1 flex-center rounded-2xl bg-blue-100">
        {statsData.map((item, index) => (
          <StatsToggleButton
            key={index}
            title={statsFormatter(item)}
            onClick={() => handleClick(item)}
            isActive={isActive === item}
          />
        ))}
      </ul>
    </nav>
  );
};
