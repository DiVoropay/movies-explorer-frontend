import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import DataNotFound from '../DataNotFound/DataNotFound';

function Movies({
    filteredMovies,
    onSearchMovies,
    isWaitingResponse,
    onSavingMovies,
    onUnSavingMovies,
    serverError
  })
  {
  return (
    <main className="movies">

      <SearchForm
        onSearchMovies={onSearchMovies}
      />
      {isWaitingResponse && <Preloader /> }
      {filteredMovies.length ?
      <MoviesCardList
        moviesCards={filteredMovies}
        isSavedMoviesPage={false}
        onSavingMovies={onSavingMovies}
        onUnSavingMovies={onUnSavingMovies}
      />
      : <DataNotFound
          message={
            serverError
            ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
            : 'Ничего не найдено'
          }
        />
      }

    </main>
  );
}

export default Movies;