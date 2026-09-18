import { profile } from '../data/profile.js';

export default function Contact() {
  const { contact } = profile;
  const mailto = `mailto:${contact.email}`;

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container container-narrow">
        <h2 className="section-heading" id="contact-heading">
          <span className="section-index" aria-hidden="true">05</span>
          {contact.heading}
        </h2>
        <p className="section-sub">{contact.blurb}</p>

        <ul className="contact-list" role="list">
          <li>
            <a className="contact-card" href={mailto}>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <span className="contact-text">
                <span className="contact-label">Email</span>
                <span className="contact-value">{contact.email}</span>
              </span>
            </a>
          </li>

          <li>
            <a
              className="contact-card"
              href={contact.github}
              {...(contact.github === '#'
                ? { 'aria-disabled': 'true', onClick: (e) => e.preventDefault(), title: 'Add your GitHub URL in src/data/profile.js' }
                : { target: '_blank', rel: 'noreferrer' })}
            >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
              </span>
              <span className="contact-text">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">{contact.github}</span>
              </span>
            </a>
          </li>

          <li>
            <a
              className="contact-card"
              href={contact.linkedin}
              {...(contact.linkedin === '#'
                ? { 'aria-disabled': 'true', onClick: (e) => e.preventDefault(), title: 'Add your LinkedIn URL in src/data/profile.js' }
                : { target: '_blank', rel: 'noreferrer' })}
            >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </span>
              <span className="contact-text">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">Add your profile link</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
