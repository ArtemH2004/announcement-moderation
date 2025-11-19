import { AdsItem } from "@/common/components/ads/AdsItem";
import { adsApi } from "@/store/reducers/ads/adsApi";
import type { IAds, IAdsShortInfo } from "@/store/reducers/ads/types";
import { useEffect, useState } from "react";
import { AdsListLoading } from "@/common/components/loading/ads/AdsListLoading";
import { useActions } from "@/store/actions";
import { useAppSelector } from "@/common/hooks/useAppSelector";

export const AdsList = () => {
  const pagination = useAppSelector((state) => state.paginationReducer);
  const { setPagination } = useActions();
  const [data, setData] = useState<IAdsShortInfo[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IAds = await adsApi.getAll(
          pagination.currentPage,
          pagination.itemsPerPage
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
  }, [pagination.currentPage]);

  if (loading) return <AdsListLoading />;

  return (
    <>
      <h2 className="text-xl xs:text-2xl">
        Найдено объявлений:{" "}
        <strong className="text-gray-400">{pagination.totalItems}</strong>
      </h2>
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
