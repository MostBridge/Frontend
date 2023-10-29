import { FC } from 'react';
import styles from './DonePopup.module.css';

type FiltersProps = {
  onClose: () => void;
  isPopupDoneOpen: boolean;
};

const DonePopup: FC<FiltersProps> = ({ onClose, isPopupDoneOpen }) => {
  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className={`${styles.popup} ${isPopupDoneOpen ? styles.popup_opened : ''}`}>
      <div className={styles.done} onClick={stopPropagation}>
        
      </div>
    </div>
  );
};

export default DonePopup;
