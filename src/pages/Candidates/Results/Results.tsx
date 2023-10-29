import { FC } from 'react';

import Button from 'components/mui/Button/Button';
import List from 'components/custom/List/List';
import BlockCandidate from 'components/custom/BlockCandidate/BlockCandidate';
import ICandidate from 'types/ICandidate';

import styles from './Results.module.css';
import { Typography } from '@mui/material';
import { getCandidatesDeclension } from 'utils/utils';

export interface ResultsProps {
  candidates?: ICandidate[];
}

const Results: FC<ResultsProps> = ({ candidates = [] }) => {
  const number = candidates.length;

  return (
    <section className={styles.results}>
      <div className={styles.panel}>
        <Typography className={styles.label} variant="body2" component="label">
          {`Всего найдено ${number} ${getCandidatesDeclension(number)}`}
          <Button size="small" variant="text" disableRipple>
            Добавить всех в избранные
          </Button>
        </Typography>
      </div>
      <List className={{ list: styles.candidates, item: styles.candidate }}>
        {candidates.map((candidate) => (
          <BlockCandidate key={candidate.id} candidate={candidate} />
        ))}
      </List>
    </section>
  );
};

export default Results;
