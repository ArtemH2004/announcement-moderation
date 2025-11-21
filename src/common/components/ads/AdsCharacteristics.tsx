import type { IAdsCharacteristics } from "@/store/reducers/ads/types";
import { AdsWrapper } from "@/common/components/wrapper/AdsWrapper";

interface IAdsCharacteristicsProps {
  characteristics: IAdsCharacteristics;
}

export const AdsCharacteristics = ({
  characteristics,
}: IAdsCharacteristicsProps) => {
  return (
    <AdsWrapper title="Характеристики">
      <table className="w-fit">
        <tbody>
          {Object.entries(characteristics).map(([key, value]) => (
            <tr key={key}>
              <td className="py-0.5">
                <span className="text-gray-500">{key}: </span>
                <span className="">{value}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdsWrapper>
  );
};
