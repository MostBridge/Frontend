import { FC, useState } from 'react';
import { Typography } from '@mui/material';

import sliders from 'assets/images/sliders.svg';
import Button from 'components/mui/Button/Button';
import List from 'components/custom/List/List';
import BlockCandidate from 'components/custom/BlockCandidate/BlockCandidate';
import IconButton from 'components/mui/IconButton/IconButton';
import Filters from 'components/custom/Filters/Filters';
import ICandidate from 'types/ICandidate';
import { getCandidatesDeclension } from 'utils/utils';

import styles from './Results.module.css';

export interface ResultsProps {
  candidates?: ICandidate[];
}

const Results: FC<ResultsProps> = ({ candidates = [] }) => {
  const label = `Всего найдено ${candidates.length} ${getCandidatesDeclension(candidates.length)}`;
  const [isPopupFilterOpen, setIsPopupFilterOpen] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setIsPopupFilterOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupFilterOpen(false);
  };

  return (
    <section className={styles.results}>
      <article className={styles.panel}>
        <Typography className={styles.label} variant="body2" component="label">
          {label}
          <Button size="small" variant="text" disableRipple>
            Добавить всех в избранные
          </Button>
        </Typography>
        <IconButton endIcon={sliders} onClick={handleOpenPopup} alt="Иконка фильтров">
          Фильтры
        </IconButton>
      </article>
      <article className={styles.candidates}>
        <List className={{ item: styles.candidate }}>
          {candidates.map((candidate) => (
            <BlockCandidate key={candidate.id} candidate={candidate} />
          ))}
        </List>
      </article>
      {isPopupFilterOpen && <Filters onClose={handleClosePopup} isPopupFilterOpen={isPopupFilterOpen} />}
    </section>
  );
};

export default Results;
