import './AboutMe.css';

import LandingBlock from '../LandingBlock/LandingBlock';

function AboutMe() {

  return (
    <LandingBlock
      name="about-me"
      title="Студент"
    >
      <div className="about-me__description">

        <div>
          <h3>
            Дмитрий
          </h3>
          <p>
            Фронтенд-разработчик, 35 лет
          </p>
          <p>
            Я родился и живу в Таганроге, закончил физико-математический факультет педагогического института.
          </p>
        </div>


      </div>
    </LandingBlock>
  );
}

export default AboutMe;