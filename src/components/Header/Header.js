import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../images/logo.svg';

function Header() {

  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" />
        <nav className="navigation">
          <Link className="navigation__link" to="/sign-up">Регистрация</Link>
          <Link className="navigation__link" to="/sign-in">Войти</Link>        
        </nav>      
      </header>
  );
}

export default Header;