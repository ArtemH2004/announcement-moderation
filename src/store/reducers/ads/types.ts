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

export interface IAdsSeller {}

export interface IAdsCharacteristics {}

export interface IAdsModerationHistory {}

export interface IAdsFullInfo extends IAdsShortInfo {
  description: string;
  categoryId: number;
  seller: IAdsSeller;
  characteristics: IAdsCharacteristics;
  moderationHistory: IAdsModerationHistory;
}

export interface IAds {
  ads: IAdsFullInfo[];
  pagination: IPagination;
}
