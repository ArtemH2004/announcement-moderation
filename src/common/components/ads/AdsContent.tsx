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
import { NavigationLink } from "@/common/components/ui/link/NavigationLink";
import { ERoutes } from "@/router/routes";
import { useAppSelector } from "@/common/hooks/useAppSelector";

interface IAdsContentProps {
  ads: IAdsFullInfo;
}

export const AdsContent = ({ ads }: IAdsContentProps) => {
  const maxId = useAppSelector((state) => state.paginationReducer.totalItems);
  const [isRejectDropdownOpen, setRejectDropdownOpen] = useState(false);
  const [isEditDropdownOpen, setEditDropdownOpen] = useState(false);
  const [action, setAction] = useState<ActionEnum>(ActionEnum.OTHER);
  const [comment, setComment] = useState("");

  const navigate = useNavigate();
  const price = priceFormatter(ads.price);
  const time = timeFormatter(ads.createdAt);

  const handleBackClick = () => {
    navigate(ERoutes.LIST);
  };

  const handleApproveClick = async () => {
    try {
      await adsApi.approve(ads.id);
      ads.id !== maxId && navigate(`${ERoutes.ITEM}/${ads.id + 1}`);
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
      ads.id !== maxId
        ? navigate(`${ERoutes.ITEM}/${ads.id + 1}`)
        : console.log("ou");
    } catch {}
  };

  const handleEditClick = async () => {
    const request: IAdsAction = {
      reason: action,
      comment: comment,
    };
    try {
      await adsApi.requestChanges(ads.id, request);
      handleEditClose();
      ads.id !== maxId && navigate(`${ERoutes.ITEM}/${ads.id + 1}`);
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
        <h2 className=":text-xl lg:text-2xl xl:text-3xl">{ads.title}</h2>

        {ads.priority === PriorityEnum.URGENT && (
          <SvgHelper iconName="fire" className="text-red-700" />
        )}
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-4 w-full">
        <AdsImgSwiper
          title={ads.title}
          images={ads.images}
          className="mx-auto lg:ml-0 w-full aspect-square sm:size-75 md:size-85 2xl:size-100"
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

      <div className="w-full flex-center flex-col md:flex-row gap-4">
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
        <div className="relative w-fit" ref={editRef}>
          <ButtonWithTextAndIcon
            iconName="reload"
            title="Доработка"
            color="yellow"
            onClick={() => setEditDropdownOpen(!isEditDropdownOpen)}
          />

          <Dropdown isOpen={isEditDropdownOpen} position="top">
            <ActionDropdown
              action={action}
              setAction={setAction}
              comment={comment}
              setComment={setComment}
              onClick={handleEditClick}
            />
          </Dropdown>
        </div>
      </div>

      <nav className="flex-center gap-x-4">
        <NavigationLink type="prev" />
        <span className="text-gray-500">|</span>
        <NavigationLink type="next" />
      </nav>
    </section>
  );
};
