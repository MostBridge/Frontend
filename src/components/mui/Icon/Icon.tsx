import { FC } from 'react';

import { Icon as MuiIcon, IconProps as MuiIconProps } from '@mui/material';

export interface IconProps extends MuiIconProps {
  src: string;
  alt?: string;
}

const Icon: FC<IconProps> = ({ src, alt, className, ...props }) => (
  <MuiIcon
    className={className}
    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}
    {...props}
  >
    <img src={src} alt={alt || 'иконка'} />
  </MuiIcon>
);

export default Icon;
