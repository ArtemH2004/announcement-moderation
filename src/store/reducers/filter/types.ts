import type { StatusEnum } from "@/common/enums/StatusEnum";

export interface IFilterPriceRange {
  min: string;
  max: string;
}

export interface IFilterCategory {
  id: number;
  name: string;
}

export interface IFilter {
  search: string;
  status: StatusEnum[];
  priceRange: IFilterPriceRange;
  categories: IFilterCategory[];
}

export interface IGetCurrentFilters {
  price: number;
  status: StatusEnum;
  category: string;
  categoryId: number;
}
