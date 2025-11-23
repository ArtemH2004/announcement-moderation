import SvgHelper from "@/common/components/svg-helper/SvgHelper";
import { useEffect, useState } from "react";
import { SortDropdown } from "@/common/components/dropdown/SortDropdown";
import useClickOutRef from "@/common/hooks/useClickOutRef";
import Dropdown from "@/common/components/dropdown/Dropdown";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { sortFormatter } from "@/common/helpers/sortFormatter";
import { useSearchParams } from "react-router-dom";

export const SortButton = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { sortBy, sortOrder } = useAppSelector((state) => state.sortReducer);
  const sort = sortFormatter(sortBy, sortOrder);
  const [searchParams] = useSearchParams();

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const handleClose = () => {
    isDropdownOpen && setDropdownOpen(false);
  };

  useEffect(() => {
    const sortParam = searchParams.get("sortBy");
    const orderParam = searchParams.get("sortOrder");

    if (sortParam || orderParam) {
      setDropdownOpen(false);
    }
  }, [searchParams]);

  const ref = useClickOutRef<HTMLDivElement>(handleClose);

  return (
    <div className="relative w-fit" ref={ref}>
      <button
        className="ml-0 mr-auto flex-center gap-x-0.5 hover:text-red-400"
        onClick={toggleDropdown}
      >
        <SvgHelper size="15" iconName="sort" />
        <span className="text-sm text-nowrap">
          {sort === "По умолчанию" ? "Сортировка" : sort}
        </span>
        <SvgHelper
          size="15"
          iconName="arrow_back"
          className={`transition-sm ${
            isDropdownOpen ? "-rotate-270" : "-rotate-90"
          }`}
        />
      </button>

      <Dropdown isOpen={isDropdownOpen} position="right">
        <SortDropdown />
      </Dropdown>
    </div>
  );
};
