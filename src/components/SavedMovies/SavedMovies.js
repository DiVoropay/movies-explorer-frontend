import './SavedMovies.css';

import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import DataNotFound from '../DataNotFound/DataNotFound';

function SavedMovies({
    onSearchMovies,
    isWaitingResponse,
    savedMovies,
    filteredSavedMovies,
    onUnSavingMovies,
    serverError
  }) {

  const [ findError, setFindError ] = React.useState('');

  React.useEffect(() => {
    if (serverError !== '') {
      setFindError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    } else if (!filteredSavedMovies.length) {
      setFindError('Ничего не найдено')
    }

  },[isWaitingResponse]);

  React.useEffect(()=> {
    onSearchMovies({phrase:'', isShort: false});
  },[savedMovies]);

  React.useEffect(()=> {
    setFindError('')
    onSearchMovies({phrase:'', isShort: false});
  },[]);

  return (
    <main className="saved-movies">

      <SearchForm
        onSearchMovies={onSearchMovies}
        isSavedMoviesPage={true}
      />

      {isWaitingResponse && <Preloader /> }
      {filteredSavedMovies.length ?
        <MoviesCardList
          moviesCards={filteredSavedMovies}
          isSavedMoviesPage={true}
          onUnSavingMovies={onUnSavingMovies}
        />
        : <DataNotFound
            message={findError}
        />
      }

    </main>
  );
}

export default SavedMovies;