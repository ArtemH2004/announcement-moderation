import type { StatusEnum } from "@/common/enums/StatusEnum";
import type { IFilterCategory } from "@/store/reducers/filter/types";
import { FilterItemButton } from "@/common/components/ui/button/FilterItemButton";
import { statusFormatter } from "@/common/helpers/statusFormatter";
import { useActions } from "@/store/actions";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { FilterInput } from "@/common/components/ui/input/FilterInput";
import { useState } from "react";

interface IFilterWrapperProps {
  type: "status" | "price" | "category";
  list?: StatusEnum[] | IFilterCategory[];
}
export const FilterWrapper = ({ type, list }: IFilterWrapperProps) => {
  const { current, applied } = useAppSelector((state) => state.filterReducer);
  const { updateStatus } = useActions();
  const [minPrice, setMinPrice] = useState(applied?.priceRange.min.toString());
  const title =
    type === "status" ? "Статус" : type === "price" ? "Цена" : "Категории";

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setMinPrice(newValue);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="w-fit text-xl">{title}</h3>
      {!!list && (
        <ul className="flex items-center flex-wrap gap-2">
          {list.map((item, index) => (
            <FilterItemButton
              key={index}
              title={
                type === "status"
                  ? statusFormatter(item as StatusEnum)
                  : item.toString()
              }
              // isActive={current.status.find(item as StatusEnum) === (item || applied?.status === (item as StatusEnum) }
              // onClick={() => updateStatus(item as StatusEnum)}
            />
          ))}
        </ul>
      )}
      {type === "price" && (
        <>
          <FilterInput
            title="min"
            placeholder="От"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </>
      )}
    </div>
  );
};
