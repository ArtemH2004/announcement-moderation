import { PaginationButton } from "@/common/components/ui/button/PaginationButton";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useActions } from "@/store/actions";

export const Pagination = () => {
  const { currentPage, totalPages } = useAppSelector(
    (state) => state.paginationReducer
  );
  const { setPage, nextPage, prevPage } = useActions();

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
        onClick={() => prevPage()}
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
            onClick={() => setPage(Number(item))}
          />
        )
      )}
      <PaginationButton
        title="Предыдущая страница"
        iconName="arrow_forward"
        onClick={() => nextPage()}
        disabled={currentPage === totalPages}
      />
    </ul>
  );
};
