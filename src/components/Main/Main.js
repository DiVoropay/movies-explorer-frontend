import './Main.css';

import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import AboutMe from './AboutMe/AboutMe';
import NavTab from './NavTab/NavTab';
import Promo from './Promo/Promo';

function Main() {

  return (
    <main className="main">
      <Promo />

      <NavTab
        links={ [
          { name: "about-project", title: "О проекте"},
          { name: "techs", title: "Технологии" },
          { name: "about-me", title: "Студент" }
        ] }
      >
      </NavTab>

      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />

    </main>
  );
}

export default Main;