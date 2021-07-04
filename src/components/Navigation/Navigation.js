import { Link, NavLink, Switch, Route } from 'react-router-dom';
import React from 'react';

import './Navigation.css';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function Navigation({ loggedIn }) {

  const [ menuVisibility, setMenuVisibility ] = React.useState(false);

  const handleClickMenuBtn = () => {
    setMenuVisibility(true);
  }

  const handleClickCloseBtn = () => {
    menuVisibility && setMenuVisibility(false);
  }

  return (
    <nav className="navigation">

      <Switch>
        {!loggedIn
          ?
          <Route path="/">
            <Link className="navigation__link" to="/signup">Регистрация</Link>
            <Link className="navigation__link" to="/signin">
            <span className="navigation__login">Войти</span>
            </Link>
          </Route>
          :
          <ProtectedRoute path="/" loggedIn={loggedIn}>
            <div className={`navigation__menu${menuVisibility ? ' navigation__menu_visible' : ''}`}>
              <button className="navigation__close-button" onClick={handleClickCloseBtn} />
              <NavLink className="navigation__navlink navigation__navlink-main" activeClassName="navigation__navlink_active" exact to="/" onClick={handleClickCloseBtn}>Главная</NavLink>
              <NavLink className="navigation__navlink" activeClassName="navigation__navlink_active" to="/movies" onClick={handleClickCloseBtn}>Фильмы</NavLink>
              <NavLink className="navigation__navlink" activeClassName="navigation__navlink_active" to="/saved-movies" onClick={handleClickCloseBtn}>Сохранённые фильмы</NavLink>
              <NavLink className="navigation__navlink" activeClassName="navigation__navlink_active" to="/profile" onClick={handleClickCloseBtn}>
                <span className="navigation__account">Аккаунт</span>
              </NavLink>
            </div>

            <button className="navigation__menu-button" onClick={handleClickMenuBtn} />
          </ProtectedRoute>

        }

      </Switch>


    </nav>
  );
}

export default Navigation;