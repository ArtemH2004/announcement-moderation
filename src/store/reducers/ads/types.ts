import type { PriorityEnum } from "@/common/enums/PriorityEnum";
import type { StatusEnum } from "@/common/enums/StatusEnum";
import type { IPagination } from "@/store/reducers/pagination/types";

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



export interface IAds {
  ads: IAdsShortInfo[];
  pagination: IPagination;
}
