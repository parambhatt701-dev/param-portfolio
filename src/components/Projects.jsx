import { profile } from '../data/profile.js';

/** Maps a status string to a safe CSS modifier, e.g. "In Progress" -> "progress". */
function statusClass(status) {
  return status.toLowerCase().replace(/[^a-z]+/g, '-');
}

export default function Projects() {
  const { projects } = profile;

  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <h2 className="section-heading" id="projects-heading">
          <span className="section-index" aria-hidden="true">02</span>
          Projects
        </h2>
        <p className="section-sub">
          Small builds with a purpose — each one teaches me something I couldn't
          learn from a tutorial.
        </p>

        <ul className="project-grid" role="list">
          {projects.map((project) => {
            const isPlaceholder = project.links.github === '#' && project.links.demo === '#';
            return (
              <li className="card project-card" key={project.title}>
                <div className="card-top">
                  <span className={`badge badge-${statusClass(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="card-year">{project.year}</span>
                </div>

                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                <ul className="tag-list" role="list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="card-links">
                  <a
                    className="card-link"
                    href={project.links.github}
                    {...(isPlaceholder
                      ? {
                          'aria-disabled': 'true',
                          onClick: (e) => e.preventDefault(),
                          title: 'GitHub link — add your repo URL in src/data/profile.js',
                        }
                      : { target: '_blank', rel: 'noreferrer' })}
                  >
                    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                    </svg>
                    GitHub {isPlaceholder && <span className="link-hint">(soon)</span>}
                  </a>

                  <a
                    className="card-link"
                    href={project.links.demo}
                    {...(isPlaceholder
                      ? {
                          'aria-disabled': 'true',
                          onClick: (e) => e.preventDefault(),
                          title: 'Demo link — add your URL in src/data/profile.js',
                        }
                      : { target: '_blank', rel: 'noreferrer' })}
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live demo {isPlaceholder && <span className="link-hint">(soon)</span>}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
