import { AdsContent } from "@/common/components/ads/AdsContent";
import { AdsContentLoading } from "@/common/components/loading/ads/AdsContentLoading";
import { adsApi } from "@/store/reducers/ads/adsApi";
import type { IAdsFullInfo } from "@/store/reducers/ads/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Item = () => {
  const [data, setData] = useState<IAdsFullInfo>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const response: IAdsFullInfo = await adsApi.getById(id);
        setData(response);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <AdsContentLoading />;
  if (!data) return <>Объявление не найдено</>;

  return <AdsContent ads={data} />;
};
