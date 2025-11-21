import type { IAdsFullInfo } from "@/store/reducers/ads/types";
import { AdsImgSwiper } from "./AdsImgSwiper";
import { ButtonWithIcon } from "../ui/button/ButtonWithIcon";
import { priceFormatter } from "@/common/helpers/priceFormatter";
import { timeFormatter } from "@/common/helpers/timeFormatter";
import {
  statusColorFormatter,
  statusFormatter,
} from "@/common/helpers/statusFormatter";
import { PriorityEnum } from "@/common/enums/PriorityEnum";
import SvgHelper from "../svg-helper/SvgHelper";
import { AdsCharacteristics } from "./AdsCharacteristics";

interface IAdsContentProps {
  ads: IAdsFullInfo;
}

export const AdsContent = ({ ads }: IAdsContentProps) => {
  const price = priceFormatter(ads.price);
  const time = timeFormatter(ads.createdAt);
  const status = statusFormatter(ads.status);
  const statusColor = statusColorFormatter(ads.status);

  console.log(ads)

  return (
    <section className="w-full flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <ButtonWithIcon title="Назад" iconName="arrow_back" />
        <h2 className="text-xl xs:text-2xl md:text-3xl">{ads.title}</h2>
      </div>

      <div className="flex items-start justify-between gap-x-4">
        <AdsImgSwiper
          title={ads.title}
          images={ads.images}
          className="w-full aspect-square sm:size-45 md:size-55 2xl:size-65"
        />
      </div>

      <AdsCharacteristics characteristics={ads.characteristics} />

      <span className="font-bold text-xl leading-4.5 truncate">{price}</span>
      <span className="leading-4.5 truncate">{`${ads.category} • ${time}`}</span>
      <div className="flex items-center gap-x-1.25 mb-0.75">
        <span className={`rounded-md w-fit px-2 ${statusColor}`}>{status}</span>
        {ads.priority === PriorityEnum.URGENT && (
          <SvgHelper iconName="fire" className="text-red-700" />
        )}
      </div>
    </section>
  );
};
