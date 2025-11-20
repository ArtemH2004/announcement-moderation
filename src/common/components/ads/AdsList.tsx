import { AdsItem } from "@/common/components/ads/AdsItem";
import { adsApi } from "@/store/reducers/ads/adsApi";
import type { IAds, IAdsShortInfo } from "@/store/reducers/ads/types";
import { useEffect, useState } from "react";
import { AdsListLoading } from "@/common/components/loading/ads/AdsListLoading";
import { useActions } from "@/store/actions";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { SortButton } from "@/common/components/ui/button/SortButton";

export const AdsList = () => {
  const pagination = useAppSelector((state) => state.paginationReducer);
  const { sortBy, sortOrder } = useAppSelector((state) => state.sortReducer);
  const { setPagination } = useActions();
  const [data, setData] = useState<IAdsShortInfo[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // можно еще брать параметры через searchParams, а не из slice
        const response: IAds = await adsApi.getAll(
          pagination.currentPage,
          pagination.itemsPerPage,
          sortBy,
          sortOrder
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
  }, [pagination.currentPage, sortBy, sortOrder]);

  if (loading) return <AdsListLoading />;

  return (
    <>
      <h2 className="text-xl xs:text-2xl md:text-3xl">
        Найдено объявлений:{" "}
        <strong className="text-gray-400">{pagination.totalItems}</strong>
      </h2>
      <SortButton />
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {!!data && data?.length !== 0 ? (
          data.map((item) => <AdsItem key={item.id} ads={item} />)
        ) : (
          <>Не найдено</>
        )}
      </ul>
    </>
  );
};
