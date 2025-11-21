import { SortEnum, SortOrderEnum } from "@/common/enums/SortEnum";
import { sortFormatter } from "@/common/helpers/sortFormatter";
import { useActions } from "@/store/actions";
import type { ISort } from "@/store/reducers/sort/sortSlice";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useSearchParams } from "react-router-dom";

interface ISortItemButtonProps {
  sortBy: SortEnum;
  sortOrder?: SortOrderEnum;
}

export const SortItemButton = ({
  sortBy,
  sortOrder = SortOrderEnum.DESC,
}: ISortItemButtonProps) => {
  const { sortBy: currentSortBy, sortOrder: currentSortOrder } = useAppSelector(
    (state) => state.sortReducer
  );
  const sort = sortFormatter(sortBy, sortOrder);
  const { setSort, setPage } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    const sort: ISort = {
      sortBy: sortBy,
      sortOrder: sortOrder,
    };
    setSort(sort);
    setPage(1);

    const newSearchParams = new URLSearchParams(searchParams);

    if (sortBy === SortEnum.DEFAULT) {
      newSearchParams.delete("sortBy");
      newSearchParams.delete("sortOrder");
    } else {
      newSearchParams.set("sortBy", sortBy);
      newSearchParams.set("sortOrder", sortOrder);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <li className="w-full">
      <button
        className="w-full px-3 py-2 flex items-center justify-between gap-x-4 hover:bg-gray-100 active:bg-gray-200"
        onClick={handleClick}
      >
        <span className="text-sm">{sort}</span>
        {currentSortBy === sortBy && currentSortOrder === sortOrder && (
          <SvgHelper size="16" iconName="check_mark" />
        )}
      </button>
    </li>
  );
};
