import { PeriodEnum } from "@/common/enums/PeriodEnum";

export const periodFormatter = (
  period: PeriodEnum,
): string => {
  switch (period) {
    case PeriodEnum.TODAY:
      return "За сегодня";
    case PeriodEnum.WEEK:
      return "За неделю";
    case PeriodEnum.MONTH:
      return "За месяц";
    case PeriodEnum.DEFAULT:
      return "По умолчанию";
    default:
      return "Неизвестный период";
  }
};
