import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ListGroupItem.module.css';
import A from '../A';
let cx = classNames.bind(styles);

const ListGroupItem = ({
  children,
  className,
  tag: Tag,
  disabled,
  active,
  ...attrs
}) => {
  const classes = cx(
    'list-group-item',
    className,
    { disabled },
    { active },
  );

  if (attrs.href && Tag === 'li') {
    Tag = A;
  }

  return (
    <Tag className={classes} {...attrs}>
      {children}
    </Tag>
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  tag: 'li',
  disabled: false,
  active: false,
};

export default ListGroupItem;