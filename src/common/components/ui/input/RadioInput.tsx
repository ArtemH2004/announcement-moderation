interface IRadioInputProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const RadioInput = ({
  value,
  checked,
  onChange,
}: IRadioInputProps) => {
  return (
    <li
      className="flex items-center gap-x-2"
      onClick={() => onChange(value)}
    >
      <div
        className={`flex-shrink-0 size-4 rounded-full border-2 flex-center transition-colors ${
          checked ? "border-blue-400 bg-blue-400" : "border-gray-300"
        }`}
      >
        {checked && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
      </div>

      <input
        type="radio"
        id={value}
        name={value}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <label
        htmlFor={value}
        className="cursor-pointer text-sm select-none text-nowrap"
      >
        {value}
      </label>
    </li>
  );
};
