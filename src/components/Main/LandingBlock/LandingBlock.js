import './LandingBlock.css';

function LandingBlock({ name, title, children}) {

  return (
    <section className="landing-block" id={name}>
      <h2 className="landing-block__header">
          {title}
      </h2>
      {children}
    </section>

  );
}

export default LandingBlock;