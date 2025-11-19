import { priceFormatter } from "@/common/helpers/priceFormatter";
import { timeFormatter } from "@/common/helpers/timeFormatter";
import type { IAdsShortInfo } from "@/store/reducers/ads/types";
import { ButtonWithTextAndIcon } from "@/common/components/ui/button/ButtonWithTextAndIcon";

interface IAdsItemProps {
  ads: IAdsShortInfo;
}

export const AdsItem = ({ ads }: IAdsItemProps) => {
  const price = priceFormatter(ads.price);
  const time = timeFormatter(ads.createdAt);
  return (
    <li className="w-full flex">
      <article className="rounded-2xl p-4 w-full flex flex-col xl:flex-row gap-4 transition-sm hover:bg-gray-100">
        <img
          src={ads.images[0]}
          alt={ads.title}
          className="h-full aspect-square rounded-md object-cover object-center"
        />
        <div className="flex flex-col gap-y-1.5 flex-1 min-w-0">
          <h3 className="w-full font-normal text-lg truncate leading-5">
            {ads.title}
          </h3>
          <div className="flex md:items-end flex-col gap-y-2 md:gap-x-4 md:justify-between md:flex-row">
            <div className="flex flex-col gap-y-1.5">
              <span className="font-bold text-lg leading-4.5">{price}</span>
              <span className="leading-4.5">{`${ads.category} • ${time}`}</span>
            </div>

            <ButtonWithTextAndIcon
              title="Открыть"
              iconName="arrow"
              color="green"
              iconSecond
            />
          </div>
        </div>
      </article>
    </li>
  );
};
