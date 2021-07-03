import './Portfolio.css';

import LandingBlock from '../LandingBlock/LandingBlock';

import student from '../../../data/studentData';

function Portfolio({ blockStyle }) {

  return (
    <LandingBlock blockStyle={ blockStyle }>
      <div className="portfolio">

          <h3 className="portfolio__subtitle">
            Портфолио
          </h3>

          <ul className="portfolio__list">
            {student.portfolio.map((link) => (
                <li className="portfolio__list-element" key={`portfolio${link.title}`}>
                  <a className="portfolio__list-link" target="_blank" rel="noreferrer" href={link.href}>
                    <p>{link.title}</p>
                    <p>↗</p>
                  </a>
                </li>
            ))}
          </ul>

      </div>
    </LandingBlock>
  );
}

export default Portfolio;