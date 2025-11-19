import { AdsItem } from "@/common/components/ads/AdsItem";
import { adsApi } from "@/store/reducers/ads/AdsApi";
import type { IAds, IAdsShortInfo } from "@/store/reducers/ads/types";
import { useEffect, useState } from "react";

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
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) return <p>Loading...</p>;

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
