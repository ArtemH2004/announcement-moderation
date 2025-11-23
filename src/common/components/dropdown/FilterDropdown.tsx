import { useAppSelector } from "@/common/hooks/useAppSelector";
import { FilterWrapper } from "@/common/components/wrapper/FilterWrapper";
import { useEffect, useState } from "react";
import { adsApi } from "@/store/reducers/ads/adsApi";
import type { IAds } from "@/store/reducers/ads/types";
import { useActions } from "@/store/actions";
import { ButtonWithTextAndIcon } from "@/common/components/ui/button/ButtonWithTextAndIcon";
import { ResetButton } from "@/common/components/ui/button/ResetButton";

interface IFilterDropdownProps {
  onApply: () => void;
}

export const FilterDropdown = ({ onApply }: IFilterDropdownProps) => {
  const { filters } = useAppSelector((state) => state.filterReducer);
  const { totalItems } = useAppSelector((state) => state.paginationReducer);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);
  const { setFilters, applyFilters, resetFilters } = useActions();

  useEffect(() => {
    const fetchData = async () => {
      if (!!filters || hasFetched) {
        setLoading(false);
        return;
      }

      try {
        const response: IAds = await adsApi.getFilters(totalItems);
        setFilters(response.ads);
        setHasFetched(true);
      } catch (err) {
        setFilters([]);
        setHasFetched(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters, hasFetched]);

  const handleApply = () => {
    applyFilters();
    onApply();
  };

  if (loading) return <>loading</>;

  return (
    <div className="w-100 shadow bg-white p-4 flex flex-col gap-y-3 rounded-2xl relative">
      <div className="absolute z-10 right-4 top-4">
        <ResetButton onClick={() => resetFilters()} />
      </div>
      <FilterWrapper type="status" list={filters.status} />
      <FilterWrapper type="price" priceRange={filters.priceRange} />
      <FilterWrapper type="category" list={filters.categories} />
      <ButtonWithTextAndIcon
        title="Применить"
        color="blue"
        onClick={handleApply}
        className="h-10 rounded-xl"
      />
    </div>
  );
};
