import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({
  name, className, size, onClick, disabled, color, ...attrs
}) => {
  const classes = classNames(
    'fa',
    `fa-${name}`,
    { func: onClick },
    { disabled },
    className,
  );

  const elemSize = size ? { fontSize: `${size}rem` } : null;
  const elemSColor = color ? { 'color': `${color}` } : null;

  return (
    <i
      {...attrs}
      className={classes}
      onClick={disabled ? null : onClick}
      style={elemSize, elemSColor}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
};

Icon.defaultProps = {
  name: '',
  className: '',
  size: null,
  onClick: null,
  disabled: false,
  color: null,
};

export default Icon;