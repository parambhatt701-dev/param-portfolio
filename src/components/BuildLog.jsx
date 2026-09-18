import { profile } from '../data/profile.js';

export default function BuildLog() {
  const { buildLog } = profile;

  return (
    <section className="section" id="build-log" aria-labelledby="buildlog-heading">
      <div className="container container-narrow">
        <h2 className="section-heading" id="buildlog-heading">
          <span className="section-index" aria-hidden="true">04</span>
          {buildLog.heading}
        </h2>
        <p className="section-sub">
          A running diary of what I'm building and breaking, week by week.
        </p>

        <ol className="timeline" role="list">
          {buildLog.entries.map((entry) => (
            <li className="timeline-item" key={entry.title}>
              <div className="timeline-meta">
                <span className="timeline-date">{entry.date}</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{entry.title}</h3>
                <p className="timeline-body">{entry.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
