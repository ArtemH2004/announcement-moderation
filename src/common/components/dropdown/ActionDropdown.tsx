import { RadioInput } from "@/common/components/ui/input/RadioInput";
import { FilterInput } from "@/common/components/ui/input/FilterInput";
import { ActionEnum } from "@/common/enums/ActionEnum";

interface IActionDropdownProps {
  action: ActionEnum;
  setAction: (action: ActionEnum) => void;
  comment: string;
  setComment: (comment: string) => void;
  onClick: () => void;
}

export const ActionDropdown = ({
  action,
  setAction,
  comment,
  setComment,
  onClick,
}: IActionDropdownProps) => {
  const actionList: ActionEnum[] = Object.values(ActionEnum);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setComment(newValue);
  };
  return (
    <div className="shadow bg-white p-4 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm">Причина:</span>

      <ul className="flex flex-col gap-y-2">
        {actionList.map((item, index) => (
          <RadioInput
            key={index}
            value={item}
            checked={action === item}
            onChange={() => setAction(item)}
          />
        ))}
      </ul>

      {action === ActionEnum.OTHER && (
        <div className="w-full scale-90">
          <FilterInput
            type="text"
            title="Причина отказа"
            placeholder="Опишите причину"
            value={comment}
            onChange={handleChange}
          />
        </div>
      )}

      <button
        className="mx-auto px-4 py-1 w-fit bg-blue-400 hover:bg-blue-500 active:bg-blue-600 rounded-lg"
        onClick={onClick}
      >
        <span className="text-white">Отправить</span>
      </button>
    </div>
  );
};
