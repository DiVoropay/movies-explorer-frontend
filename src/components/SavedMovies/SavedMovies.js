import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import React from 'react';

function Movies({ onSearchMovies, isWaitingResponse, savedMovies, onUnSavingMovies }) {

  React.useEffect(()=> {
    onSearchMovies({phrase:'', isShort: false});
  },[]);

  return (
    <main className="saved-movies">

      <SearchForm
        onSearchMovies={onSearchMovies}
        isSavedMoviesPage={true}
      />

      {isWaitingResponse && <Preloader /> }
      {savedMovies.length ?
        <MoviesCardList
          moviesCards={savedMovies}
          isSavedMoviesPage={true}
          onUnSavingMovies={onUnSavingMovies}
        />
        : null
      }

    </main>
  );
}

export default Movies;