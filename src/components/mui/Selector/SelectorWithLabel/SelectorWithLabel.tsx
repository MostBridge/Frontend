import { SelectChangeEvent, useTheme } from "@mui/material"
import { FC, PropsWithChildren, useId, useState } from "react"
import styles from './SelectorWithLabel.module.css'
import SelectLabel from '@mui/material/InputLabel';
import Selector from "../Selector";

interface SelectorWithLabelProps {
    label?: string,
    baseValue?: string,
    maxWidth?: string,
}
const SelectorWithLabel: FC<PropsWithChildren<SelectorWithLabelProps>> = ({ label, baseValue, maxWidth, children }) => {

    const [value, setValue] = useState<string>(baseValue || '');

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setValue(event.target.value as string);
    };

    const id = useId()

    const theme = useTheme()

    const inputLabelStyle = {
        ...theme.typography.caption,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.text.primary
    }

    return (
        <div className={styles.container} style={{ maxWidth: maxWidth }}>
            {label && <SelectLabel style={inputLabelStyle} htmlFor={id}>{label}</SelectLabel>}
            <Selector id={id} value={value} onChange={handleChange}>
                {children}
            </Selector>
        </div>
    )
}

export default SelectorWithLabel