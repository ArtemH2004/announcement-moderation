import { priceFormatter } from "@/common/helpers/priceFormatter";
import { timeFormatter } from "@/common/helpers/timeFormatter";
import type { IAdsShortInfo } from "@/store/reducers/ads/types";
import { ButtonWithTextAndIcon } from "@/common/components/ui/button/ButtonWithTextAndIcon";
import {
  statusColorFormatter,
  statusFormatter,
} from "@/common/helpers/statusFormatter";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";
import { PriorityEnum } from "@/common/enums/PriorityEnum";
import { AdsImgSwiper } from "@/common/components/ads/AdsImgSwiper";

interface IAdsItemProps {
  ads: IAdsShortInfo;
}

export const AdsItem = ({ ads }: IAdsItemProps) => {
  const price = priceFormatter(ads.price);
  const time = timeFormatter(ads.createdAt);
  const status = statusFormatter(ads.status);
  const statusColor = statusColorFormatter(ads.status);
  return (
    <li className="w-full flex">
      <article className="rounded-2xl p-4 w-full flex flex-col sm:flex-row gap-4 transition-sm hover:bg-gray-100">
        <AdsImgSwiper
          title={ads.title}
          images={ads.images}
          className="w-full aspect-square sm:size-45 md:size-55 2xl:size-65"
        />
        <div className="flex flex-col gap-y-1.5 flex-1 min-w-0">
          <h3 className="w-full font-normal text-lg truncate leading-5">
            {ads.title}
          </h3>
          <span className="font-bold text-lg leading-4.5 truncate">
            {price}
          </span>
          <span className="leading-4.5 truncate">{`${ads.category} • ${time}`}</span>
          <div className="flex items-center gap-x-1.25 mb-0.75">
            <span className={`rounded-full w-fit px-3 ${statusColor}`}>
              {status}
            </span>
            {ads.priority === PriorityEnum.URGENT && (
              <SvgHelper iconName="fire" className="text-red-700" />
            )}
          </div>

          <ButtonWithTextAndIcon
            title="Открыть"
            iconName="arrow"
            color="green"
            iconSecond
          />
        </div>
      </article>
    </li>
  );
};
