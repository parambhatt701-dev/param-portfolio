const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'build-log', label: 'Build Log' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav({ active }) {
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary">
        <a className="nav-logo" href="#home" aria-label="Back to top — home">
          <span aria-hidden="true">PB</span>
          <span className="visually-hidden">Param Bhavesh Bhatt — home</span>
        </a>

        <ul className="nav-links" role="list">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                className={`nav-link${active === link.id ? ' is-active' : ''}`}
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
