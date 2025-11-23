import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useHotkey } from "@/common/hooks/useHotKey";
import { useActions } from "@/store/actions";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchValue = useAppSelector(
    (state) => state.filterReducer.applied?.search
  );
  const [search, setSearch] = useState(searchValue ?? "");
  const { updateSearch, applyFilters } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearch(newValue);
    updateSearch(newValue);
  };

  const handleClick = () => {
    applyFilters();

    const newSearchParams = new URLSearchParams(searchParams);

    if (!!search) {
      newSearchParams.set("search", search);
    } else {
      newSearchParams.delete("search");
    }

    setSearchParams(newSearchParams);
  };

  useHotkey({
    "focus-search": () => {
      inputRef.current?.focus();
    },
  });

  return (
    <div className="w-full h-10 flex-center gap-x-0.5 bg-blue-400 rounded-lg p-0.5">
      <label htmlFor="search" className="visually-hidden">
        Поиск объявления
      </label>
      <input
        ref={inputRef}
        id="search"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Поиск по объявлениям"
        className="w-full h-full bg-white rounded-md px-4 placeholder:text-gray-500 "
      />
      <button
        className="w-25 h-full rounded-lg flex-center hover:bg-blue-500 active:bg-blue-600"
        onClick={handleClick}
      >
        <span className="text-white">Найти</span>
      </button>
    </div>
  );
};
