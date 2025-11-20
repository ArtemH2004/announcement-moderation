import { AdsItemLoading } from "@/common/components/loading/ads/AdsItemLoading";
import { TextLoading } from "@/common/components/loading/TextLoading";

export const AdsListLoading = () => {
  const list = Array.from({ length: 8 });

  return (
    <>
      <div className="flex items-center gap-x-2 mx-4">
        <h2 className="text-xl xs:text-2xl">Найдено объявлений:</h2>
        <TextLoading sizeClassName="w-20 h-7.5" />
      </div>

      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {list.map((_, index) => (
          <AdsItemLoading key={index} />
        ))}
      </ul>
    </>
  );
};
