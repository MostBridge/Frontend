import { FC } from 'react';
import { Typography } from '@mui/material';

import Icon from 'components/mui/Icon/Icon';

import styles from './IconTag.module.css';

export interface IconTagProps {
  icon: string;
  text?: string;
  alt?: string;
}

const IconTag: FC<IconTagProps> = ({ icon, text, alt }) => {
  return (
    <div className={styles.tag}>
      <Icon src={icon} alt={alt} />
      <Typography variant="body2" component="p" color="text.secondary">
        {text}
      </Typography>
    </div>
  );
};

export default IconTag;
