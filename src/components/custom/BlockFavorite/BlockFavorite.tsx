import { FC } from 'react';
import { Avatar, Typography } from '@mui/material';

import HeartButton from 'components/custom/HeartButton/HeartButton';
import ICandidate from 'types/ICandidate';
import { getFullName } from 'utils/utils';

import styles from './BlockFavorite.module.css';
import { Experience } from 'types/IVacancy';

export interface BlockFavoriteProps {
  candidate: ICandidate;
  onToggle?: () => void;
}

const BlockFavorite: FC<BlockFavoriteProps> = ({ candidate, onToggle }) => {
  const { first_name, last_name } = candidate;
  const name = getFullName(first_name, last_name);
  const profession = candidate.profession?.name;
  const experience = Experience[candidate?.experience as any];

  return (
    <article className={styles.block}>
      <div className={styles.content}>
        <Avatar src={candidate.photo} />
        <div className={styles.text}>
          <Typography variant="body2" component="h3">
            {name}
          </Typography>
          <Typography variant="caption" component="h3" color="text.secondary">
            {profession}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {experience}
          </Typography>
        </div>
      </div>
      <HeartButton className={styles.heart} size="small" isFavorite={candidate.is_favorited} onClick={onToggle} />
    </article>
  );
};

export default BlockFavorite;
