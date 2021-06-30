import './MoviesCardList.css'

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ moviesCards, isSavedMoviesPage }) {

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__movies">
        {moviesCards.slice(0, 12).map((movie) => (
          <MoviesCard
            key={`movieСards${movie.id}`}
            movieСard={movie}
            isSavedMoviesPage={isSavedMoviesPage}
          />
        )
        )
        }
      </div>
      <button className="movies-card-list__more-btn">Ещё</button>
    </section>
);
}

export default MoviesCardList;
