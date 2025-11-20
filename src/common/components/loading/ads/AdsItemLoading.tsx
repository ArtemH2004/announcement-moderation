import { TextLoading } from "@/common/components/loading/TextLoading";

export const AdsItemLoading = () => {
  return (
    <li className="w-full flex">
      <article className="rounded-2xl p-4 w-full flex flex-col sm:flex-row gap-4 transition-sm hover:bg-gray-100">
        <TextLoading sizeClassName="w-full aspect-square sm:size-45 md:size-55 2xl:size-65 rounded-xl" />
        <div className="flex flex-col gap-y-1.5 flex-1 min-w-0">
          <TextLoading sizeClassName="w-full h-5" />
          <TextLoading sizeClassName="w-2/5 h-4.5" />
          <TextLoading sizeClassName="w-3/5 h-4.5" />

          <div className="flex items-center gap-x-1.25 mb-0.75">
            <TextLoading sizeClassName="w-3/7 h-6" />
          </div>

          <TextLoading sizeClassName="w-full h-9 rounded-lg" />
        </div>
      </article>
    </li>
  );
};
