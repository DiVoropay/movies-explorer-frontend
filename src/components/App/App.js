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
import PageNoteFound from '../PageNoteFound/PageNoteFound';

import mainApi from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false); // temp
  const [currentToken, setCurrentToken] = React.useState('');

  const history = useHistory();

  function handleRegisterUser(data) {
    const password = data.password;

    mainApi.register(data)
      .then((data) => {
        const email = data.email;
        handleLoginUser({ password, email })
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      });
  }

  function handleLoginUser(data) {
    mainApi.login(data)
      .then((data) => {
        localStorage.setItem('token', data.token);
        loginByToken();
      })
      .catch((err) => {
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

  const handleUpdateUser = (data) => {
    mainApi.setUserInfo(data, currentToken)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => { console.log(`Ошибка: ${err}`) });
  }

  function handleExitUser() {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  React.useEffect(() => {
    loginByToken();
  }, []);

  return (
    <div className="App">

      <CurrentUserContext.Provider value={currentUser}>

        <Switch>

          <Route path="/signup">
            {loggedIn ? <Redirect to="/movies" /> :
              <Register
                onRegisterUser={handleRegisterUser}
              />
            }
          </Route>

          <Route path="/signin">
            {loggedIn ? <Redirect to="/movies" /> :
              <Login
                onLoginUser={handleLoginUser}
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
                <Movies />
              </ProtectedRoute>

              <ProtectedRoute path="/saved-movies"  loggedIn={loggedIn}>
                <SavedMovies />
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
                <PageNoteFound />
              </Route>

            </Switch>

            <Footer />

          </Route>

          <Route path="*">
            <PageNoteFound />
          </Route>

        </Switch>

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
