import  { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TabBar.module.css';
import TabBarNav from './TabBarNav';
import ButtonGroup from '../ButtonGroup';
let cx = classNames.bind(styles);


const TabBar = ({
        children, className, vertical, ...attrs
      }) => {
  
  TabBar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool,
  };

  TabBar.defaultProps = {
    children: null,
    className: '',
    vertical: false,
  };

  const [activeTab, setActiveTab] = useState(children[0].props.label)

  

  const getChildrenLabels = children => children.map(({ props }) => props.label)

  const changeActiveTab = currentTab => {
   

      setActiveTab(currentTab)
  }

 const renderTabs = () => {
    
    return getChildrenLabels(children).map(navLabel => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        className={classNames({ active: activeTab === navLabel })}
        onChangeActiveTab={changeActiveTab}
      />
    ));
  }

  const classes = cx(
      'tab-bar',
      className,
      { vertical },
    );

    return (
      <div className={classes} {...attrs}>
        <ButtonGroup className={styles['tab-bar-nav']}>
          {renderTabs()}
        </ButtonGroup>
        <div className={styles['tab-container']}>
          {children.filter(children => children.props.label === activeTab )}
        </div>
      </div>
    );
  
}

export default TabBar;