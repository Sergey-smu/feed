import React from 'react';

import PropTypes from 'prop-types';
import styles from './a.css'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

let cx = classNames.bind(styles);


function A({href, className, children, active, disabled, onClick, ...attrs }) {

  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  }; 

  const classes = cx(
    'a',
    className,
    { active },
   
  );

  A.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
  
  };
  
  A.defaultProps = {
    children: 'link',
    onClick: () => {},
    className: '',
    disabled: false,
    active: false,
  
  };

  return (
    <Link to={href}
       className={classes}
          disabled={disabled}
          onClick={onClickAction}
          {...attrs}>
        {children}
      
    </Link>
  );
}

export default A;