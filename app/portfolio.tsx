"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    numeral: "I",
    realm: "AI · CONVERSATION INTELLIGENCE",
    title: "U-Discover",
    problem:
      "Enterprise teams had thousands of customer conversations, but finding a reliable answer still meant slow, manual analysis.",
    solution:
      "I led discovery and end-to-end UX for a GenAI experience that turned natural-language questions into traceable, decision-ready insight.",
    proof: "Adopted by Farmers Insurance across 3,000 agents.",
    outcome: "$2.2M",
    outcomeLabel: "enterprise adoption secured",
    detail: "Lead designer · Uniphore · 2023—2026",
    tone: "ember",
  },
  {
    numeral: "II",
    realm: "B2B · DIGITAL COMMERCE",
    title: "Redington Online",
    problem:
      "Partners move through fragmented discovery, ordering, checkout, and platform journeys in a high-stakes B2B ecosystem.",
    solution:
      "I lead UX strategy across the journey—aligning research, product, engineering, analytics, and AI-assisted commerce into one scalable experience.",
    proof: "Current transformation · outcome measurement in progress.",
    outcome: "4",
    outcomeLabel: "critical journeys connected",
    detail: "UX/UI Design Manager · Redington · 2026—Now",
    tone: "steel",
  },
  {
    numeral: "III",
    realm: "AI · WORKFLOW AUTOMATION",
    title: "Automation Systems",
    problem:
      "AI workflows were being solved as one-offs, slowing releases and creating inconsistency across the product suite.",
    solution:
      "I designed reusable automation patterns across U-Suite, X-Suite, and Model Space—giving teams a system they could configure, ship, and scale.",
    proof: "+35% retention · +37% conversion · 38% lower churn.",
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
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title} tabIndex={0}>
              <div className="project-number">{project.numeral}</div>
              <div className="project-main">
                <p className="project-realm">{project.realm}</p>
                <h3>{project.title}</h3>
                <div className="project-story">
                  <p><span>Problem</span>{project.problem}</p>
                  <p><span>Design move</span>{project.solution}</p>
                </div>
                <p className="project-proof"><span>Proof</span>{project.proof}</p>
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
        <div className="about-kicker"><span>How I create leverage</span></div>
        <div className="about-copy">
          <p className="pull-quote">I design the system behind the screen—then make the screen feel obvious.</p>
          <p className="about-intro">
            My edge is range: research to strategy, information architecture to interaction, service blueprints to design systems. I work across users, product, engineering, analytics, and business to find the root constraint, shape a testable direction, and build patterns teams can scale.
          </p>
          <aside className="dragon-fact">
            <div>
              <span>Fun fact · Why the dragons?</span>
              <p>No elaborate design metaphor—I’m simply a dragon fan. House of the Dragon inspired this visual world; the product thinking is entirely mine.</p>
            </div>
            <div className="ai-credit">
              <span>Built from scratch · Directed with AI</span>
              <p>I conceived the visual world, designed the system, and shaped every interaction—using AI as a creative and technical collaborator to take the portfolio from blank canvas to live experience.</p>
            </div>
          </aside>
        </div>
        <div className="principles">
          <div><span>01 · RESEARCH</span><strong>Diagnose the constraint</strong><p>Use field research, data, journey mapping, and testing to find the failure behind the symptom.</p></div>
          <div><span>02 · STRATEGY</span><strong>Design the whole system</strong><p>Connect user needs, business rules, information architecture, and interaction into one coherent model.</p></div>
          <div><span>03 · DELIVERY</span><strong>Prove what moved</strong><p>Ship reusable patterns, measure behavior, and turn design quality into adoption, speed, and growth.</p></div>
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
        <h2>Bring me the product problem<br />hiding inside the <em>business problem.</em></h2>
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
