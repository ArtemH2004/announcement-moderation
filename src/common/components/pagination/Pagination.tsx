import { PaginationButton } from "@/common/components/ui/button/PaginationButton";

export const Pagination = () => {
  return (
    <ul className="w-full border-t-2 pt-4 border-gray-200 flex-center gap-x-2">
      <PaginationButton
        title="Предыдущая страница"
        iconName="arrow_back"
        disabled
      />
      <PaginationButton title="1" isActive />
      <PaginationButton title="2" />
      <PaginationButton title="Предыдущая страница" iconName="arrow_forward" disabled />
    </ul>
  );
};
