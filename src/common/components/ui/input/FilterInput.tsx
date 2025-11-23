import { priceFormatter } from "@/common/helpers/priceFormatter";

interface IFilterInputProps {
  title: string;
  type?: "text" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  min?: number;
  max?: number;
  error?: boolean;
}

export const FilterInput = ({
  title,
  type = "number",
  value = "",
  onChange,
  placeholder,
  min,
  max,
  error = false
}: IFilterInputProps) => {
  const modifiedPlaceholder =
    !!min || !!max
      ? `${placeholder} ${priceFormatter(!!min ? min : !!max ? max : 0)}`
      : placeholder;
  return (
    <div className="relative">
      <label htmlFor={title} className="visually-hidden">
        {title}
      </label>
      <input
        id={title}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={modifiedPlaceholder}
        className={`h-10 w-full px-4 rounded-xl ${error ? "bg-red-100" : "bg-gray-100"}`}
      />
    </div>
  );
};
