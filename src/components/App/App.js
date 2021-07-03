import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

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

  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <CurrentUserContext.Provider value={currentUser}>

          <Route path="/">
            <Header />

            <Switch>
              <Route path="/movies">
                <Movies />
              </Route>

              <Route path="/saved-movies">
                <SavedMovies />
              </Route>

              <Route path="/profile">
                <Profile isNestedForm={true} />
              </Route>

              <Route path="/">
                <Main />
              </Route>
            </Switch>

            <Footer />
          </Route>

          <Route path="*">
            <PageNoteFound />
          </Route>

        </CurrentUserContext.Provider>


      </Switch>

    </div>
  );
}

export default App;
