/**
 * ─────────────────────────────────────────────────────────────────
 *  PROFILE DATA — the ONLY file you need to edit to update the site
 * ─────────────────────────────────────────────────────────────────
 *
 *  How to edit:
 *    1. Change any text between the quotes "" below.
 *    2. Save the file — the dev server updates instantly.
 *    3. For images, drop a file into the `public/` folder and set
 *       the path here, e.g. avatar: "/me.jpg" or use a full URL.
 *    4. For links you don't have yet, keep the "#" placeholder and
 *       fill it in later. Nothing breaks while it's "#".
 *
 *  Entries in `projects` and `buildLog` are plain list items:
 *  copy-paste a block and change the text to add a new card.
 */

export const profile = {
  // ── Identity ────────────────────────────────────────────────────
  name: 'Param Bhavesh Bhatt',
  role: 'Diploma CSE Student',
  // Put a photo in public/ and write "/my-photo.jpg" here, or use a
  // full URL. Empty string "" shows the "PB" monogram placeholder.
  avatar: '',
  // One-line description shown next to your name in the nav/footer.
  tagline: 'Diploma CSE student, vibe coder, and electronics explorer.',

  // ── Hero ────────────────────────────────────────────────────────
  hero: {
    headline: 'I build ideas into real things.',
    // Text under the headline. Supports **bold** spans.
    subtitle:
      'Diploma CSE student, **vibe coder**, and electronics explorer.',
    ctaPrimary: { label: 'View projects', href: '#projects' },
    ctaSecondary: { label: 'Get in touch', href: '#contact' },
  },

  // ── About ───────────────────────────────────────────────────────
  // 2–3 honest sentences. First person, plain language.
  about: {
    heading: 'About me',
    paragraphs: [
      "I'm Param, a first-semester Diploma CSE student. I got into code because I like making things I can actually use — a dashboard that checks my classroom's temperature, a page that shows what I'm learning this week.",
      "I'm at the very start: my fundamentals are HTML, CSS, JavaScript and C, and I fill the gaps by building small real projects instead of waiting until I feel 'ready'. Vibe coding, for me, means shipping something rough, then improving it in public.",
      'Right now I split my time between class, experimenting with Arduino and ESP32 boards, and writing down what I learn in the build log below.',
    ],
  },

  // ── Projects ────────────────────────────────────────────────────
  // status: use exactly "In Progress" or "Live" (drives the badge color)
  projects: [
    {
      title: 'ClassPulse — Smart Classroom Monitor',
      status: 'In Progress',
      year: '2026',
      description:
        'An ESP32-based room monitor that reads temperature, light level and occupancy, and serves a small web dashboard so anyone can check the room conditions from their phone.',
      tags: ['ESP32', 'Arduino C++', 'Web Dashboard', 'Sensors'],
      links: {
        github: '#', // e.g. "https://github.com/yourname/classpulse"
        demo: '#', // e.g. "https://classpulse-demo.example.com"
      },
    },
    {
      title: 'Personal Portfolio',
      status: 'Live',
      year: '2026',
      description:
        'The website you are looking at — built from scratch with React and vanilla CSS, mobile-first, and fully editable from a single data file.',
      tags: ['React', 'Vite', 'CSS'],
      links: {
        github: '#', // e.g. "https://github.com/yourname/portfolio"
        demo: '#', // this site — fill your deployed URL
      },
    },
  ],

  // ── Skills ("Learning in public") ───────────────────────────────
  // level: "Comfortable" | "Learning" | "Just started"
  skills: [
    { name: 'HTML / CSS', level: 'Comfortable', learning: 'Responsive layouts & animations' },
    { name: 'JavaScript', level: 'Learning', learning: 'DOM, fetch & async patterns' },
    { name: 'C / C++', level: 'Learning', learning: 'Pointers & embedded code' },
    { name: 'Git / GitHub', level: 'Comfortable', learning: 'Branching & pull requests' },
    { name: 'Arduino / ESP32', level: 'Just started', learning: 'WiFi, sensors & deep sleep' },
  ],

  // ── Build Log ───────────────────────────────────────────────────
  // date is a plain string — write it however you like.
  // entry is the visible heading; body is 1–2 sentences of detail.
  buildLog: {
    heading: 'Build log',
    entries: [
      {
        date: 'Week 1 · Sept 2026',
        title: 'Learning web development, the build-first way',
        body: 'Skipped the endless tutorials and shipped this portfolio instead. Biggest lesson so far: flexbox makes sense the moment you break a real layout, not a made-up one.',
      },
      {
        date: 'Week 2 · Sept 2026',
        title: 'Set up Hackatime to track my coding time',
        body: 'Connected my editor to Hackatime so every coding session gets logged automatically. Seeing real numbers on my hours is weirdly motivating — and exposing when I just refactor the same file for an hour.',
      },
      {
        date: 'Week 3 · Sept 2026',
        title: 'Planning the ESP32 classroom monitor',
        body: 'Sketching ClassPulse on paper before buying anything: which sensors, where to mount the board, and what the dashboard should show. Waiting on the DHT11, so the dashboard mockup comes first.',
      },
    ],
  },

  // ── Contact ─────────────────────────────────────────────────────
  // Replace '#' with your real links. The email goes after mailto:.
  contact: {
    heading: 'Get in touch',
    blurb:
      'Want to swap notes on ESP32 builds, study hacks, or a project idea? My inbox is open — I reply faster than my grades arrive.',
    email: 'parambhatt701@gmail.com', // e.g. "param.bhatt@gmail.com"
    github: 'https://github.com/parambhatt701-dev', // e.g. "https://github.com/parambhatt"
    linkedin: '#', // e.g. "https://www.linkedin.com/in/param-bhatt"
  },

  // ── Footer ──────────────────────────────────────────────────────
  footer: {
    builtBy: 'Built by Param Bhavesh Bhatt',
    note: 'Diploma CSE · Semester 1 · Learning in public',
  },
};
