import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TabBarNav.module.css';
import Button from '../Button';
let cx = classNames.bind(styles);


const TabBarNav = ({ navLabel, className, onChangeActiveTab, active }) => {
  const classes = cx(
    className,
    'nav-item',
    {active}
  );

  return (
    <Button
      type="button"
      className={classes}
      onClick={() => { onChangeActiveTab(navLabel); }}
    >
      {navLabel}
    </Button>
  );
};

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  className: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
};

TabBarNav.defaultProps = {
  navLabel: 'Tab',
  className: '',
  onChangeActiveTab: () => {},
};

export default TabBarNav;