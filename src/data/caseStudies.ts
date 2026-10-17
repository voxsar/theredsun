export interface Shot {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudy {
  name: string;
  client: string;
  summary: string;
  problem: string;
  built: string[];
  stack: string[];
  link?: { label: string; href: string };
  shots?: Shot[];
}

export const caseStudies: CaseStudy[] = [
  {
    name: 'Jingles Inventory & POS',
    client: 'Jingles — multi-location retail',
    summary:
      'A local-first point of sale that keeps ringing up sales when the internet drops, paired with the inventory system it syncs back into.',
    problem:
      'Counter staff could not afford to stop selling during an outage, and head office still needed one trustworthy stock figure across locations.',
    built: [
      'Cashier terminal with cart, held sales, refunds, shifts, cash drawer and fully rebindable keyboard shortcuts',
      'Offline SQLite store on each till with event-based sync back to the inventory system of record',
      'Goods-received workflows, invoice OCR, layered pricing, vouchers and an append-only event ledger',
      'Android barcode scanner app and an Electron desktop shell with its own update channel',
    ],
    stack: ['TypeScript', 'React', 'Express', 'Prisma', 'SQLite', 'Electron', 'Typesense', 'Kotlin/Android'],
  },
  {
    name: 'Quick Sign',
    client: 'Nanaska Edge',
    summary:
      'Single sign-on launchpad for a fleet of 17 Edge instances spread across three servers.',
    problem:
      'Operators were juggling separate logins per instance, and directory names did not match the branches actually deployed, so nobody could tell what was running where.',
    built: [
      'One operator login that opens a grid of every instance, each card showing its name, branch and deployed commit',
      'One-click entry into each instance admin panel plus a menu for the secondary panels',
      'Student picker that chains through each app’s own impersonation handoff',
    ],
    stack: ['Laravel', 'Filament', 'Netlify Functions', 'Node'],
  },
  {
    name: 'Capture Card Analysis',
    client: 'Nanaska',
    summary:
      'Turns scanned, handwritten student capture cards into database rows and an Excel export.',
    problem:
      'Hundreds of handwritten cards were being retyped by hand, which was slow and lossy.',
    built: [
      'PDF pages rendered to images and read by a vision model against a strict JSON schema',
      'Seven structured fields per card, stored and reviewable rather than trusted blindly',
      'Excel export for the teams that work downstream of the data',
    ],
    stack: ['Laravel', 'PHP', 'OpenAI vision', 'MySQL'],
    link: { label: 'capture.analysis.nanaska.com', href: 'https://capture.analysis.nanaska.com' },
  },
  {
    name: 'Personalized Edge',
    client: 'Nanaska',
    summary:
      'A free knowledge quiz built on the CGMA Professional Qualification syllabus, used as a top-of-funnel tool.',
    problem:
      'The brand needed a reason for prospective students to identify themselves, and something genuinely useful to hand back in return.',
    built: [
      'Nine scenario questions drawn from the papers at the level the visitor selects',
      'Edge profile and pillar breakdown, with answer review and a study plan unlocked on registration',
      'Generated LinkedIn preview images so results are worth sharing',
    ],
    stack: ['Vue 3', 'Vite', 'Express 5', 'MySQL', 'sharp'],
    link: { label: 'quiz.nanaska.com', href: 'https://quiz.nanaska.com' },
  },
  {
    name: 'Tendra — Engineer to Business',
    client: 'Nanaska exhibition programme',
    summary:
      'Four independently runnable exhibition experiences teaching costing decisions, in one application.',
    problem:
      'Business concepts like contribution per limiting factor and sunk cost do not land in a lecture. They land when a decision costs you something.',
    built: [
      'The Workshop — 45 seconds of orders arriving faster than they can be judged against fixed capacity',
      'Three Seasons — one customer, three seasons, and a bank balance that carries your refit decision forward',
      'A Sound Design — six briefs, then one business recommendation assessed against the actual choices made',
      'Full-page navigation per game, so one game’s global styles and timers never reach another',
    ],
    stack: ['React', 'TypeScript', 'Vite'],
  },
  {
    name: 'Panthera Styles',
    client: 'Panthera Styles — ecommerce',
    summary:
      'Shopify storefront work backed by custom services for the parts Shopify does not cover.',
    problem:
      'Order fulfilment and packing needed workflows the platform does not provide, without putting the live store at risk while they were built.',
    built: [
      'Dawn-based theme development run against a mirrored test store before anything touches live',
      'Custom order printer and packing service behind the storefront',
      'Campaign sign-up flows and data exports for the live customer base',
    ],
    stack: ['Shopify', 'Liquid', 'Node', 'Playwright'],
  },
  {
    name: 'Swisska Sweet Hub',
    client: 'Swisska',
    summary:
      'Three complete homepage designs shipped side by side so the client could choose against the real thing.',
    problem:
      'Design directions argued about in the abstract go in circles. Three live routes end the argument.',
    built: [
      'Independent homepage designs served at their own routes from one static build',
      'A build step that assembles the deployable output, published automatically on push',
      'A shared design-system layer so the three options stay recognisably one brand',
    ],
    stack: ['Static site build', 'Node', 'Netlify'],
  },
  {
    name: 'Nanaska Edge learning games',
    client: 'Nanaska Edge',
    summary:
      'A suite of browser-based teaching games — survival ranking, a 3D courtroom, a railway share market, a CEO simulator and an AI interview coach — used across the Edge programme.',
    problem:
      'Business and accounting concepts do not land in a lecture. They land when a decision costs the player something, so each game puts the learner inside the trade-off rather than describing it.',
    built: [
      'Survival Series — nine scenarios where you rank fifteen items alone, then defend your order against the group and the experts',
      'Virtual Court — a navigable 3D courtroom for presenting arguments and questioning evidence, with a legal-speak / plain-English toggle',
      'Railway Millionaires — a hex-map share and route game with a live ledger, income statement, balance sheet and variance report',
      'CEO Game — a ten-week 3D company simulator tracking cash, morale and reputation against the decisions you make',
      'Double Cross — a six-player hidden-role game across five period scenarios',
      'Interview Simulator — a practice interview that follows up on what you actually said and reports back on how it went',
    ],
    stack: ['React', 'TypeScript', 'Three.js', 'Vite', 'Node', 'Laravel'],
    shots: [
      {
        src: '/work/survival-series.png',
        alt: 'Survival Series scenario picker showing nine survival scenarios',
        caption: 'Survival Series — nine scenarios, each a fifteen-item ranking exercise',
      },
      {
        src: '/work/desert-survival.png',
        alt: 'Desert Survival solo round with a timer and fifteen rankable items',
        caption: 'The solo round: rank alone, on the clock, before the group discussion',
      },
      {
        src: '/work/virtual-court.png',
        alt: 'Virtual Court 3D courtroom landing view',
        caption: 'Virtual Court — a navigable courtroom with a career rank that progresses',
      },
      {
        src: '/work/railway-millionaires.png',
        alt: 'Railway Millionaires hex map with railroad treasuries and a share market',
        caption: 'Railway Millionaires — a share market over a hex map, with a full ledger',
      },
      {
        src: '/work/ceo-game.png',
        alt: 'CEO Game 3D boardroom with cash, morale and reputation counters',
        caption: 'CEO Game — ten weeks of decisions against cash, morale and reputation',
      },
      {
        src: '/work/double-cross.png',
        alt: 'Double Cross scenario selection showing five themed scenario cards',
        caption: 'Double Cross — six players, two moles, five period scenarios',
      },
      {
        src: '/work/interview-simulator.png',
        alt: 'Interview Simulator role picker grouped by career path',
        caption: 'Interview Simulator — practice interviews that push back on your answers',
      },
    ],
  },
];
