import { profile } from '../data/profile.js';

/** Renders "text with **bold** parts" without dangerouslySetInnerHTML. */
function renderSubtitle(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith('**') ? (
      <strong key={i}>{chunk.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{chunk}</span>
    )
  );
}

export default function Hero() {
  const { hero, name, role, avatar } = profile;

  return (
    <section className="hero section" id="home" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="dot" aria-hidden="true" />
            {role} · Semester 1 · 2026
          </p>
          <h1 id="hero-heading" className="hero-headline">
            {hero.headline}
          </h1>
          <p className="hero-subtitle">{renderSubtitle(hero.subtitle)}</p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </a>
            <a className="btn btn-ghost" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden={avatar ? undefined : 'true'}>
          {avatar ? (
            <img
              className="avatar"
              src={avatar}
              alt={`Portrait of ${name}`}
              width="256"
              height="256"
            />
          ) : (
            <div className="avatar avatar-placeholder" role="img" aria-label={`${name} — profile photo placeholder`}>
              <span>PB</span>
            </div>
          )}
          <p className="hero-name" aria-hidden={avatar ? undefined : 'true'}>
            {name}
          </p>
        </div>
      </div>
    </section>
  );
}
