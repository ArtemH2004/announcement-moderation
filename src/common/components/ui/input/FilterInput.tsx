interface IFilterInputProps {
  title: string;
  type?: "text" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  min?: string;
  max?: string;
}

export const FilterInput = ({
  title,
  type = "number",
  value = "",
  onChange,
  placeholder,
  min = "0",
  max = "1000000000",
}: IFilterInputProps) => {
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
        placeholder={placeholder}
        min={min}
        max={max}
        className="h-10 w-full px-4 rounded-xl bg-gray-100"
      />
    </div>
  );
};
