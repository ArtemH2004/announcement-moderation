interface IAdsDescriptionProps {
  description: string;
}

export const AdsDescription = ({ description }: IAdsDescriptionProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <h3 className="text-2xl">Описание</h3>
      <p className="">{description}</p>
    </div>
  );
};
