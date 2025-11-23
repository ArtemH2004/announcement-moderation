import { PaginationButton } from "@/common/components/ui/button/PaginationButton";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useActions } from "@/store/actions";
import { useSearchParams } from "react-router-dom";

export const Pagination = () => {
  const { currentPage, totalPages } = useAppSelector(
    (state) => state.paginationReducer
  );
  const { setPage, nextPage, prevPage } = useActions();
  const [searchParams, setSearchParams] = useSearchParams();

  const updatePageInSearchParams = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (page === 1) {
      newSearchParams.delete("page");
    } else {
      newSearchParams.set("page", page.toString());
    }

    setSearchParams(newSearchParams);
  };

  const handleSetPage = (page: number) => {
    setPage(page);
    updatePageInSearchParams(page);
  };

  const handleNextPage = () => {
    const nextPageNumber = currentPage + 1;
    nextPage();
    updatePageInSearchParams(nextPageNumber);
  };

  const handlePrevPage = () => {
    const prevPageNumber = currentPage - 1;
    prevPage();
    updatePageInSearchParams(prevPageNumber);
  };

  if (totalPages <= 1) return null;

  const pages = [];

  pages.push(1);

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < totalPages - 1) pages.push("...");

  if (totalPages > 1) pages.push(totalPages);

  return (
    <ul className="w-full border-t-2 pt-4 border-gray-200 flex-center gap-x-2">
      <PaginationButton
        title="Предыдущая страница"
        iconName="arrow_back"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      />
      {pages.map((item, index) =>
        item === "..." ? (
          <PaginationButton key={index} title="..." disabled />
        ) : (
          <PaginationButton
            key={index}
            title={item.toString()}
            isActive={currentPage === item}
            onClick={() => handleSetPage(Number(item))}
          />
        )
      )}
      <PaginationButton
        title="Предыдущая страница"
        iconName="arrow_forward"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      />
    </ul>
  );
};
