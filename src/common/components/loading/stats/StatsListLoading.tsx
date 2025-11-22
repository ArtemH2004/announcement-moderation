import { TextLoading } from "@/common/components/loading/TextLoading";

export const StatsListLoading = () => {
  const list = Array.from({ length: 4 });
  return (
    <ul className="grid grid-cols-2 gap-4">
      {list.map((_, index) => (
        <TextLoading key={index} sizeClassName="w-full h-22 rounded-xl" />
      ))}
    </ul>
  );
};
