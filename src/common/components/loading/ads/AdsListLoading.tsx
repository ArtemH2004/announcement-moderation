import { AdsItemLoading } from "@/common/components/loading/ads/AdsItemLoading";

export const AdsListLoading = () => {
  const list = Array.from({ length: 8 });

  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {list.map((_, index) => (
        <AdsItemLoading key={index} />
      ))}
    </ul>
  );
};
