interface IStatsItemProps {
  title: string;
  value: number | string;
}

export const StatsItem = ({ title, value }: IStatsItemProps) => {
  return (
    <li className="p-4 flex flex-col gap-y-1 bg-blue-100 rounded-xl">
      <h3 className="text-lg">{title}</h3>
      <span className="">{value}</span>
    </li>
  );
};
