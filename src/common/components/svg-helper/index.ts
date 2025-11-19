import logo from "@/common/components/svg-helper/icons/logo.svg?react";
import list from "@/common/components/svg-helper/icons/list.svg?react";
import statistic from "@/common/components/svg-helper/icons/statistic.svg?react";
import arrow from "@/common/components/svg-helper/icons/arrow.svg?react";


export type IconType = React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }
>;

export type ImageComponentsTypes = 
 | 'logo'
 | 'list'
 | 'statistic'
 | 'arrow'
;

export const ImageComponents: Record<ImageComponentsTypes, IconType> = {
    logo,
    list,
    statistic,
    arrow,
};
