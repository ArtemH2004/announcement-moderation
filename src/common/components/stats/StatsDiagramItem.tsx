interface IStatsDiagramItemProps {
  title: string;
  value?: number;
  color: string;
}

export const StatsDiagramItem = ({
  title,
  value,
  color,
}: IStatsDiagramItemProps) => {
  return (
    <li className="flex items-center justify-between gap-x-2 w-full">
      <div className="flex-center gap-x-2">
        <div className={`size-4 rounded-sm ${color}`} />
        <span className="text-nowrap">{title}</span>
      </div>
      {!!value && <span className="">{`${value.toFixed()}%`}</span>}
    </li>
  );
};
