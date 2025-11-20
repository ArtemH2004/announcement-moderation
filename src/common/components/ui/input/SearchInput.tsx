export const SearchInput = () => {
  return (
    <div className="w-full h-10 flex-center gap-x-0.5 bg-blue-400 rounded-lg p-0.5">
      <label htmlFor="search" className="visually-hidden">
        Поиск объявления
      </label>
      <input
        id="search"
        type="text"
        placeholder="Поиск по объявлениям"
        className="w-full h-full bg-white rounded-md px-4 placeholder:text-gray-500 outline-0"
      />
      <button className="w-25 h-full rounded-lg flex-center hover:bg-blue-500 active:bg-blue-600">
        <span className="text-white">Найти</span>
      </button>
    </div>
  );
};
