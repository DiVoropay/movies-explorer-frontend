import './Footer.css';

const links = [
  { href: "https://praktikum.yandex.ru/", title: "Яндекс.Практикум"},
  { href: "https://github.com/DiVoropay", title: "GitHub" },
  { href: "#", title: "Facebook" }
];

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__description">
          Учебный проект Яндекс.Практикум х BeatFilm.
      </p>

      <div className="footer__nav-menu">

        <p className="footer__copyright">
          &copy;&nbsp;{new Date().getFullYear()}
        </p>

        <ul className="footer__nav-list">
          {links.map((link) => (
              <li className="footer__nav-element" key={`footer${link.title}`}>
                <a className="footer__nav-link" target="_blank" rel="noreferrer" href={link.href}>{link.title}</a>
              </li>
          ))}
        </ul>

      </div>




    </footer>
  );
}

export default Footer;