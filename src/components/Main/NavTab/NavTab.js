import './NavTab.css';

import LandingBlock from '../LandingBlock/LandingBlock';

function NavTab({ links, blockStyle }) {

  return (
    <LandingBlock blockStyle={ blockStyle }>
      <div className="nav-tab">

        <ul className="nav-tab__list">
          {links.map((link) => (
              <li className="nav-tab__element" key={link.title}>
                <a className="nav-tab__link" href={link.href}>{link.title}</a>
              </li>
          ))}
        </ul>

      </div>
    </LandingBlock>
  );
}

export default NavTab;