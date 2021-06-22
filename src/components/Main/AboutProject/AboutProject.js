import './AboutProject.css';

import LandingBlock from '../LandingBlock/LandingBlock';

function AboutProject() {

  return (
    <LandingBlock
      name="about-project"
      title="О проекте"
    >
      <div className="about-project__description">
        <div>
          <h3>
            Дипломный проект включал 5 этапов
          </h3>
          <p>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3>
            На выполнение диплома ушло 5 недель
          </h3>
          <p>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <table className="about-project__timeline">
        <tr>
          <th>
            1 неделя
          </th>
          <th>
            4 недели
          </th>
        </tr>
        <tr>
          <td>
            Back-end
          </td>
          <td>
            Front-end
          </td>
        </tr>
      </table>
    </LandingBlock>
  );
}

export default AboutProject;