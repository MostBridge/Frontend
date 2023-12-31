import { FC, useState } from 'react';

import { Avatar, Checkbox, Typography } from '@mui/material';

import chartColumn from 'assets/images/chartColumn.svg';
import map from 'assets/images/map.svg';
import money from 'assets/images/money.svg';
import star from 'assets/images/star.svg';
import Button from 'components/mui/Button/Button';
import IconTag from 'components/custom/IconTag/IconTag';
import List from 'components/custom/List/List';
import ICandidate from 'types/ICandidate';
import { getFullName } from '../../../utils/utils';

import styles from './BlockCandidate.module.css';
import TabRow from '../TabRow/TabRow';
import HeartButton from '../HeartButton/HeartButton';
import { Link } from 'react-router-dom';
import ITech from 'types/ICandidate';
import { useAddToFavoriteMutation, useGetCandidatesQuery, useRemoveFromFavoriteMutation } from '../../../redux/slices/API';
import { Experience, Grade } from 'types/IVacancy';

export interface BlockCandidateProps {
  candidate: ICandidate;
  onSelect?: () => void;
  onFavorite?: () => void;
  tech: ITech[];
}

const BlockCandidate: FC<BlockCandidateProps> = ({ candidate, onSelect, tech }) => {
  const { first_name, last_name } = candidate;
  const name = getFullName(first_name, last_name);

  const profession = candidate.profession?.name;
  const town = candidate.town?.city;
  const photo = candidate?.photo;

  const [heartState, setHeartState] = useState(candidate.is_favorited)

  const [addToFavorite] = useAddToFavoriteMutation();
  const [removeFromFavorite] = useRemoveFromFavoriteMutation();
  const { refetch } = useGetCandidatesQuery();

  const handleHeartClick = async () => {
    try {
      if (candidate.id && !candidate.is_favorited) {
        await addToFavorite(candidate.id?.toString());
        void refetch();
        setHeartState(!heartState)
      }
      if (candidate.id && candidate.is_favorited) {
        await removeFromFavorite(candidate.id?.toString());
        void refetch();
        setHeartState(!heartState)
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={styles.block}>
      <div className={styles.container}>
        {onSelect && <Checkbox className={styles.checkbox} disableRipple onClick={onSelect} />}
        <div className={styles.view}>
          <Avatar className={styles.avatar} src={photo} />
          <div className={styles.status}>
            <TabRow className={styles.tab} size="small" color="secondary" text="Совпадение 90%" />
            <TabRow className={styles.tab} size="small" color="light" text="Ищу работу" />
            <Typography className={styles.activity} variant="caption" component="p">
              Заходил(a) вчера в 23:59
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <header className={styles.header}>
            <Typography className={styles.name} variant="h3" component="h2">
              {name}
            </Typography>
            <HeartButton isFavorite={heartState} onClick={handleHeartClick} />
          </header>
          <Typography className={styles.profession} variant="body1" component="p">
            {profession}
          </Typography>
          <List className={{ list: styles.info }}>
            <IconTag icon={chartColumn} text={Grade[candidate?.grade as any]} alt="Иконка квалификации" />
            <IconTag icon={map} text={town} alt="Иконка города" />
            <IconTag icon={money} text="100 000 ₽" alt="Иконка зарплаты" />
            <IconTag icon={star} text={Experience[candidate?.experience as any]} alt="Иконка опыта" />
          </List>
          <List className={{ list: styles.skills }}>
            <List className={{ list: styles.skills }}>
              {tech?.map((skill) => (
                <TabRow className={styles.tab} isSelected size="small" key={skill.ids} text={skill.name} />
              ))}
            </List>
          </List>
        </div>
        <div className={styles.navigation}>
          <Link to={`/user/${candidate.id}`}>
            <Button className={styles.button} variant="contained" size="small">
              Подробнее
            </Button>
          </Link>
          {candidate.is_viewed && (
            <Typography variant="caption" component="p" color="text.secondary">
              Просмотрено
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockCandidate;
