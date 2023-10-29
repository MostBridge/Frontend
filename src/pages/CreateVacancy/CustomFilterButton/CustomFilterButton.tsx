import FilterButton from 'components/custom/FilterButton/FilterButton';
import { FC, useState } from 'react';
import styles from './CustomFilterButton.module.css';

interface CustomFilterButtonProps {
  el: string;
}

const CustomFilterButton: FC<CustomFilterButtonProps> = ({ el }) => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <FilterButton
      className={active ? styles.button_active : ''}
      variant="contained"
      size="medium"
      onClick={handleClick}
    >
      {' '}
      {el}
    </FilterButton>
  );
};

export default CustomFilterButton;
