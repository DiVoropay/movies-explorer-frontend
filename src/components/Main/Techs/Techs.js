import './Techs.css';

import LandingBlock from '../LandingBlock/LandingBlock';

function Techs() {

  return (
    <LandingBlock
      name="techs"
      title="Технологии"
    >
      <div className="techs__description">
          <h3>
            7 технологий
          </h3>
          <p>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JS
            </li>
            <li>
              React
            </li>
            <li>
              Git
            </li>
            <li>
              Express.js
            </li>
            <li>
              MongoDB
            </li>
          </ul>
        </div>
    </LandingBlock>
  );
}

export default Techs;