import logo from "@/common/components/svg-helper/icons/logo.svg?react";
import list from "@/common/components/svg-helper/icons/list.svg?react";
import statistic from "@/common/components/svg-helper/icons/statistic.svg?react";
import arrow from "@/common/components/svg-helper/icons/arrow.svg?react";
import arrow_back from "@/common/components/svg-helper/icons/arrow-back.svg?react";
import arrow_forward from "@/common/components/svg-helper/icons/arrow-forward.svg?react";
import fire from "@/common/components/svg-helper/icons/fire.svg?react";
import filters from "@/common/components/svg-helper/icons/filters.svg?react";
import sort from "@/common/components/svg-helper/icons/sort.svg?react";
import check_mark from "@/common/components/svg-helper/icons/check-mark.svg?react";

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
 | 'arrow_back'
 | 'arrow_forward'
 | 'fire'
 | 'filters'
 | 'sort'
 | 'check_mark'
;

export const ImageComponents: Record<ImageComponentsTypes, IconType> = {
    logo,
    list,
    statistic,
    arrow,
    arrow_back,
    arrow_forward,
    fire,
    filters,
    sort,
    check_mark,
};
