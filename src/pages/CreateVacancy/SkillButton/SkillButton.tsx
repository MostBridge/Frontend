import React, { FC } from 'react';
import styles from './SkillButton.module.css'
import { useTheme } from '@mui/material';

interface SkillButton {
    text: string,
    setSet: React.Dispatch<React.SetStateAction<Set<string>>>,
}

const SkillButton: FC<SkillButton> = ({ text, setSet }) => {

    const handleClick = () => {
        setSet((prevSet) => {
            const newSet = new Set(prevSet);
            newSet.delete(text);
            return newSet;
        });
    }

    const theme = useTheme()

    const containerStyle = {
        ...theme.typography.body1,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark,
    }

    return (
        <div className={styles.container} style={containerStyle}>
            {text}
            <button onClick={handleClick} className={styles.button} />
        </div>
    )
}

export default SkillButton
