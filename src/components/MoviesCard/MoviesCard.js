import './MoviesCard.css';

function MoviesCard({
    movieСard,
    isSavedMoviesPage,
    onSavingMovies,
    onUnSavingMovies
  })
  {
  const name = movieСard.nameRU;
  const duration = `${Math.round(movieСard.duration / 60)}:${('00' + movieСard.duration % 60).slice(-2,4)}`;
  const imageLink = movieСard.image;
  const trailerLink = movieСard.trailer;

  function handleClickSaveButton() {
    isSavedMoviesPage
      ? onUnSavingMovies(movieСard)
      : movieСard.isSaved ? onUnSavingMovies(movieСard) : onSavingMovies({ ...movieСard, isSaved: undefined, _id: undefined });
  }

  return (
    <article className="movies-card">
      <h2 className="movies-card__title" title={name}>
        {name}
      </h2>
      <p className="movies-card__duration" title={name}>
        {duration}
      </p>
      <img className="movies-card__image" src={imageLink} alt={name} />
      <a className="movies-card__trailer" href={trailerLink} rel="noreferrer" target="_blank" title="Перейти к просмотру трейлера">{null}</a>
      <button className={
        `movies-card__button
        ${movieСard.isSaved && !isSavedMoviesPage ? ' movies-card__button_saved' : ''}
        ${!movieСard.isSaved && !isSavedMoviesPage ? ' movies-card__button_unsaved' : ''}
        ${isSavedMoviesPage ? ' movies-card__button_remove' : ''}`
        }
        onClick={handleClickSaveButton} type="button"></button>
    </article>
  );
}

export default MoviesCard;
