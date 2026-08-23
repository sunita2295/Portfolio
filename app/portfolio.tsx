"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    numeral: "I",
    realm: "AI · CONVERSATION INTELLIGENCE",
    title: "U-Discover",
    intro:
      "A GenAI-powered discovery experience that turns complex conversations into decisive, human-readable intelligence.",
    outcome: "$2.2M",
    outcomeLabel: "enterprise adoption",
    detail: "Lead designer · Uniphore · 2023—2026",
    tone: "ember",
  },
  {
    numeral: "II",
    realm: "B2B · DIGITAL COMMERCE",
    title: "Redington Online",
    intro:
      "Reframing discovery, ordering, and checkout for a partner ecosystem where speed, trust, and scale meet.",
    outcome: "E2E",
    outcomeLabel: "commerce transformation",
    detail: "UX/UI Design Manager · Redington · 2026—Now",
    tone: "steel",
  },
  {
    numeral: "III",
    realm: "AI · WORKFLOW AUTOMATION",
    title: "Automation Systems",
    intro:
      "Reusable workflows across U-Suite, X-Suite, and Model Space designed to make sophisticated AI feel natural.",
    outcome: "60%",
    outcomeLabel: "faster rollout cycles",
    detail: "Product Designer · Uniphore · 2023—2026",
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

  useEffect(() => {
    const move = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const breatheFire = () => {
    setFire(false);
    window.requestAnimationFrame(() => setFire(true));
    window.setTimeout(() => setFire(false), 2800);
  };

  return (
    <main className="site-shell">
      <div className="cursor-aura" aria-hidden="true" />
      <header className="topbar">
        <a className="sigil" href="#top" aria-label="Sunita Rout, home">
          <span>SR</span>
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
        <div className="hero-image" role="img" aria-label="An obsidian dragon overlooking a volcanic citadel" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="embers" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => <i key={index} />)}
        </div>
        <div className="flame" aria-hidden="true">
          <span className="flame-core" />
          <span className="flame-glow" />
          {Array.from({ length: 9 }).map((_, index) => <i key={index} />)}
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Product designer · Bengaluru</p>
          <h1>Sunita<br /><em>Rout</em></h1>
          <p className="hero-deck">
            I turn complex systems into clear experiences—shaping AI, commerce, and enterprise products people trust.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#work">Enter the work <span>↓</span></a>
            <button className="fire-button" onClick={breatheFire} aria-label="Make the dragon breathe fire">
              <span className="fire-dot" /> Awaken the dragon
            </button>
          </div>
        </div>
        <p className="side-note">6+ years · 6 industries · one human-centred practice</p>
        <div className="scroll-mark" aria-hidden="true"><span>Scroll</span><i /></div>
      </section>

      <section className="signal-strip" aria-label="Career highlights">
        <p>Designing for humans <span>✦</span> Building for what comes next</p>
        <div className="signals">
          <div><strong>50%</strong><span>adoption lift</span></div>
          <div><strong>60%</strong><span>faster rollouts</span></div>
          <div><strong>35%</strong><span>retention growth</span></div>
          <div><strong>6+</strong><span>years crafting products</span></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work · forged in complexity</p>
          <h2>Three realms.<br /><em>One design practice.</em></h2>
          <p>Case-study narratives are being shaped. For now, explore the impact, intent, and terrain behind the work.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title} tabIndex={0}>
              <div className="project-number">{project.numeral}</div>
              <div className="project-main">
                <p className="project-realm">{project.realm}</p>
                <h3>{project.title}</h3>
                <p>{project.intro}</p>
                <span className="project-detail">{project.detail}</span>
              </div>
              <div className="project-outcome">
                <strong>{project.outcome}</strong>
                <span>{project.outcomeLabel}</span>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="orbital-mark" aria-hidden="true"><span>✦</span></div>
        <div className="about-kicker"><span>About the practice</span></div>
        <div className="about-copy">
          <p className="pull-quote">“I bring order to complexity, without designing the humanity out of it.”</p>
          <p>
            I’m a product designer working where human needs, business systems, and emerging technology collide. My practice spans research, strategy, interaction, and visual craft—from the first unanswered question to the shipped experience.
          </p>
        </div>
        <div className="principles">
          <div><span>01</span><strong>Find the truth</strong><p>Research the real workflow, not the imagined one.</p></div>
          <div><span>02</span><strong>Make it legible</strong><p>Turn system depth into calm, decisive moments.</p></div>
          <div><span>03</span><strong>Build to endure</strong><p>Create patterns that teams can scale with confidence.</p></div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow">The journey</p>
          <h2>Experience,<br /><em>tempered by range.</em></h2>
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
        <p className="eyebrow">A new chapter</p>
        <h2>Have a complex problem<br />worth <em>taming?</em></h2>
        <p>Let’s create something clear, useful, and built to last.</p>
        <a className="contact-button" href="mailto:rout.sunita2295@gmail.com">Begin a conversation <span>↗</span></a>
        <div className="contact-meta">
          <span>Bengaluru, India</span>
          <a href="https://www.linkedin.com/in/sunita-rout/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://sunita.design" target="_blank" rel="noreferrer">Current portfolio ↗</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Sunita Rout</span>
        <span>Product designer · storyteller · systems thinker</span>
        <a href="#top">Return to the skies ↑</a>
      </footer>
    </main>
  );
}
