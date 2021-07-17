import './Movies.css';
import React from 'react';

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
    serverError,
    pastInputs
  }) {

  const [ findError, setFindError ] = React.useState('');

  React.useEffect(() => {
    if (serverError !== '') {
      setFindError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    } else if (!filteredMovies.length && !isWaitingResponse) {
      setFindError('Ничего не найдено')
    }

  },[isWaitingResponse]);

  React.useEffect(() => {
    setFindError('')
  },[]);

  return (
    <main className="movies">

      <SearchForm
        onSearchMovies={onSearchMovies}
        pastInputs={pastInputs}
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
          message={findError}
        />
      }

    </main>
  );
}

export default Movies;