import './AboutMe.css';

import LandingBlock from '../LandingBlock/LandingBlock';

import student from '../../../data/studentData';

function AboutMe({ blockStyle }) {

  return (
    <LandingBlock
      name="about-me"
      title="Студент"
      blockStyle={blockStyle}
    >
      <div className="about-me">
        <h3 className="about-me__name">
          {student.name}
        </h3>
        <p className="about-me__info">
          {student.info}
        </p>
        <p className="about-me__description">
          {student.description}
        </p>
        <img className="about-me__photo" src={student.photo} alt="Студент" />
        <ul className="about-me__social">
          {student.social.map((link) => (
              <li key={`student${link.title}`}>
                <a className="about-me__social-link" target="_blank" rel="noreferrer" href={link.href}>{link.title}</a>
              </li>
          ))}
        </ul>
      </div>
    </LandingBlock>
  );
}

export default AboutMe;