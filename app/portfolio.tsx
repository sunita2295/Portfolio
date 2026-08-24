"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    numeral: "I",
    realm: "AI · CONVERSATION INTELLIGENCE",
    title: "U-Discover",
    problem: "Thousands of conversations. No fast path to a trusted answer.",
    solution: "Led a GenAI discovery experience from research to release.",
    proof: "Farmers Insurance · 3,000 agents",
    outcome: "$2.2M",
    outcomeLabel: "enterprise adoption secured",
    tone: "ember",
    href: "/work/u-discover",
  },
  {
    numeral: "II",
    realm: "B2B · DIGITAL COMMERCE",
    title: "Redington Online",
    problem: "Four disconnected partner journeys across a high-stakes B2B platform.",
    solution: "Leading one research-led system from discovery through checkout.",
    proof: "Transformation in progress",
    outcome: "4",
    outcomeLabel: "critical journeys connected",
    tone: "steel",
  },
  {
    numeral: "III",
    realm: "AI · WORKFLOW AUTOMATION",
    title: "Automation Systems",
    problem: "One-off AI workflows slowed every release.",
    solution: "Built reusable patterns across three AI product suites.",
    proof: "+35% retention · +37% conversion · 38% lower churn",
    outcome: "60%",
    outcomeLabel: "faster rollout cycles",
    tone: "ash",
  },
];

const experience = [
  ["Now", "Redington", "UX/UI Designer · Manager Level", "B2B commerce, AI-assisted experiences"],
  ["2023—26", "Uniphore", "Product Designer", "AI, GenAI, conversational intelligence"],
  ["2022—23", "Drishti", "UX Designer", "Video analytics, operator workflows"],
  ["2022", "Riskcovry", "UX/UI Designer", "Insurance journeys, service design"],
  ["2021", "Blowhorn", "UX/UI Designer", "Logistics, WMS, public systems"],
  ["2019—21", "Digit9", "UX Designer", "Enterprise dashboards, monitoring"],
];

