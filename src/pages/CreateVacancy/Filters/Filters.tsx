import { Typography } from '@mui/material'
import { FC } from 'react'
import styles from './Filters.module.css'
import CustomFilterButton from '../CustomFilterButton/CustomFilterButton'


interface FiltersProps {
    filters: string[],
    title: string,
}

const Filters: FC<FiltersProps> = ({ filters, title }) => {

    return (
        <div className={styles.container}>
            <Typography className={styles.text} variant="caption" component="h3">
                {title}
            </Typography>
            <ul className={styles.list}>
                {filters.map((el, id) => {
                    return (
                        <li key={id}>
                            <CustomFilterButton el={el} />
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}

export default Filters