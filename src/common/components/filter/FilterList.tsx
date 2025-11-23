import { useAppSelector } from "@/common/hooks/useAppSelector";
import { FilterItemButton } from "@/common/components/ui/button/FilterItemButton";
import { statusFormatter } from "@/common/helpers/statusFormatter";
import { priceFormatter } from "@/common/helpers/priceFormatter";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const FilterList = () => {
  const applied = useAppSelector((state) => state.filterReducer.applied);
  const [searchParams, setSearchParams] = useSearchParams();

  const statusCheck = !!applied?.status && applied.status.length > 0;
  const priceRangeCheck = !!applied?.priceRange;
  const categoriesCheck =
    !!applied?.categories && applied.categories.length > 0;

  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (!applied) {
      newSearchParams.delete("status");
      newSearchParams.delete("categoryId");
      newSearchParams.delete("minPrice");
      newSearchParams.delete("maxPrice");
    } else {
      if (statusCheck) {
        newSearchParams.delete("status");
        applied.status.forEach((status) => {
          newSearchParams.append("status", status);
        });
      } else {
        newSearchParams.delete("status");
      }

      if (categoriesCheck) {
        newSearchParams.delete("categoryId");
        applied.categories.forEach((category) => {
          newSearchParams.append("categoryId", category.id.toString());
        });
      } else {
        newSearchParams.delete("categoryId");
      }

      if (applied.priceRange && !!applied.priceRange.min) {
        newSearchParams.set("minPrice", applied.priceRange.min);
      } else {
        newSearchParams.delete("minPrice");
      }

      if (applied.priceRange && !!applied.priceRange.max) {
        newSearchParams.set("maxPrice", applied.priceRange.max);
      } else {
        newSearchParams.delete("maxPrice");
      }
    }

    if (newSearchParams.toString() !== searchParams.toString()) {
      setSearchParams(newSearchParams);
    }
  }, [
    applied,
    searchParams,
    setSearchParams,
    statusCheck,
    priceRangeCheck,
    categoriesCheck,
  ]);

  return (
    <ul className="w-full flex items-center gap-x-2 overflow-y-scroll scrollbar-hide">
      {statusCheck &&
        applied.status.map((item) => (
          <FilterItemButton
            key={item}
            title={statusFormatter(item)}
            isActive
            disabled
          />
        ))}
      {priceRangeCheck && (
        <>
          {!!applied.priceRange.min && (
            <FilterItemButton
              key={"minPrice"}
              title={`От ${priceFormatter(Number(applied.priceRange.min))}`}
              isActive
              disabled
            />
          )}
          {!!applied.priceRange.max && (
            <FilterItemButton
              key={"maxPrice"}
              title={`До ${priceFormatter(Number(applied.priceRange.max))}`}
              isActive
              disabled
            />
          )}
        </>
      )}
      {categoriesCheck &&
        applied.categories.map((item) => (
          <FilterItemButton
            key={item.name}
            title={item.name}
            isActive
            disabled
          />
        ))}
    </ul>
  );
};
