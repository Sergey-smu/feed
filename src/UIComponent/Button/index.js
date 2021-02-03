import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './button.css';
import A from '../A';
let cx = classNames.bind(styles);

const Button = ({
  children, onClick, className, disabled, active, animated, ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = cx(
    'btn',
    className,
    { active },
    { animated }
  );

  const Tag = attrs.href ? A : 'button';

  return (
    
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  animated: PropTypes.bool,

};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
  animated: false,

};

export default Button;