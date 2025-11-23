import type { StatusEnum } from "@/common/enums/StatusEnum";
import type {
  IFilterCategory,
  IFilterPriceRange,
} from "@/store/reducers/filter/types";
import { FilterItemButton } from "@/common/components/ui/button/FilterItemButton";
import { statusFormatter } from "@/common/helpers/statusFormatter";
import { useActions } from "@/store/actions";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { FilterInput } from "@/common/components/ui/input/FilterInput";
import { useEffect, useState } from "react";

interface IFilterWrapperProps {
  type: "status" | "price" | "category";
  list?: StatusEnum[] | IFilterCategory[];
  priceRange?: IFilterPriceRange;
}
export const FilterWrapper = ({
  type,
  list,
  priceRange,
}: IFilterWrapperProps) => {
  const { current, applied } = useAppSelector((state) => state.filterReducer);
  const { updateStatus, updatePriceRange, updateCategory } = useActions();
  const [minPrice, setMinPrice] = useState(
    !!applied?.priceRange.min && applied.priceRange.min !== ""
      ? applied.priceRange.min.toString()
      : ""
  );
  const [maxPrice, setMaxPrice] = useState(
    !!applied?.priceRange.max && applied.priceRange.max !== ""
      ? applied.priceRange.max.toString()
      : ""
  );
  const [minPriceError, setMinPriceError] = useState(false);
  const [maxPriceError, setMaxPriceError] = useState(false);
  const title =
    type === "status" ? "Статус" : type === "price" ? "Цена" : "Категории";
  
  useEffect(() => {
    setMinPrice(applied?.priceRange.min.toString() ?? "");
    setMaxPrice(applied?.priceRange.max.toString() ?? "");
  }, [applied?.priceRange]);

  const validatePrice = (min: string, max: string): boolean => {
    const minNum = min ? parseInt(min) : 0;
    const maxNum = max ? parseInt(max) : 0;

    if (minNum < 0 || maxNum < 0) return true;

    if (minNum > 1000000000 || maxNum > 1000000000) return true;

    if (min && max && minNum > maxNum) return true;

    return false;
  };

  const isStatusActive = (item: StatusEnum | IFilterCategory): boolean => {
    if (type === "status") {
      return current.status.includes(item as StatusEnum);
    }
    return current.categories.includes(item as IFilterCategory);
  };

  const buttonTitle = (item: StatusEnum | IFilterCategory): string => {
    if (type === "status") {
      return statusFormatter(item as StatusEnum);
    }
    const filterItem = item as IFilterCategory;
    return filterItem.name;
  };

  const handleClick = (item: StatusEnum | IFilterCategory) => {
    type === "status"
      ? updateStatus(item as StatusEnum)
      : updateCategory(item as IFilterCategory);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setMinPrice(newValue);

    setMinPriceError(validatePrice(newValue, maxPrice));

    if (minPriceError) {
      updatePriceRange({
        min: newValue ? newValue : "",
        max: maxPrice,
      });
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setMaxPrice(newValue);

    setMaxPriceError(validatePrice(minPrice, newValue));

    if (maxPriceError) {
      updatePriceRange({
        min: minPrice,
        max: newValue ? newValue : "",
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="w-fit text-xl">{title}</h3>
      {!!list && (
        <ul className="flex items-center flex-wrap gap-2">
          {list.map((item, index) => (
            <FilterItemButton
              key={index}
              title={buttonTitle(item)}
              isActive={isStatusActive(item)}
              onClick={() => handleClick(item)}
            />
          ))}
        </ul>
      )}
      {type === "price" && (
        <>
          <FilterInput
            title="min"
            type="number"
            placeholder="От"
            value={minPrice}
            onChange={handleMinPriceChange}
            min={Number(priceRange?.min)}
            error={minPriceError}
          />
          <FilterInput
            title="max"
            type="number"
            placeholder="До"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            max={Number(priceRange?.max)}
            error={maxPriceError}
          />
        </>
      )}
    </div>
  );
};
