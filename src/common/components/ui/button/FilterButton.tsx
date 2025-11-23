import SvgHelper from "@/common/components/svg-helper/SvgHelper";
import useClickOutRef from "@/common/hooks/useClickOutRef";
import { useState } from "react";
import Dropdown from "@/common/components/dropdown/Dropdown";
import { FilterDropdown } from "@/common/components/dropdown/FilterDropdown";

export const FilterButton = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const handleClose = () => {
    isDropdownOpen && setDropdownOpen(false);
  };

  const ref = useClickOutRef<HTMLDivElement>(handleClose);

  return (
    <div className="relative w-fit" ref={ref}>
      <button
        className="flex-center gap-x-2 h-10 px-3 sm:px-4 rounded-lg text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-600"
        onClick={toggleDropdown}
      >
        <SvgHelper size="20" iconName="filters" />
        <span className="hidden sm:block">Фильтры</span>
      </button>

      <Dropdown isOpen={isDropdownOpen} position="right">
        <FilterDropdown onApply={handleClose} />
      </Dropdown>
    </div>
  );
};
