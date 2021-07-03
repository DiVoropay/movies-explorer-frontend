import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(true); // temp

  return (
    <div className="App">

      <CurrentUserContext.Provider value={currentUser}>

        <Switch>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/">

            <Header />

            <Switch>

              <ProtectedRoute path="/movies" loggedIn={loggedIn}>
                <Movies />
              </ProtectedRoute>

              <ProtectedRoute path="/saved-movies"  loggedIn={loggedIn}>
                <SavedMovies />
              </ProtectedRoute>

              <ProtectedRoute path="/profile"  loggedIn={loggedIn}>
                <Profile isNestedForm={true} />
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
