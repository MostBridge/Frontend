import FilterButton from 'components/custom/FilterButton/FilterButton';
import { FC, useState } from 'react';
import styles from './CustomFilterButton.module.css';

interface CustomFilterButtonProps {
  value?: number | string;
  el?: string;
  onClick?: (id?: number | string) => void;
}

const CustomFilterButton: FC<CustomFilterButtonProps> = ({ value, el, onClick }) => {
  const [active, setActive] = useState(false);

  function handleClick() {
    if (onClick) onClick(value);
    setActive(!active);
  }

  return (
    <FilterButton
      className={active ? styles.button_active : ''}
      variant="contained"
      size="medium"
      onClick={handleClick}
    >
      {el}
    </FilterButton>
  );
};

export default CustomFilterButton;
