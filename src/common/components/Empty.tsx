const defaultImage = "/public/images/not-found.png";

export const Empty = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="text-xl">Ничего не найдено в выбраной области поиска</h3>
      <span className="">
        Выберите другую{" "}
        <strong className="text-blue-400">область поиска</strong>
        <br />
        Задайте запрос по другому или установите более мягкие ограничения.
      </span>
      <img
        src={defaultImage}
        alt=""
        className="mx-auto object-contain w-full md:max-w-3/4"
      />
    </div>
  );
};
