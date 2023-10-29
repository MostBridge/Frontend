import { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import arrowDown from 'assets/images/arrowDown.svg';
import Icon from 'components/mui/Icon/Icon';
import Button from 'components/mui/Button/Button';
import BlockFavorite from 'components/custom/BlockFavorite/BlockFavorite';
import List from 'components/custom/List/List';
import ICandidate from 'types/ICandidate';
import { getCandidatesDeclension, isEmpty } from 'utils/utils';

import styles from './Board.module.css';

export interface BoardProps {
  candidates?: ICandidate[];
}

const Board: FC<BoardProps> = ({ candidates = [] }) => {
  const candidatesNumber = `Добавлено ${candidates.length} ${getCandidatesDeclension(candidates.length)}`;
  const expandedIcon = <Icon src={arrowDown} alt="Иконка раскрытия доски" />;

  return (
    <aside className={styles.board}>
      <Accordion className={styles.accardion} disableGutters>
        <AccordionSummary className={styles.summary} expandIcon={expandedIcon}>
          <section className={styles.content}>
            <Typography className={styles.title} variant="body1" component="h2">
              Избранные кандидаты
            </Typography>
            <Typography variant="body2" component="p">
              Выберите кандидатов или перетащите в эту область для дальнейших действий
            </Typography>
            <Typography className={styles.candidatesNumber} variant="body2" component="p">
              {candidatesNumber}
            </Typography>
          </section>
        </AccordionSummary>
        <AccordionDetails className={styles.candidates}>
          <List className={{ item: styles.candidate }}>
            {candidates.map((candidate) => (
              <BlockFavorite key={candidate.id} candidate={candidate} />
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <section className={styles.buttons}>
        <List className={{ item: styles.button }}>
          <Button variant="contained" size="small" disabled={isEmpty(candidates)} fullWidth>
            Перейти к списку
          </Button>
          <Button variant="outlined" size="small" disabled={isEmpty(candidates)} fullWidth>
            Написать кандидатам
          </Button>
          <Button variant="outlined" size="small" disabled={isEmpty(candidates)} fullWidth>
            Скачать резюме
          </Button>
        </List>
      </section>
    </aside>
  );
};

export default Board;
