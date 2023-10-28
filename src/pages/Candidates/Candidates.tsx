import { FC, useState } from 'react';

import { SelectChangeEvent, Stack } from '@mui/material';
import Select from 'components/Select/Select';
import MenuItem from 'components/MenuItem/MenuItem';
import Label from 'components/Label/Label';

import styles from './Candidates.module.css';

const Candidates: FC = () => {
  const [condition, setCondition] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof condition>) => {
    const value = event.target.value;
    setCondition(typeof value === 'string' ? value.split(',') : value);
  };

  const options = [
    { value: 'От', text: 'От' },
    { value: 'До', text: 'До' },
    { value: 'После', text: 'После' },
    { value: 'Точная дата', text: 'Точная дата' },
  ];

  return (
    <main className={styles.page}>
      <Stack spacing="4px">
        <Label>Условие</Label>
        <Select className={styles.condition} placeholder="Выберите из списка" value={condition} onChange={handleChange}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.text}
            </MenuItem>
          ))}
        </Select>
      </Stack>{' '}
    </main>
  );
};

export default Candidates;
