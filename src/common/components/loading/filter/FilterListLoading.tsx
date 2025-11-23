import { TextLoading } from "@/common/components/loading/TextLoading";

export const FilterListLoading = () => {
  const list = Array.from({ length: 3 });

  return (
    <ul className="w-full flex items-center gap-x-2 overflow-y-scroll scrollbar-hide">
      {list.map((_, index) => (
        <TextLoading key={index} sizeClassName="w-30 h-10 rounded-xl" />
      ))}
    </ul>
  );
};
