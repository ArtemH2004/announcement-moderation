import { useAppSelector } from "@/common/hooks/useAppSelector";
import { FilterWrapper } from "@/common/components/wrapper/FilterWrapper";
import { useEffect, useState } from "react";
import { adsApi } from "@/store/reducers/ads/adsApi";
import type { IAds } from "@/store/reducers/ads/types";
import { useActions } from "@/store/actions";

export const FilterDropdown = () => {
  const { filters, applied } = useAppSelector((state) => state.filterReducer);
  const { totalItems } = useAppSelector((state) => state.paginationReducer);
  const [loading, setLoading] = useState(true);
  const { setFilters } = useActions();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IAds = await adsApi.getFilters(totalItems);
        setFilters(response.ads);
      } catch (err) {
        setFilters([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [totalItems]);

  console.log(filters)

  // if (loading) return <AdsListLoading />;

  return (
    <div className="w-100 shadow bg-white p-4 flex flex-col gap-y-3 rounded-2xl">
      <FilterWrapper type="status" list={filters.status} />
      <FilterWrapper type="price" />
    </div>
  );
};
