import { TextLoading } from "@/common/components/loading/TextLoading";
import { AdsModerationLoading } from "@/common/components/loading/ads/AdsModerationLoading";

export const AdsContentLoading = () => {
  return (
    <section className="w-full flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <TextLoading sizeClassName="size-9 aspect-square rounded-full" />
        <TextLoading sizeClassName="w-3/5 h-7 lg:h-8 xl:h-9" />
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-4 w-full">
        <TextLoading sizeClassName="mx-auto w-full aspect-square sm:size-75 md:size-85 2xl:size-100" />

        <AdsModerationLoading />
      </div>

      <div className="flex flex-col gap-y-2 mt-1">
        <TextLoading sizeClassName="w-1/2 md:w-1/5 xl:w-1/7 h-4.5" />
        <TextLoading sizeClassName="w-2/3 md:w-1/4 xl:w-1/6 h-4.5" />
      </div>

      <div className="w-full flex flex-col gap-y-2">
        <TextLoading sizeClassName="w-1/2 md:w-1/3 xl:w-1/5 h-8" />
        <div className="flex flex-col gap-y-2.5">
          <TextLoading sizeClassName="w-1/4 sm:w-1/5 md:w-1/6 h-5" />
          <TextLoading sizeClassName="w-1/3 sm:w-1/4 md:w-1/5 h-5" />
          <TextLoading sizeClassName="w-1/2 sm:w-1/3 md:w-1/4 h-5" />
          <TextLoading sizeClassName="w-1/4 sm:w-1/5 md:w-1/6 h-5" />
          <TextLoading sizeClassName="w-1/3 sm:w-1/4 md:w-1/5 h-5" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-2">
        <TextLoading sizeClassName="w-1/2 md:w-1/3 xl:w-1/5 h-8" />

        <div className="w-full flex flex-col gap-y-2">
          <TextLoading sizeClassName="w-full h-5" />
          <TextLoading sizeClassName="w-full h-5" />
          <TextLoading sizeClassName="w-3/4 h-5" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-y-2">
        <TextLoading sizeClassName="w-1/2 md:w-1/3 xl:w-1/5 h-8" />
        <TextLoading sizeClassName="w-3/5 h-6" />
      </div>

      <div className="mx-auto w-3/4 xs:w-1/2 md:w-3/4 xl:w-3/5 flex-center flex-col md:flex-row gap-4">
        <TextLoading sizeClassName="w-full h-9 rounded-lg" />
        <TextLoading sizeClassName="w-full h-9 rounded-lg" />
        <TextLoading sizeClassName="w-full h-9 rounded-lg" />
      </div>
    </section>
  );
};
