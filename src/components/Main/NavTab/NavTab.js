import './NavTab.css';

function NavTab({ links }) {

  return (
    <section className="nav-tab">

      <ul>
        {links.map((link) => (
            <li>
              <a className="nav-tab__link" href={link.name}>{link.title}</a>
            </li>
        )
        )
        }
      </ul>

    </section>
  );
}

export default NavTab;