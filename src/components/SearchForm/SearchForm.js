import './SearchForm.css';

function SearchForm() {

  return (
    <form className="search-form" name="search-form">

      <input className="search-form__input"
        placeholder="Фильм"
      />

      <button className="search-form__button" type="submit" />

      <label className="search-form__switcher switcher">
        <input className="switcher__checkbox" type="checkbox" />
        <span  className="switcher__custom-checkbox"></span>
        <span className="switcher__text">Короткометражки</span>
      </label>

      <div  className="search-form__border"></div>

    </form>
  );
}

export default SearchForm;