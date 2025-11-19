import { StatusEnum } from "@/common/enums/StatusEnum";

export const statusFormatter = (status: StatusEnum): string => {
  switch (status) {
    case StatusEnum.APPROVED:
      return "Одобрено";
    case StatusEnum.REJECTED:
      return "Отклонено";
    case StatusEnum.PENDING:
      return "На рассмотрении";
    case StatusEnum.DRAFT:
      return "Черновик";
    default:
      return "Неизвестный статус";
  }
};

export const statusColorFormatter = (status: StatusEnum): string => {
  switch (status) {
    case StatusEnum.APPROVED:
      return "bg-green-100 text-green-800";
    case StatusEnum.REJECTED:
      return "bg-red-100 text-red-800";
    case StatusEnum.PENDING:
      return "bg-yellow-100 text-yellow-800";
    case StatusEnum.DRAFT:
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
