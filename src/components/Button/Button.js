import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onLoadMore }) {
  return (
    <button type="button" className={s.loadmorebtn} onClick={onLoadMore}>
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
