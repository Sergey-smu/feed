import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './buttonGroup.module.css';
let cx = classNames.bind(styles);

const ButtonGroup = ({
  children, className, vertical, ...attrs
}) => {
  const classes = cx(
    'btn-group',
    className,
    { vertical },
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default ButtonGroup;