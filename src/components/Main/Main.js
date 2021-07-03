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
        blockStyle="gray"
        links={ [
          { href: "#about-project", title: "О проекте"},
          { href: "#techs", title: "Технологии" },
          { href: "#about-me", title: "Студент" }
        ] }
      >
      </NavTab>

      <AboutProject/>
      <Techs blockStyle="gray" />
      <AboutMe/>
      <Portfolio/>

    </main>
  );
}

export default Main;