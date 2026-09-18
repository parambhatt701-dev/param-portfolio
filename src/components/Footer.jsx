import { profile } from '../data/profile.js';

export default function Footer() {
  const { footer } = profile;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-built">{footer.builtBy}</p>
        <p className="footer-note">{footer.note}</p>
      </div>
    </footer>
  );
}
