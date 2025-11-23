import { AdsItem } from "@/common/components/ads/AdsItem";
import { adsApi } from "@/store/reducers/ads/adsApi";
import type { IAds, IAdsShortInfo } from "@/store/reducers/ads/types";
import { useEffect, useState } from "react";
import { AdsListLoading } from "@/common/components/loading/ads/AdsListLoading";
import { useActions } from "@/store/actions";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { SortButton } from "@/common/components/ui/button/SortButton";
import { useSearchParams } from "react-router-dom";
import type { SortEnum, SortOrderEnum } from "@/common/enums/SortEnum";
import { Empty } from "@/common/components/Empty";
import { FilterList } from "@/common/components/filter/FilterList";
import type { StatusEnum } from "@/common/enums/StatusEnum";

export const AdsList = () => {
  const pagination = useAppSelector((state) => state.paginationReducer);
  const { setPagination } = useActions();
  const [data, setData] = useState<IAdsShortInfo[]>();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // можно еще брать параметры из slice, а не из searchParams
        const response: IAds = await adsApi.getAll(
          pagination.currentPage,
          pagination.itemsPerPage,
          (searchParams.get("search") as string) ?? undefined,
          (searchParams.get("sortBy") as SortEnum) ?? undefined,
          (searchParams.get("sortOrder") as SortOrderEnum) ?? undefined,
          (searchParams.getAll("status") as StatusEnum[]) ?? undefined,
          (searchParams.get("minPrice")) ?? undefined,
          (searchParams.get("maxPrice")) ?? undefined,
          (searchParams.get("categoryId")) ?? undefined,
        );
        setPagination(response.pagination);
        setData(response.ads);
      } catch (err) {
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pagination.currentPage, searchParams]);

  if (loading) return <AdsListLoading />;

  return (
    <>
      <h2 className="text-xl xs:text-2xl md:text-3xl">
        Найдено объявлений:{" "}
        <strong className="text-gray-400">{pagination.totalItems}</strong>
      </h2>
      <div className="flex items-center justify-between gap-x-4">
        <FilterList />
        <SortButton />
      </div>
      {!!data && data?.length !== 0 ? (
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {data.map((item) => (
            <AdsItem key={item.id} ads={item} />
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </>
  );
};
