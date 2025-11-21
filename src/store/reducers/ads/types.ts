import type { ActionEnum } from "@/common/enums/ActionEnum";
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

export interface IAdsSeller {
  id: number;
  name: string;
  rating: string;
  totalAds: number;
  registeredAt: string;
}

export interface IAdsCharacteristics {
  [key: string]: string;
}

export interface IAdsModerationHistory {
  id: number;
  moderatorId: number;
  moderatorName: string;
  action: StatusEnum;
  reason?: string;
  comment: string;
  timestamp: string;
}

export interface IAdsFullInfo extends IAdsShortInfo {
  description: string;
  categoryId: number;
  seller: IAdsSeller;
  characteristics: IAdsCharacteristics;
  moderationHistory: IAdsModerationHistory[];
}

export interface IAds {
  ads: IAdsFullInfo[];
  pagination: IPagination;
}

export interface IAdsAction {
  reason: ActionEnum;
  comment?: string;
}
