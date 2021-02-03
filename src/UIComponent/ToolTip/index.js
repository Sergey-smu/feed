import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ToolTip.module.css';
import { useState } from 'react';
let cx = classNames.bind(styles);


const Tooltip = ({children, content, position, style}) => {
  Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    style: PropTypes.objectOf(PropTypes.string),
  }

  Tooltip.defaultProps = {
    content: 'Tooltip content',
    style: {},
    position: 'top'
  }

  const [visible, useVisibility] = useState(false);

  const show = () => {
    useVisibility(true);
  }

  const hide = () => {
    useVisibility(false);
  }

    const classes = cx(
      'tooltip',
      position,)
   

    return (
      <span className={styles.tooltipWrapper}>
        { visible && <span style={style} className={classes}>{content}</span> }
        <span
          className={styles.targetElement}
          onMouseEnter={show}
          onMouseLeave={hide}
        >{children}</span>
      </span>
    );
  }

export default Tooltip;