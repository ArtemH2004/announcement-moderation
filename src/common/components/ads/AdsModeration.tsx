import type { IAdsModerationHistory } from "@/store/reducers/ads/types";
import { AdsModerationItem } from "@/common/components/ads/AdsModerationItem";
import { PaginationButton } from "@/common/components/ui/button/PaginationButton";
import { useState } from "react";

interface IAdsModerationProps {
  moderation: IAdsModerationHistory[];
}

export const AdsModeration = ({ moderation }: IAdsModerationProps) => {
  const [currentPage, setCurrentPage] = useState(moderation.length);
  const totalPages = currentPage;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pages = [];

  pages.push(1);

  const start = Math.max(2, currentPage - 1);
  const end = Math.min(totalPages - 1, currentPage + 1);

  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < totalPages - 1) pages.push("...");

  if (totalPages > 1) pages.push(totalPages);
  return (
    <div className="w-full h-full rounded-xl p-4  border-2 border-gray-300 flex flex-col gap-y-1">
      <h3 className="text-xl">История модерации</h3>

      <ul className="flex flex-col gap-y-0.5">
        {moderation.map((item) => (
          <AdsModerationItem key={item.id} moderation={item} />
        ))}
      </ul>

      {totalPages > 1 && (
        <ul className="w-full pt-2 flex-center gap-x-2">
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
                onClick={() => setCurrentPage(Number(item))}
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
      )}
    </div>
  );
};
