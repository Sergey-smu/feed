import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './select.module.css';
let cx = classNames.bind(styles);

const Select = ({
    id, options, className, label, error, name, defaultValue, value, onChange, ...attrs
  }) => {

    const classes = cx(
        'select',
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
        <select 
            className={classes}
            name={elemName}
            value={value}
            onChange={event => onChange(event.target.value)}
            {...attrs}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
         {error
            && <span className={styles.inputError}>{error}</span>
          }
              </div>

    );
};

Select.propTypes = {
    id: PropTypes.string,

    options: PropTypes.array.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
  };
  
  Select.defaultProps = {
    id: '',
    options: [],
    name: '',
    className: '',
    label: '',
    error: '',
  };
  

export default Select;