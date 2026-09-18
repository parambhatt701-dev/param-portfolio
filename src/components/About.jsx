import { profile } from '../data/profile.js';

export default function About() {
  const { about } = profile;

  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container container-narrow">
        <h2 className="section-heading" id="about-heading">
          <span className="section-index" aria-hidden="true">01</span>
          {about.heading}
        </h2>

        <div className="about-body">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'about-lead' : undefined}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
