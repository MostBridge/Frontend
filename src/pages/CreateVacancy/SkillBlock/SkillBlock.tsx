import { Autocomplete, TextField, Typography, useTheme } from '@mui/material';
import styles from './SkillBlock.module.css';
import { FC, useState } from 'react';
import arrowDown from 'assets/images/arrowDown.svg';
import SkillButton from '../SkillButton/SkillButton';
import { v4 as uuidv4 } from 'uuid';
import Icon from 'components/mui/Icon/Icon';

interface SkillBlockProps {
  value?: string | null;
  array?: string[];
  set: Set<string>;
  setSet: any;
  onChange?: (_event: unknown, newValue: string | null) => void;
}

const SkillBlock: FC<SkillBlockProps> = ({ array, value, set, setSet, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const theme = useTheme();

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant="caption" component="h3">
        Требуемые навыки
      </Typography>
      <div className={styles.input_container}>
        <Typography
          className={styles.title}
          style={{ color: theme.palette.text.secondary }}
          variant="caption"
          component="p"
        >
          Выберите от 3 до 7 навыков
        </Typography>
        <Autocomplete
          options={array || []}
          sx={{ maxWidth: 320 }}
          renderInput={(params) => <TextField {...params} />}
          value={value}
          popupIcon={<Icon src={arrowDown} />}
          onChange={onChange}
          inputValue={inputValue}
          onInputChange={(_event, newInputValue) => {
            setInputValue(newInputValue);
          }}
        />
      </div>
      <div className={styles.list_of_skills}>
        {Array.from(set).map((el) => (
          <SkillButton key={uuidv4()} text={el} setSet={setSet} />
        ))}
      </div>
    </div>
  );
};

export default SkillBlock;
