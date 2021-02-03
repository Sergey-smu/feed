import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './customImage.module.css';
let cx = classNames.bind(styles);

const CustomImage = ({
  src, alt, className, width, height, circle, ...attrs
}) => {
  const classes = cx(
    className,
    { circle },
  );

  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      width={width}
      height={height}
      {...attrs}
    />
  ); 
};

CustomImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  heigth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  circle: PropTypes.bool,
  className: PropTypes.string,
};

CustomImage.defaultProps = {
  src: '',
  alt: 'image',
  width: 100,
  height: 100,
  circle: false,
  className: '',
};

export default CustomImage;