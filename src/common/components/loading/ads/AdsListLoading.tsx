import { AdsItemLoading } from "@/common/components/loading/ads/AdsItemLoading";
import { TextLoading } from "@/common/components/loading/TextLoading";
import { SortButton } from "@/common/components/ui/button/SortButton";

export const AdsListLoading = () => {
  const list = Array.from({ length: 8 });

  return (
    <>
      <div className="flex items-center gap-x-2">
        <h2 className="text-xl xs:text-2xl md:text-3xl">Найдено объявлений:</h2>
        <TextLoading sizeClassName="w-9 h-4.5 xs:w-11 xs:h-6 md:w-14 md:h-7" />
      </div>
      <SortButton />
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {list.map((_, index) => (
          <AdsItemLoading key={index} />
        ))}
      </ul>
    </>
  );
};
