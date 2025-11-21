import type { IAdsFullInfo } from "@/store/reducers/ads/types";
import { AdsImgSwiper } from "@/common/components/ads/AdsImgSwiper";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";
import { priceFormatter } from "@/common/helpers/priceFormatter";
import { timeFormatter } from "@/common/helpers/timeFormatter";
import {
  statusColorFormatter,
  statusFormatter,
} from "@/common/helpers/statusFormatter";
import { AdsCharacteristics } from "@/common/components/ads/AdsCharacteristics";
import { AdsWrapper } from "@/common/components/wrapper/AdsWrapper";
import { AdsSeller } from "@/common/components/ads/AdsSeller";
import { useNavigate } from "react-router-dom";

interface IAdsContentProps {
  ads: IAdsFullInfo;
}

export const AdsContent = ({ ads }: IAdsContentProps) => {
  const navigate = useNavigate();
  const price = priceFormatter(ads.price);
  const time = timeFormatter(ads.createdAt);
  const status = statusFormatter(ads.status);
  const statusColor = statusColorFormatter(ads.status);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="w-full flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <ButtonWithIcon title="Назад" iconName="arrow_back" onClick={handleBackClick} />
        <h2 className="text-xl xs:text-2xl md:text-3xl">{ads.title}</h2>
      </div>

      <div className="flex items-start justify-between gap-x-4">
        <AdsImgSwiper
          title={ads.title}
          images={ads.images}
          className="w-full aspect-square sm:size-45 md:size-55 2xl:size-65"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <span className="font-bold text-xl leading-4.5 truncate">{price}</span>
        <span className="leading-4.5 truncate">{`${ads.category} • ${time}`}</span>
      </div>

      <AdsCharacteristics characteristics={ads.characteristics} />

      <AdsWrapper title="Описание">
        <p className="">{ads.description}</p>
      </AdsWrapper>

      <AdsSeller seller={ads.seller} />
    </section>
  );
};
