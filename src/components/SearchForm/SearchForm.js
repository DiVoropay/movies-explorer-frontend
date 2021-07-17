import './SearchForm.css';

import React from 'react';

function SearchForm({ onSearchMovies, isSavedMoviesPage, pastInputs }) {

  const [ phrase, setPhrase ] = React.useState('');
  const [ isShort, setIsShort ] = React.useState(false);
  const [ error, setError ] = React.useState('');

  function handleChangePhrase(e) {
    setPhrase(e.target.value);
    setError('');
  }

  function handleChangeSwitcher(e) {
    setIsShort(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (phrase || isSavedMoviesPage) {
      onSearchMovies({ phrase, isShort });
    } else {
      setError('Нужно ввести ключевое слово');
    }

  }

  React.useEffect(() => {
    if (isSavedMoviesPage || phrase) {
      onSearchMovies({ phrase, isShort });
    }
  },[isShort])

  React.useEffect(() => {
    if (pastInputs) {
      onSearchMovies(pastInputs);
      setPhrase(pastInputs.phrase);
      setIsShort(pastInputs.isShort);
    }
  },[])

  return (
    <form className="search-form" name="search-form">

      <input
        className="search-form__input"
        placeholder="Фильм"
        onChange={handleChangePhrase}
        value={ phrase }
        type="text"
        name="phrase"
        required />
      <span  className="search-form__phrase-error">{error}</span>

      <button className="search-form__button" type="submit" onClick={handleSubmit} />

      <label className="search-form__switcher switcher">
        <input
          className="switcher__checkbox"
          type="checkbox"
          onChange={handleChangeSwitcher}
          checked={ isShort }
          name="isShort"
          disabled={(!isSavedMoviesPage && !phrase) ? true : false}
        />
        <span  className="switcher__custom-checkbox"></span>
        <span className="switcher__text">Короткометражки</span>
      </label>

      <div  className="search-form__border"></div>

    </form>
  );
}

export default SearchForm;