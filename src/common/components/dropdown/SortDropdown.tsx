import { SortItemButton } from "@/common/components/ui/button/SortItemButton";
import { SortEnum } from "@/common/enums/SortEnum";

export const SortDropdown = () => {
  return (
    <ul className="w-50 shadow bg-white py-4 flex flex-col rounded-2xl">
      <SortItemButton sortBy={SortEnum.DEFAULT} />
      <SortItemButton sortBy={SortEnum.PRICE} sortOrder="asc" />
      <SortItemButton sortBy={SortEnum.PRICE} />
      <SortItemButton sortBy={SortEnum.CREATED_AT} />
      <SortItemButton sortBy={SortEnum.PRIORITY} />
    </ul>
  );
};
