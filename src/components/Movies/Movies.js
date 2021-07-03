import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'

import moviesCards from '../../data/moviesCards';

function Movies({ isWaitingResponse }) {

  return (
    <main className="movies">

      <SearchForm />
      {isWaitingResponse ?

      <Preloader />
      :
      <MoviesCardList
        moviesCards={moviesCards}
        isSavedMoviesPage={false}
      />
      }


    </main>
  );
}

export default Movies;