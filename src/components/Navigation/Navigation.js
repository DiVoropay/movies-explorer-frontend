import { Link, NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {

  return (
    <nav className="navigation">
      <NavLink className="navigation__link" to="/movies">Фильмы</NavLink>
      <NavLink className="navigation__link" to="/saved-movies">Сохранённые фильмы</NavLink>
      <NavLink className="navigation__link" to="/profile">Аккаунт</NavLink>
      <Link className="navigation__link" to="/signup">Регистрация</Link>
      <Link className="navigation__link" to="/signin">Войти</Link>
    </nav>
  );
}

export default Navigation;