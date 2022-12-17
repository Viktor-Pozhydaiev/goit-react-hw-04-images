import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-hot-toast';
import css from '../Searchbar/SearchbarStyles.module.css';

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };
  handelChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handelSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Pleas enter search word!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handelSubmit} className={css.search_form}>
          <button type="submit" className={css.search_form_button}>
            <span className={css.search_form_button_label}>Search</span>
          </button>

          <input
            className={css.search_form_input}
            type="text"
            autoComplete="off"
            name="query"
            onChange={this.handelChange}
            value={this.state.query}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
