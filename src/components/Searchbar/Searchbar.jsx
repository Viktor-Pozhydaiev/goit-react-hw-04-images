import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import css from '../Searchbar/SearchbarStyles.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handelChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handelSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Pleas enter search word!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={css.searchbar}>
      <form onSubmit={handelSubmit} className={css.search_form}>
        <button type="submit" className={css.search_form_button}>
          <span className={css.search_form_button_label}>Search</span>
        </button>

        <input
          className={css.search_form_input}
          type="text"
          autoComplete="off"
          name="query"
          onChange={handelChange}
          value={query}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
