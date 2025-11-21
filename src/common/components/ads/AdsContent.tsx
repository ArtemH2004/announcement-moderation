import { useNavigate } from "react-router-dom";
import type { IAdsAction, IAdsFullInfo } from "@/store/reducers/ads/types";
import { AdsImgSwiper } from "@/common/components/ads/AdsImgSwiper";
import { ButtonWithIcon } from "@/common/components/ui/button/ButtonWithIcon";
import { priceFormatter } from "@/common/helpers/priceFormatter";
import { timeFormatter } from "@/common/helpers/timeFormatter";
import { AdsCharacteristics } from "@/common/components/ads/AdsCharacteristics";
import { AdsWrapper } from "@/common/components/wrapper/AdsWrapper";
import { AdsSeller } from "@/common/components/ads/AdsSeller";
import { AdsModeration } from "@/common/components/ads/AdsModeration";
import { PriorityEnum } from "@/common/enums/PriorityEnum";
import SvgHelper from "@/common/components/svg-helper/SvgHelper";
import { ButtonWithTextAndIcon } from "@/common/components/ui/button/ButtonWithTextAndIcon";
import { adsApi } from "@/store/reducers/ads/adsApi";
import { useState } from "react";
import useClickOutRef from "@/common/hooks/useClickOutRef";
import Dropdown from "@/common/components/dropdown/Dropdown";
import { ActionDropdown } from "@/common/components/dropdown/ActionDropdown";
import { ActionEnum } from "@/common/enums/ActionEnum";

interface IAdsContentProps {
  ads: IAdsFullInfo;
}

export const AdsContent = ({ ads }: IAdsContentProps) => {
  const [isRejectDropdownOpen, setRejectDropdownOpen] = useState(false);
  const [isEditDropdownOpen, setEditDropdownOpen] = useState(false);
  const [action, setAction] = useState<ActionEnum>(ActionEnum.OTHER);
  const [comment, setComment] = useState("");

  const navigate = useNavigate();
  const price = priceFormatter(ads.price);
  const time = timeFormatter(ads.createdAt);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleApproveClick = async () => {
    try {
      await adsApi.approve(ads.id);
      // переделать переход на следующее объявление
      handleBackClick();
    } catch {}
  };

  const handleRejectClick = async () => {
    const request: IAdsAction = {
      reason: action,
      comment: comment,
    };
    try {
      await adsApi.reject(ads.id, request);
      handleRejectClose();
      // переделать переход на следующее объявление
      handleBackClick();
    } catch {}
  };

  const handleRejectClose = () => {
    isRejectDropdownOpen && setRejectDropdownOpen(false);
  };

  const handleEditClose = () => {
    isEditDropdownOpen && setEditDropdownOpen(false);
  };

  const rejectRef = useClickOutRef<HTMLDivElement>(handleRejectClose);
  const editRef = useClickOutRef<HTMLDivElement>(handleEditClose);

  return (
    <section className="w-full flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <ButtonWithIcon
          title="Назад"
          iconName="arrow_back"
          onClick={handleBackClick}
        />
        <h2 className="text-xl xs:text-2xl md:text-3xl">{ads.title}</h2>

        {ads.priority === PriorityEnum.URGENT && (
          <SvgHelper iconName="fire" className="text-red-700" />
        )}
      </div>

      <div className="flex items-start justify-between gap-x-4 w-full">
        <AdsImgSwiper
          title={ads.title}
          images={ads.images}
          className="w-full aspect-square sm:size-55 md:size-75 2xl:size-100"
        />

        {ads.moderationHistory.length !== 0 && (
          <AdsModeration moderation={ads.moderationHistory} />
        )}
      </div>

      <div className="flex flex-col gap-y-2 mt-1">
        <span className="font-bold text-xl leading-4.5 truncate">{price}</span>
        <span className="leading-4.5 truncate">{`${ads.category} • ${time}`}</span>
      </div>

      <AdsCharacteristics characteristics={ads.characteristics} />

      <AdsWrapper title="Описание">
        <p>{ads.description}</p>
      </AdsWrapper>

      <AdsSeller seller={ads.seller} />

      <div className="flex-center gap-x-4">
        <ButtonWithTextAndIcon
          iconName="check_mark"
          title="Одобрить"
          color="green"
          onClick={handleApproveClick}
        />
        <div className="relative w-fit" ref={rejectRef}>
          <ButtonWithTextAndIcon
            iconName="close"
            title="Отклонить"
            color="red"
            onClick={() => setRejectDropdownOpen(!isRejectDropdownOpen)}
          />

          <Dropdown isOpen={isRejectDropdownOpen} position="top">
            <ActionDropdown
              action={action}
              setAction={setAction}
              comment={comment}
              setComment={setComment}
              onClick={handleRejectClick}
            />
          </Dropdown>
        </div>
        <ButtonWithTextAndIcon
          iconName="reload"
          title="Доработка"
          color="yellow"
        />
      </div>
    </section>
  );
};
