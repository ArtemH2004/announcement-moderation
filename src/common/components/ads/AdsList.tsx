import { AdsItem } from "@/common/components/ads/AdsItem";
import { adsApi } from "@/store/reducers/ads/adsApi";
import type { IAds, IAdsShortInfo } from "@/store/reducers/ads/types";
import { useEffect, useState } from "react";
import { AdsListLoading } from "@/common/components/loading/ads/AdsListLoading";

export const AdsList = () => {
  const [data, setData] = useState<IAdsShortInfo[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IAds = await adsApi.getAll();
        setData(response.ads);
      } catch (err) {
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <AdsListLoading />;

  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {!!data && data?.length !== 0 ? (
        data.map((item) => <AdsItem key={item.id} ads={item} />)
      ) : (
        <>Не найдено</>
      )}
    </ul>
  );
};
