import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './input.module.css';
let cx = classNames.bind(styles);

const Input = ({
  id, className, label, error, name, ...attrs
}) => {
  const classes = cx(
    'input',
    className,
    { error },
  );
  const elemName = name ? name : id;
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.labelsWrapper}>
        {label
          && <label className={styles.inputLabel} htmlFor={id}>{label}</label>
        }
        {attrs.required
          && <span className={styles.inputRequired}>Required</span>
        }
      </div>
      <input
        name={elemName}
        id={id}
        className={classes}
        {...attrs}
      />
      {error
        && <span className={styles.inputError}>{error}</span>
      }
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  name: '',
  className: '',
  label: '',
  error: '',
};

export default Input;