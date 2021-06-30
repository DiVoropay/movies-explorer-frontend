import './MoviesCard.css';

function MoviesCard({ movieСard, isSavedMoviesPage, isSaved }) {

  const name = movieСard.nameRU;
  const duration = `${Math.round(movieСard.duration / 60)}:${('00' + movieСard.duration % 60).slice(-2,4)}`;
  const imageLink = `https://api.nomoreparties.co${movieСard.image.url}`;

  function handleSaveClick() {
    isSaved = !isSaved;
    console.log(isSaved);
  }

  function rondomLike() {
    isSaved = Boolean(Math.round(Math.random()));
  }

  rondomLike();

  return (
    <article className="movies-card">
      <h2 className="movies-card__title" title={name}>
        {name}
      </h2>
      <p className="movies-card__duration" title={name}>
        {duration}
      </p>
      <img className="movies-card__image" src={imageLink} alt={name} />
      <button className={
        `movies-card__button
        ${isSaved && !isSavedMoviesPage ? ' movies-card__button_saved' : ''}
        ${!isSaved && !isSavedMoviesPage ? ' movies-card__button_unsaved' : ''}
        ${isSavedMoviesPage ? ' movies-card__button_remove' : ''}`
        }
        onClick={handleSaveClick} type="button"></button>
    </article>
  );
}

export default MoviesCard;
