import './AboutProject.css';

import LandingBlock from '../LandingBlock/LandingBlock';

function AboutProject({ blockStyle }) {

  return (
    <LandingBlock
      name="about-project"
      title="О проекте"
      blockStyle={ blockStyle }
    >
      <div className="about-project">
        <div className="about-project__container">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p  className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="about-project__timeline">
            <p className="about-project__timeline-cell about-project__timeline-cell_green">
              1 неделя
            </p>
            <p className="about-project__timeline-cell about-project__timeline-cell_grey">
              4 недели
            </p>
            <p className="about-project__timeline-cell">
              Back-end
            </p>
            <p className="about-project__timeline-cell">
              Front-end
            </p>
        </div>
      </div>
    </LandingBlock>
  );
}

export default AboutProject;