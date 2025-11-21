import { AdsList } from "@/common/components/ads/AdsList";
import { Pagination } from "@/common/components/pagination/Pagination";
import { SearchWrapper } from "@/common/components/wrapper/SearchWrapper";

export const List = () => {
  return (
    <>
      <SearchWrapper />
      <AdsList />
      <Pagination />
    </>
  );
};
