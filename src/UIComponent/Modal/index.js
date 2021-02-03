import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Portal from '../Portal';
import Icon from '../Icon';
import Button from '../Button';


const Modal = ({
  title, isOpen, onCancel, onSubmit, cancel, submit, children,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className={styles.modalOverlay} onClick={() => onCancel()}>
            <div className={styles.modalWindow} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>{title}</div>
                <Icon name="times" onClick={onCancel} />
              </div>
              <div className={styles.modalBody}>
                {children}
              </div>
              <div className={styles.modalFooter}>
                <Button onClick={onCancel}>{cancel}</Button>
                <Button onClick={onSubmit}>{submit}</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  cancel: PropTypes.string,
  submit: PropTypes.string,
};

Modal.defaultProps = {
  title: '',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
  cancel: 'cancel',
  submit: 'submit',
};

export default Modal;