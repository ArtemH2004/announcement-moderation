import {
  statusColorFormatter,
  statusFormatter,
} from "@/common/helpers/statusFormatter";
import { timeFormatter } from "@/common/helpers/timeFormatter";
import type { IAdsModerationHistory } from "@/store/reducers/ads/types";

interface IAdsModerationItemProps {
  moderation: IAdsModerationHistory;
}

export const AdsModerationItem = ({ moderation }: IAdsModerationItemProps) => {
  const time = timeFormatter(moderation.timestamp);
  const status = statusFormatter(moderation.action);
  const statusColor = statusColorFormatter(moderation.action);
  return (
    <>
      <li>
        <span>
          <strong className="text-gray-500">Модератор:</strong>{" "}
          {moderation.moderatorName}
        </span>
      </li>
      <li>
        <span>{time}</span>
      </li>
      <li>
        <span className={`rounded-md w-fit px-2 py-0.5 ${statusColor}`}>
          {status}
        </span>
      </li>
      {!!moderation.reason && (
        <li>
          <span>
            <strong className="text-gray-500">Причина:</strong>{" "}
            {moderation.reason}
          </span>
        </li>
      )}
      <li>
        <span>
          <strong className="text-gray-500">Комментарий:</strong>{" "}
          {moderation.comment}
        </span>
      </li>
    </>
  );
};
