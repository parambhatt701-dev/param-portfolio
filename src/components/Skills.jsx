import { profile } from '../data/profile.js';

export default function Skills() {
  const { skills } = profile;

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 className="section-heading" id="skills-heading">
          <span className="section-index" aria-hidden="true">03</span>
          Learning in public
        </h2>
        <p className="section-sub">
          No fake percentages — just what I can do today and what I'm working on
          next.
        </p>

        <ul className="skill-grid" role="list">
          {skills.map((skill) => (
            <li className="card skill-card" key={skill.name}>
              <div className="skill-row">
                <h3 className="skill-name">{skill.name}</h3>
                <span className={`skill-level level-${skill.level.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
                  {skill.level}
                </span>
              </div>
              <p className="skill-learning">
                <span className="learning-label">currently learning</span>
                {skill.learning}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
