import { Autocomplete, TextField, Typography, useTheme } from '@mui/material'
import styles from './SkillBlock.module.css'
import { FC, useState } from 'react'
import SkillButton from '../SkillButton/SkillButton';
import { v4 as uuidv4 } from 'uuid';

interface SkillBlockProps {
    array: string[],
}

const SkillBlock: FC<SkillBlockProps> = ({ array }) => {

    const [value, setValue] = useState<string | null>('');
    const [inputValue, setInputValue] = useState('');

    const [set, setSet] = useState(new Set<string>)

    const theme = useTheme()

    return (
        <div className={styles.container}>
            <Typography className={styles.title} variant="caption" component="h3">Требуемые навыки</Typography>
            <div className={styles.input_container}>
                <Typography className={styles.title} style={{ color: theme.palette.text.secondary }} variant="caption" component="p">Выберите от 3 до 7 навыков</Typography>
                <Autocomplete
                    options={array}
                    sx={{ maxWidth: 320 }}
                    renderInput={(params) => <TextField {...params} />}
                    value={value}
                    onChange={(_event: unknown, newValue: string | null) => {
                        setValue(newValue);
                        if (newValue !== null) {
                            setSet(el => {
                                return el.add(newValue)
                            })
                        }
                    }}
                    inputValue={inputValue}
                    onInputChange={(_event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                />
            </div>
            <div className={styles.list_of_skills}>
                {Array.from(set).map(el => <SkillButton
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    key={uuidv4() as string}
                    text={el}
                    setSet={setSet} />)}
            </div>
        </div>
    )
}

export default SkillBlock