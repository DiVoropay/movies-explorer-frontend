import './Header.css';
import logo from '../../images/logo.svg';

import { Link, useHistory  } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header() {
  const history = useHistory();
  const location = history.location.pathname;

  return (
    <header className={`header ${ location === '/' ? ' header__main' : ''}`}>
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>

        <Navigation />
    </header>
  );
}

export default Header;