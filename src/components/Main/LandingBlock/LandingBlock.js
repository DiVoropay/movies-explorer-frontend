import './LandingBlock.css';

function LandingBlock({ name, title, blockStyle, children }) {

  return (
    <section
      className={ `landing-block${blockStyle ? ` landing-block_${blockStyle}` : '' }` }
      id={name}
    >
      {title && (
        <div className="landing-block__header">
          <h2 className="landing-block__title">
            {title}
          </h2>
        </div>
      )
      }

      {children}
    </section>

  );
}

export default LandingBlock;