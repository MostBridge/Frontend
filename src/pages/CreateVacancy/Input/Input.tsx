import { FC, useId } from 'react'
import styles from './Input.module.css'
import InputMui from 'components/Input/Input'
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';

interface InputProps {
    label?: string,
    placeholder?: string,
}

const Input: FC<InputProps> = ({ label, placeholder }) => {

    const id = useId()

    const theme = useTheme()

    const inputLabelStyle = {
        ...theme.typography.caption,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.primary
    }

    return (
        <li className={styles.input}>
            {label && <InputLabel style={inputLabelStyle} htmlFor={id}>{label}</InputLabel>}
            <InputMui id={id} type="text" variant="outlined" fullWidth placeholder={placeholder} />
        </li>
    )
}

export default Input