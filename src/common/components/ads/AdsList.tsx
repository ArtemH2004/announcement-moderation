import { AdsItem } from "@/common/components/ads/AdsItem";

export const AdsList = () => {
  const array = [...Array(5)];
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {array.map((_, index) => (
        <AdsItem key={index} />
      ))}
    </ul>
  );
};
