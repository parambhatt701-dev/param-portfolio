import { useEffect, useState } from 'react';
import { profile } from './data/profile.js';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import BuildLog from './components/BuildLog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'build-log', 'contact'];

/**
 * Gentle reveal-on-scroll: fades sections/cards in the first time they
 * appear. Kept subtle, and disabled entirely via prefers-reduced-motion.
 */
function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.section-heading, .section-sub, .about-body, .project-card, .skill-card, .timeline-item, .contact-list > li'
    );

    if (!('IntersectionObserver' in window)) return;

    targets.forEach((el) => {
      el.classList.add('reveal');
      // Stagger siblings slightly (cards, timeline items).
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).indexOf(el)
        : 0;
      el.style.transitionDelay = `${Math.min(siblings * 60, 240)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/** Highlight the nav link of the section currently in view. */
function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.01, 0.25] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function App() {
  const active = useActiveSection();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav active={active} />

      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <BuildLog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
