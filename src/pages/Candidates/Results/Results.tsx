import { FC } from 'react';

import List from 'components/custom/List/List';
import BlockCandidate from 'components/custom/BlockCandidate/BlockCandidate';
import ICandidate from 'types/ICandidate';

import styles from './Results.module.css';

export interface ResultsProps {
  candidates?: ICandidate[];
}

const Results: FC<ResultsProps> = ({ candidates = [] }) => {
  return (
    <section>
      <List className={{ list: styles.candidates }}>
        {candidates.map((candidate) => (
          <BlockCandidate key={candidate.id} candidate={candidate} />
        ))}
      </List>
    </section>
  );
};

export default Results;
