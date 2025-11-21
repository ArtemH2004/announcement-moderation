import type { IAdsFullInfo } from "@/store/reducers/ads/types"

interface IAdsContentProps {
    ads: IAdsFullInfo;
}

export const AdsContent = ({ads}: IAdsContentProps) => {
  return (
    <div>AdsContent</div>
  )
}
