import './Header.css';
import logo from '../../images/logo.svg';

import Navigation from '../Navigation/Navigation';

function Header() {

  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" />
        <Navigation />
      </header>
  );
}

export default Header;