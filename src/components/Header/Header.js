import './Header.css';
import logo from '../../images/logo.svg';

import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header({ pathname, loggedIn }) {

  return (
    <header className={`header ${ pathname === '/' ? ' header__main' : ''}`}>
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>

        <Navigation
          loggedIn={loggedIn}
        />
    </header>
  );
}

export default Header;