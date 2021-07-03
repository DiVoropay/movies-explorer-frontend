import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'

import savedMoviesCards from '../../data/savedMoviesCards';

function Movies({ isWaitingResponse }) {

  return (
    <main className="saved-movies">

      <SearchForm />

      {isWaitingResponse
      ?
      <Preloader />
      :
      <MoviesCardList
        moviesCards={savedMoviesCards}
        isSavedMoviesPage={true}
      />
      }

    </main>
  );
}

export default Movies;