import './App.css';

import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [ currentUser, setCurrentUser ] = React.useState({});
  const [ loggedIn, setLoggedIn ] = React.useState(false);
  const [ currentToken, setCurrentToken ] = React.useState('');
  const [ moviesList, setMoviesList ] = React.useState({});
  const [ filteredMovies, setFilteredMovies ] = React.useState({});
  const [ savedMovies, setSavedMovies ] = React.useState({});
  const [ filteredSavedMovies, setFilteredSavedMovies ] = React.useState({});
  const [ isWaitingResponse, setIsWaitingResponse ] = React.useState(false);
  const [ serverError, setServerError ] = React.useState('');

  const history = useHistory();

  function handleRegisterUser(data) {
    const password = data.password;

    setServerError('');

    mainApi.register(data)
      .then((data) => {
        const email = data.email;
        handleLoginUser({ password, email })
      })
      .catch((err) => {
        setServerError(err);
        console.log(`Ошибка: ${err}`)
      });
  }

  function handleLoginUser(data) {
    setServerError('');
    mainApi.login(data)
      .then((data) => {
        localStorage.setItem('token', data.token);
        loginByToken();
      })
      .catch((err) => {
        setServerError(err);
        console.log(`Ошибка: ${err}`)
      });
  }

  function loginByToken() {
    const token = localStorage.getItem('token');
    if (token) {
      handleAuthorizationUser(token);
    }
    setCurrentToken(token);
  }

  function handleAuthorizationUser(token) {
    mainApi.authorization(token)
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
        history.push('./movies');
      })
      .catch((err) => { console.log(`Ошибка: ${err}`) });
  }

  function handleUpdateUser (data) {
    mainApi.setUserInfo(data, currentToken)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => { console.log(`Ошибка: ${err}`) });
  }

  function handleExitUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('movies-list');
    setLoggedIn(false);
  }

  function getMoviesList() {

    return moviesApi.getMovies()
      .then((data) => {
        const movies = data.map((item) => {
          return {
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: `${moviesApi.baseUrl}${item.image.url}`,
            trailer: item.trailerLink,
            nameRU: item.nameRU,
            nameEN: item.nameEN,
            thumbnail: `${moviesApi.baseUrl}${item.image.formats.thumbnail.url}`,
            movieId: item.id,
            }
        })
        setMoviesList(movies);
        localStorage.setItem('movies-list', JSON.stringify(movies));
        return movies;
      })
      .catch((err) => {
        setServerError(err);
        console.log(`Ошибка: ${err}`)
      });
  }

  function handleSearchMovies(inputs) {
    setIsWaitingResponse(true);

    if (JSON.stringify(moviesList) !== '{}') {
      setFilteredMovies(expandMoviesList(filterMovies(inputs, moviesList)));
    } else {
      getMoviesList()
        .then((movies) => {setFilteredMovies(expandMoviesList(filterMovies(inputs, movies)))})
    }
  }

  function handleSearchSavedMovies(inputs) {
    JSON.stringify(savedMovies) !== '{}'
      ? setFilteredSavedMovies(filterMovies(inputs, savedMovies))
      : getSavedMovies()
          .then((movies) => {setFilteredSavedMovies(filterMovies(inputs, movies))})
  }

  function filterMovies({phrase, isShort}, data) {
    let filteredData = data.filter(item => {
      return item.nameRU.includes(phrase);
    });

    if (isShort) {
      filteredData = filteredData.filter(item => {
        return item.duration <= 40;
      });
    }

    return filteredData;
  }


  function handleSavingMovie(movie) {
    mainApi.addMovies(movie, currentToken)
      .then(() => {
        getSavedMovies();
      })
      .catch((err) => { console.log(`Ошибка: ${err}`) });
  }

  function handleUnSavingMovie(movie) {
    mainApi.removeMovies(movie._id, currentToken)
      .then(() => {
        getSavedMovies();
      })
      .catch((err) => { console.log(`Ошибка: ${err}`) });
  }

  function getSavedMovies() {

    return mainApi.getSavedMovies(currentToken)
      .then((data) => {
        setSavedMovies(data);
        return data;
      })
      .catch((err) => {
        setServerError(err);
        console.log(`Ошибка: ${err}`)
      });
  }

  function expandMoviesList(data) {
    const moviesWithIsSaved = data.map((item) => {
      const savedItem = savedMovies.find(movie => {
        return movie.movieId === item.movieId
      });
      if (savedItem) {
        return { ...item, isSaved: true, _id: savedItem._id }
      } else {
        return { ...item, isSaved: false }
      }
    });
    return moviesWithIsSaved;
  }

  React.useEffect(() => {
    JSON.stringify(filteredMovies) !== '{}' &&
    setFilteredMovies(expandMoviesList(filteredMovies))

  }, [savedMovies]);

  React.useEffect(() => {
    loginByToken();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      getSavedMovies();

      const localMovies = JSON.parse(localStorage.getItem('movies-list'));

      if (localMovies !== null) {
        setMoviesList(localMovies);
      }
    }
  }, [loggedIn]);

  React.useEffect(() => {
    setIsWaitingResponse(false);
  }, [filteredMovies]);

  React.useEffect(() => {
    setServerError('');
  },[isWaitingResponse])

  return (
    <div className="App">

      <CurrentUserContext.Provider value={currentUser}>

        <Switch>

          <Route path="/signup">
            {loggedIn ? <Redirect to="/movies" /> :
              <Register
                onRegisterUser={handleRegisterUser}
                serverError={serverError}
              />
            }
          </Route>

          <Route path="/signin">
            {loggedIn ? <Redirect to="/movies" /> :
              <Login
                onLoginUser={handleLoginUser}
                serverError={serverError}
              />
            }
          </Route>

          <Route path="/">

            <Header
              pathname={history.location.pathname}
              loggedIn={loggedIn}
            />

            <Switch>

              <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                <Movies
                  filteredMovies={filteredMovies}
                  isWaitingResponse={isWaitingResponse}
                  onSearchMovies={handleSearchMovies}
                  onSavingMovies={handleSavingMovie}
                  onUnSavingMovies={handleUnSavingMovie}
                  serverError={serverError}
                />
              </ProtectedRoute>

              <ProtectedRoute path="/saved-movies"  loggedIn={loggedIn}>
                <SavedMovies
                  savedMovies={filteredSavedMovies}
                  onUnSavingMovies={handleUnSavingMovie}
                  onSearchMovies={handleSearchSavedMovies}
                />
              </ProtectedRoute>

              <ProtectedRoute path="/profile"  loggedIn={loggedIn}>
                <Profile
                  isNestedForm={true}
                  onSignOut={handleExitUser}
                  onUpdateUser={handleUpdateUser}
                />
              </ProtectedRoute>

              <Route exact path="/">
                <Main />
              </Route>

              <Route path="*">
                <PageNotFound />
              </Route>

            </Switch>

            <Footer />

          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>

        </Switch>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
