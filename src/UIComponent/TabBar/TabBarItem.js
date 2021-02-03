import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TabBarItem.module.css';
let cx = classNames.bind(styles);

const TabBarItem = ({
  children, label, activeTab, ...attrs
}) => {
  const classes = cx(
    'tab-bar-item',
    { active: activeTab === label },
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string,
};

TabBarItem.defaultProps = {
  children: null,
  activeTab: '',
};

export default TabBarItem;