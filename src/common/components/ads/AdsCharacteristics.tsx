import type { IAdsCharacteristics } from "@/store/reducers/ads/types";

interface IAdsCharacteristicsProps {
  characteristics: IAdsCharacteristics;
}

export const AdsCharacteristics = ({
  characteristics,
}: IAdsCharacteristicsProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <h3 className="text-2xl">Характеристики</h3>
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
    </div>
  );
};
