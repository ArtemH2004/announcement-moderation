import { useMemo, useState, memo, type CSSProperties, type FC } from 'react';
import { ImageComponents, type ImageComponentsTypes } from '@/common/components/svg-helper/index';

interface SvgHelperProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    iconName: ImageComponentsTypes;
    fill?: string;
    color?: string;
    hoverColor?: string;
    size?: string;
    fillOpacity?: number;
    style?: CSSProperties;
}

export const SvgHelper: FC<SvgHelperProps> = memo(
    ({ iconName, color, size, style, fill, hoverColor, fillOpacity, ...props }) => {
        const CurrentIcon = useMemo(() => ImageComponents[iconName], [iconName]);

        const [isHovered, setIsHovered] = useState(false);

        return CurrentIcon ? (
            <CurrentIcon
                {...props}
                color={isHovered && hoverColor ? hoverColor : color}
                // fill={isHovered && hoverColor ? hoverColor : fill}
                width={size ?? '24px'}
                height={size ?? '24px'}
                style={style}
                fillOpacity={fillOpacity}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
        ) : null;
    },
);

export default SvgHelper;
