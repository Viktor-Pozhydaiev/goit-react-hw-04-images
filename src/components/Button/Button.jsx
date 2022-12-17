import css from '../Button/Button.module.css';
import { PropTypes } from 'prop-types';

export const Button = ({ addPage }) => {
  return (
    <button className={css.load_btn} onClick={addPage} type="button">
      Load More
    </button>
  );
};
Button.propTypes = {
  addPage: PropTypes.func.isRequired,
};
