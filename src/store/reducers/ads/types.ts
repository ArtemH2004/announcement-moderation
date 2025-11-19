import type { PriorityEnum } from "@/common/enums/PriorityEnum";
import type { StatusEnum } from "@/common/enums/StatusEnum";

export interface IAdsShortInfo {
  id: number;
  images: string[];
  title: string;
  price: number;
  category: string;
  createdAt: string;
  status: StatusEnum;
  priority: PriorityEnum;
}

export interface IAdsPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface IAds {
  ads: IAdsShortInfo[];
  pagination: IAdsPagination;
}
