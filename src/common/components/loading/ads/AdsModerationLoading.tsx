import { TextLoading } from "@/common/components/loading/TextLoading";

export const AdsModerationLoading = () => {
  return (
    <div className="w-full h-full rounded-xl p-4 border-2 border-gray-200 flex flex-col gap-y-3.5">
      <TextLoading sizeClassName="w-1/2 sm:w-1/3 xl:w-1/4 h-7" />

      <div className="flex flex-col gap-y-1.5">
        <TextLoading sizeClassName="w-1/2 sm:w-1/3 xl:w-1/4 h-4" />
        <TextLoading sizeClassName="w-1/3 sm:w-1/4 xl:w-1/5 h-4" />
        <TextLoading sizeClassName="w-1/4 sm:w-1/5 xl:w-1/6 h-5 rounded-md" />
        <TextLoading sizeClassName="w-1/2 sm:w-1/3 xl:w-1/4 h-4" />
        <TextLoading sizeClassName="w-full sm:w-1/2 xl:w-1/3 h-4" />
      </div>

      <TextLoading sizeClassName="w-1/2 sm:w-1/3 xl:w-1/4 h-11 rounded-xl mx-auto" />
    </div>
  );
};
