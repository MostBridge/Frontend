import { FC, useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import sliders from 'assets/images/sliders.svg';
import sort from 'assets/images/sort.svg';
import Button from 'components/mui/Button/Button';
import List from 'components/custom/List/List';
import BlockCandidate from 'components/custom/BlockCandidate/BlockCandidate';
import IconButton from 'components/mui/IconButton/IconButton';
import Filters from 'components/custom/Filters/Filters';
import ICandidate from 'types/ICandidate';
import { getCandidatesDeclension } from '../../../utils/utils';

import styles from './Results.module.css';
import { useGetCandidatesQuery } from '../../../redux/slices/API';

export interface ResultsProps {
  candidates?: ICandidate[];
  addText: string,
  allocation: string,
  componentName: string,
}

const Results: FC<ResultsProps> = ({ addText, allocation, componentName }) => {
  const getCandidate = useGetCandidatesQuery();


  useEffect(() => {
    if (getCandidate.isSuccess) {
      console.log(getCandidate.data);
    }
  }, [getCandidate.isSuccess]);
  
  const candidates = getCandidate.data;
  
  const candidatesNumber = `Всего найдено ${candidates.length} ${getCandidatesDeclension(candidates.length)}`;
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
        <IconButton endIcon={endIcon}       onClick={componentName === 'Candidates' ? handleOpenPopup : undefined} alt="Иконка фильтров">
         {allocation}
        </IconButton>
      </article>
      <article className={styles.candidates}>
        <List className={{ item: styles.candidate }}>
          {candidates?.map((candidate) => (
            <BlockCandidate key={candidate.id} candidate={candidate} />
          ))}
        </List>
      </article>
      {isPopupFilterOpen && <Filters onClose={handleClosePopup} isPopupFilterOpen={isPopupFilterOpen} />}
    </section>
  );
};

export default Results;
