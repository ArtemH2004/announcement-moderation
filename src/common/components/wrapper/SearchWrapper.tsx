import { SearchInput } from "@/common/components/ui/input/SearchInput";
import { FilterButton } from "@/common/components/ui/button/FilterButton";

export const SearchWrapper = () => {
  return <div className="flex items-center gap-x-2">
    <SearchInput />
    <FilterButton />
  </div>;
};