export default function Portfolio() {
  const [fire, setFire] = useState(false);
  const [menu, setMenu] = useState(false);
  const fireTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const breatheFire = () => {
    if (fireTimer.current) window.clearTimeout(fireTimer.current);
    setFire(false);
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setFire(true)));
    fireTimer.current = window.setTimeout(() => setFire(false), 3200);
  };

  return (
    <main className="site-shell">
      <div className="cursor-aura" aria-hidden="true" />
      <header className="topbar">
        <a className="sigil" href="#top" aria-label="Sunita Rout, home">
          <svg className="golden-mark" viewBox="0 0 100 100" aria-hidden="true">
            <rect x="4" y="4" width="92" height="92" />
            <path d="M4 27C15 12 31 4 50 4C75.4 4 96 24.6 96 50C96 75.4 75.4 96 50 96" />
            <circle cx="50" cy="62" r="24" />
            <path d="M50 4v92" />
          </svg>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
        <nav className={menu ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenu(false)}>Work</a>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#experience" onClick={() => setMenu(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
        </nav>
        <a className="round-link" href="mailto:rout.sunita2295@gmail.com" aria-label="Email Sunita">
          ↗
        </a>
      </header>

      <section className={`hero ${fire ? "is-breathing" : ""}`} id="top">
        <div className="hero-visual" role="img" aria-label="An obsidian dragon overlooking a volcanic citadel">
          <span className="hero-image hero-image-resting" />
          <span className="hero-image hero-image-fire" aria-hidden="true" />
        </div>
        <div className="hero-vignette" aria-hidden="true" />
        <div className="embers" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => <i key={index} />)}
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Product designer · AI, SaaS &amp; B2B commerce</p>
          <h1>Sunita<br /><em>Rout</em></h1>
          <p className="hero-deck">
            I find where complex products lose people, redesign the system—not just the screen—and prove the difference in adoption, speed, conversion, and retention.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#work">Enter the work <span>↓</span></a>
            <button className="fire-button" onClick={breatheFire} aria-label="Make the dragon breathe fire">
              <span className="fire-dot" /> Awaken the dragon
            </button>
          </div>
        </div>
        <p className="side-note">6+ years · research to strategy · systems to shipped experience</p>
        <div className="scroll-mark" aria-hidden="true"><span>Scroll</span><i /></div>
      </section>

      <section className="signal-strip" aria-label="Career highlights">
        <p><strong>Research-led decisions</strong><span>✦</span><strong>Outcomes over theatre</strong></p>
        <div className="signals">
          <div><strong>$2.2M</strong><span>enterprise adoption</span></div>
          <div><strong>50%</strong><span>higher adoption</span></div>
          <div><strong>60%</strong><span>faster rollouts</span></div>
          <div><strong>38%</strong><span>lower churn</span></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work · evidence included</p>
          <h2>The problem is the brief.<br /><em>The outcome is the proof.</em></h2>
          <p>Three systems made easier to understand, faster to use, and more valuable to the business.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className={`project-card ${project.tone}`} key={project.title} tabIndex={project.href ? -1 : 0}>
              <div className="project-visual" aria-hidden="true">
                <span className={`project-crest crest-${index + 1}`} />
              </div>
              <div className="project-main">
                <p className="project-realm">{project.realm}</p>
                <div className="project-title-row">
                  <span className="project-number">{project.numeral}</span>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-story">
                  <p><span>Problem</span>{project.problem}</p>
                  <p><span>Design move</span>{project.solution}</p>
                </div>
                <p className="project-proof"><span>Proof</span>{project.proof}</p>
              </div>
              <div className="project-outcome">
                <strong>{project.outcome}</strong>
                <span>{project.outcomeLabel}</span>
              </div>
              {project.href && <a className="project-card-link" href={project.href} aria-label={`Read the ${project.title} case study`} />}
              <span className="project-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-kicker"><span>How I create leverage</span></div>
        <div className="about-stage">
          <div className="about-copy">
            <p className="pull-quote">Research the truth.<br />Design the system.<br />Prove the outcome.</p>
            <p className="about-intro">I connect user evidence, product strategy, and scalable interaction patterns—then measure what changed.</p>
          </div>
          <div className="method-orbit" aria-hidden="true">
            <div className="orbit-core"><span>Design</span><strong>Leverage</strong></div>
            <span className="orbit-label orbit-research">Research</span>
            <span className="orbit-label orbit-systems">Systems</span>
            <span className="orbit-label orbit-outcomes">Outcomes</span>
          </div>
          <div className="principles">
            <div><i aria-hidden="true">◉</i><span>01 · RESEARCH</span><strong>Find the constraint</strong></div>
            <div><i aria-hidden="true">◇</i><span>02 · SYSTEMS</span><strong>Make complexity legible</strong></div>
            <div><i aria-hidden="true">↗</i><span>03 · OUTCOMES</span><strong>Prove what moved</strong></div>
          </div>
          <aside className="lore-strip">
            <span>Dragon fan · HOTD-inspired</span>
            <p>Conceived from scratch and built with AI as my creative collaborator—from blank canvas to live experience.</p>
          </aside>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow">Six industries · one repeatable advantage</p>
          <h2>Range built<br /><em>the judgement.</em></h2>
          <p>AI, commerce, video analytics, insurance, logistics, and enterprise tools taught me to separate surface friction from system failure.</p>
        </div>
        <div className="timeline">
          {experience.map(([date, company, role, field], index) => (
            <article className="timeline-row" key={company}>
              <span className="timeline-date">{date}</span>
              <span className="timeline-node"><i>{String(index + 1).padStart(2, "0")}</i></span>
              <div><h3>{company}</h3><p>{role}</p></div>
              <p className="timeline-field">{field}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <p className="eyebrow">What are you trying to move?</p>
        <h2><span>Bring me the business problem.</span><span>I’ll find <em>what the product must solve.</em></span></h2>
        <p>Especially when the workflow is complex, the stakes are high, and “make it simpler” is not enough of a brief.</p>
        <a className="contact-button" href="mailto:rout.sunita2295@gmail.com">Talk through the problem <span>↗</span></a>
        <div className="contact-meta">
          <span>Bengaluru, India</span>
          <a href="https://www.linkedin.com/in/sunita-rout/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://sunita.design" target="_blank" rel="noreferrer">Current portfolio ↗</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Sunita Rout</span>
        <span>Research · strategy · interaction · systems</span>
        <a href="#top">Return to the skies ↑</a>
      </footer>
    </main>
  );
}
