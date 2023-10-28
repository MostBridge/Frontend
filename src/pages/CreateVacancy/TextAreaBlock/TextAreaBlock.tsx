import { FC, useId } from 'react'
import styles from './TextAreaBlock.module.css'
import { TextField, useTheme, InputLabel } from '@mui/material'
import Button from 'components/Button/Button'

interface TextAreaBlockProps {
    label?: string,
}

const TextAreaBlock: FC<TextAreaBlockProps> = ({ label }) => {

    const id = useId()

    const theme = useTheme()

    const inputLabelStyle = {
        ...theme.typography.caption,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.primary,
    }

    return (
        <div className={styles.container}>
            {label && <InputLabel style={inputLabelStyle}htmlFor={id}>{label}</InputLabel>}
            <TextField
                className={styles.text_field}
                id={id}
                placeholder='Введите текст'
                multiline
                inputProps={{
                    style: {
                        height: "126px",
                        overflow: "auto",
                    },
                }}
            />
            <Button variant="contained" size="small" className={styles.button}>
                Использовать AI
            </Button>
        </div >
    )
}

export default TextAreaBlock