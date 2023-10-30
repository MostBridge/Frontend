import { FC, useState } from 'react';
import { Typography } from '@mui/material';

import sliders from 'assets/images/sliders.svg';
import sort from 'assets/images/sort.svg';
import Button from 'components/mui/Button/Button';
import List from 'components/custom/List/List';
import BlockCandidate from 'components/custom/BlockCandidate/BlockCandidate';
import IconButton from 'components/mui/IconButton/IconButton';
import Filters from 'components/custom/Filters/Filters';
import { getCandidatesDeclension } from '../../../utils/utils';

import styles from './Results.module.css';
import { useGetCandidatesQuery } from '../../../redux/slices/API';
import { TECHNOLOGY } from '../../../utils/constants';
import ICandidate from 'types/ICandidate';

export interface ResultsProps {
  candidates?: ICandidate[];
  addText: string;
  allocation: string;
  componentName: string;
  onSelect?: () => void;
}

const Results: FC<ResultsProps> = ({ addText, allocation, componentName, onSelect }) => {

  const { data: candidates } = useGetCandidatesQuery();

  const candidatesCount = candidates ? candidates.count : 0;
  const candidatesResults = candidates ? candidates.results : [];
  
  const candidatesNumber = `Всего найдено ${candidatesCount} ${getCandidatesDeclension(candidatesCount)}`;
  const [isPopupFilterOpen, setIsPopupFilterOpen] = useState<boolean>(false);

  let endIcon;

  if (componentName === 'Favorites') {
    endIcon = sort;
  } else if (componentName === 'Candidates') {
    endIcon = sliders;
  }

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
          {candidatesNumber}
          <Button size="small" variant="text" disableRipple>
            {addText}
          </Button>
        </Typography>
        <IconButton
          endIcon={endIcon}
          onClick={componentName === 'Candidates' ? handleOpenPopup : undefined}
          alt="Иконка фильтров"
        >
          {allocation}
        </IconButton>
      </article>
      <article className={styles.candidates}>
        <List className={{ item: styles.candidate }}>
          {candidatesResults.map((candidate, index) => (
            <BlockCandidate key={candidate.id} candidate={candidate} onSelect={onSelect} tech={TECHNOLOGY[index]} />
          ))}
        </List>
      </article>
      {isPopupFilterOpen && <Filters onClose={handleClosePopup} isPopupFilterOpen={isPopupFilterOpen} />}
    </section>
  );
};

export default Results;
