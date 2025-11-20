import SvgHelper from "@/common/components/svg-helper/SvgHelper";

export const FilterButton = () => {
  return (
    <button className="flex-center gap-x-2 h-10 px-3 sm:px-4 rounded-lg text-white bg-blue-400 hover:bg-blue-500 active:bg-blue-600">
      <SvgHelper size="20" iconName="filters" />
      <span className="hidden sm:block">Фильтры</span>
    </button>
  );
};
