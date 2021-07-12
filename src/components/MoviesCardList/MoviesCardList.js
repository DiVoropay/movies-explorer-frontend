import './MoviesCardList.css'

import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
    moviesCards,
    isSavedMoviesPage,
    onSavingMovies,
    onUnSavingMovies
  })
  {
  const [ numberOfCards, setNumberOfCards ] = React.useState(12);
  const [ isAllCards, setIsAllCards ] = React.useState(false);

  function detectionInitialNumber() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 960) {
      setNumberOfCards(12)
    };
    if ((windowWidth > 640) && (windowWidth <= 960)) {
      setNumberOfCards(8)
    };
    if (windowWidth <= 640) {
      setNumberOfCards(5)
    };

  }

  function loadAdditionalCards() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 960) {
      setNumberOfCards(numberOfCards + 3);
    };
    if (windowWidth <= 960) {
      setNumberOfCards(numberOfCards + 2);
    };

  }

  function checkIsAllCards() {

    moviesCards.length < numberOfCards
    ?
    setIsAllCards(true)
    :
    setIsAllCards(false)

  }

  React.useEffect(() => {

    checkIsAllCards();

  })

  React.useEffect(() => {

    detectionInitialNumber()

  },[])


  return (
    <section className="movies-card-list">
      <div className="movies-card-list__movies">
        {moviesCards.slice(0, numberOfCards).map((movie) => (
          <MoviesCard
            key={`movieСard${movie.movieId}`}
            movieСard={movie}
            isSavedMoviesPage={isSavedMoviesPage}
            onSavingMovies={onSavingMovies}
            onUnSavingMovies={onUnSavingMovies}
          />
        )
        )
        }
      </div>
      <button className="movies-card-list__more-btn" onClick={loadAdditionalCards} hidden={isAllCards}>Ещё</button>
    </section>
);
}

export default MoviesCardList;
