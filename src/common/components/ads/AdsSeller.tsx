import type { IAdsSeller } from "@/store/reducers/ads/types";
import { AdsWrapper } from "@/common/components/wrapper/AdsWrapper";
import { adsFormatter } from "@/common/helpers/adsFormatter";
import { dateFormatter } from "@/common/helpers/timeFormatter";

interface IAdsSellerProps {
  seller: IAdsSeller;
}
export const AdsSeller = ({ seller }: IAdsSellerProps) => {
  const ads = adsFormatter(seller.totalAds);
  const date = dateFormatter(seller.registeredAt);
  return (
    <AdsWrapper title={seller.name}>
      <div className="flex flex-col">
        <span>{`Рейтинг: ${seller.rating} | ${seller.totalAds} ${ads} | Дата регистрации: ${date}`}</span>
      </div>
    </AdsWrapper>
  );
};
