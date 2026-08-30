import type { Metadata } from "next";
import { DiscoverConceptScreen } from "../case-components";

export const metadata: Metadata = {
  title: "U-Discover Case Study — Sunita Rout",
  description: "How Sunita Rout shaped U-Discover for Farmers Insurance as the January 2025 Los Angeles wildfires created an urgent need for trustworthy conversation intelligence.",
};

const blueprintRows = [
  {
    label: "User intent",
    tone: "plain",
    cells: ["Ask an operations question", "Narrow the wildfire context", "Interrogate the evidence", "Brief agents + act"],
  },
  {
    label: "Experience",
    tone: "front",
    cells: ["Natural-language entry", "Date, location + claim stage", "Answer + evidence trail", "Save, share, revisit"],
  },
  {
    label: "Intelligence",
    tone: "middle",
    cells: ["Detect operational intent", "Build a scoped query plan", "Synthesize grounded insight", "Preserve response context"],
  },
  {
    label: "System",
    tone: "back",
    cells: ["Permissions + corpus", "Retrieve + rank", "Citations + confidence", "Workspace + governance"],
  },
  {
    label: "Measure",
    tone: "measure",
    cells: ["Time to emerging signal", "Refinement rate", "Evidence inspection", "Repeat use + adoption"],
  },
];

export default function UDiscoverCaseStudy() {
  return (
    <main className="case-shell">
      <header className="case-nav">
        <a className="case-brand" href="/" aria-label="Sunita Rout, home">
          <span className="case-mark" aria-hidden="true"><i /><b /></span>
          <span>Sunita Rout</span>
        </a>
        <nav aria-label="Case study navigation">
          <a href="#moment">Moment</a>
          <a href="#problem">Problem</a>
          <a href="#system">System</a>
          <a href="#decisions">Decisions</a>
          <a href="#surface">Surface</a>
          <a href="#outcome">Outcome</a>
        </nav>
        <a className="case-close" href="/">Close ×</a>
      </header>

      <section className="case-hero">
        <div className="case-hero-grid" aria-hidden="true" />
        <div className="case-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="case-hero-copy">
          <p className="case-kicker">U-Discover · Farmers Insurance · Los Angeles wildfires · 2025</p>
          <h1>When wildfire changed the questions overnight, <em>we found the signal.</em></h1>
          <p className="case-lede">U-Discover launched into the January 2025 Los Angeles wildfire response—helping 3,000 Farmers Insurance agents turn fast-moving customer conversations into grounded, traceable insight.</p>
        </div>
        <div className="case-hero-proof">
          <div><strong>$2.2M</strong><span>enterprise adoption secured</span></div>
          <div><strong>3,000</strong><span>Farmers Insurance agents</span></div>
          <div><strong>Lead</strong><span>research → strategy → UX</span></div>
        </div>
        <p className="case-disclosure">Public event context is sourced below. Customer data, research evidence, and proprietary interface details are abstracted.</p>
      </section>

      <section className="case-section wildfire-moment" id="moment">
        <div className="case-section-head split-head">
          <div><p className="case-index">01 · The moment</p><h2>A known disaster.<br /><em>An unknown pattern of need.</em></h2></div>
          <p>The catastrophe was public. The questions emerging inside thousands of customer conversations were not.</p>
        </div>
        <div className="wildfire-timeline">
          <article><span>JAN 07 · 2025</span><strong>Palisades and Eaton fires begin</strong><p>Two destructive fires ignite in Los Angeles County, changing customer needs and claims operations immediately.</p><a href="https://www.fire.ca.gov/incidents/2025/1/7/palisades-fire" target="_blank" rel="noreferrer">CAL FIRE ↗</a></article>
          <i aria-hidden="true" />
          <article><span>JAN 09 · 2025</span><strong>Farmers activates catastrophe response</strong><p>Farmers reports its catastrophe team is helping affected customers and deploying additional claims resources.</p><a href="https://newsroom.farmers.com/2025-01-09-Farmers-Insurance-R-Assisting-Customers-Impacted-by-Southern-California-Wildfires" target="_blank" rel="noreferrer">Farmers newsroom ↗</a></article>
          <i aria-hidden="true" />
          <article><span>JAN 27 · 2025</span><strong>31,210 claims across the event</strong><p>California’s insurance regulator reports tens of thousands of home, business, living-expense, and disaster claims filed.</p><a href="https://www.insurance.ca.gov/0400-news/0100-press-releases/2025/release011-2025.cfm" target="_blank" rel="noreferrer">CA Dept. of Insurance ↗</a></article>
        </div>
        <div className="wildfire-brief"><span>THE PRODUCT QUESTION</span><strong>How might 3,000 agents detect what wildfire-affected customers need now—without waiting for manual analysis?</strong></div>
      </section>

      <section className="case-section case-framing" id="problem">
        <div className="case-section-head">
          <p className="case-index">02 · Find the real problem</p>
          <h2>The pressure was speed.<br /><em>The requirement was trust.</em></h2>
        </div>
        <div className="problem-layout">
          <div className="problem-copy">
            <p>A catastrophe changes contact volume, vocabulary, urgency, and policyholder needs at the same time. Traditional reporting could describe yesterday while agents needed to understand what was changing now.</p>
            <p>The design challenge was not simply to search wildfire calls. It was to help teams frame an operational question, detect an emerging pattern, and verify the conversations behind it before guidance changed.</p>
            <blockquote>“In a crisis, an insight is only useful when it is fast enough to act on—and grounded enough to defend.”</blockquote>
          </div>
          <div className="problem-stack" aria-label="Business problem decomposed into product and experience problems">
            <div className="problem-layer layer-business"><span>Business pressure</span><strong>Support policyholders consistently during a fast-changing catastrophe</strong></div>
            <div className="problem-arrow">↓</div>
            <div className="problem-layer layer-product"><span>Product problem</span><strong>Reveal emerging wildfire needs without waiting for manual analysis</strong></div>
            <div className="problem-arrow">↓</div>
            <div className="problem-layer layer-design"><span>Experience problem</span><strong>Turn an urgent operations question into a traceable, action-ready answer</strong></div>
          </div>
        </div>
      </section>

      <section className="case-section evidence-section">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">03 · Crisis workflow synthesis</p>
            <h2>Four ways insight<br /><em>could arrive too late.</em></h2>
          </div>
          <p>I organized the risk around where a fast-moving operational signal could be delayed, distorted, or disconnected from action.</p>
        </div>
        <div className="evidence-map">
          <div className="evidence-core"><span>CORE TENSION</span><strong>During catastrophe, insight has an expiry time.</strong></div>
          <article><span>01</span><h3>Demand moved first</h3><p>Conversation needs changed faster than scheduled reporting.</p></article>
          <article><span>02</span><h3>Language kept shifting</h3><p>Customers described loss, smoke, evacuation, and expenses differently.</p></article>
          <article><span>03</span><h3>False certainty carried risk</h3><p>A fluent answer without evidence could misdirect frontline guidance.</p></article>
          <article><span>04</span><h3>Insight needed an owner</h3><p>A pattern mattered only if an operations team could act on it.</p></article>
        </div>
      </section>

      <section className="case-section system-section" id="system">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">04 · System architecture</p>
            <h2>From wildfire question<br /><em>to operational evidence.</em></h2>
          </div>
          <p>The interface coordinated operational intent, catastrophe context, model behavior, customer conversations, and an evidence trail.</p>
        </div>
        <div className="system-map" aria-label="U-Discover conversation to insight system map">
          <div className="system-node node-user"><span>01 · INTENT</span><strong>Wildfire operations question</strong><small>What must the response team understand?</small></div>
          <div className="system-link"><i /><span>clarify</span></div>
          <div className="system-node"><span>02 · PLAN</span><strong>Catastrophe scope</strong><small>Date, location, topic, claim stage</small></div>
          <div className="system-link"><i /><span>retrieve</span></div>
          <div className="system-node"><span>03 · GROUND</span><strong>Conversation evidence</strong><small>Ranked wildfire calls + emerging themes</small></div>
          <div className="system-link"><i /><span>synthesize</span></div>
          <div className="system-node node-answer"><span>04 · EXPLAIN</span><strong>Actionable signal</strong><small>Theme, trend, confidence, citations</small></div>
          <div className="system-foundation">
            <span>Enterprise foundation</span>
            <div>Permissions</div><div>Governance</div><div>Context</div><div>Auditability</div>
          </div>
        </div>
      </section>

      <section className="case-section blueprint-section">
        <div className="case-section-head">
          <p className="case-index">05 · Response blueprint</p>
          <h2>One urgent question.<br /><em>Five coordinated layers.</em></h2>
        </div>
        <div className="blueprint-wrap">
          <div className="blueprint" role="table" aria-label="U-Discover service blueprint">
            <div className="blueprint-header" role="row">
              <span role="columnheader">Layer</span><span role="columnheader">Ask</span><span role="columnheader">Refine</span><span role="columnheader">Verify</span><span role="columnheader">Act</span>
            </div>
            {blueprintRows.map((row) => (
              <div className={`blueprint-row ${row.tone}`} role="row" key={row.label}>
                <strong role="rowheader">{row.label}</strong>
                {row.cells.map((cell) => <span role="cell" key={cell}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
        <div className="blueprint-note"><span>Design leverage</span><p>The blueprint made the response chain explicit: what agents asked, what the model returned, how evidence was verified, and who could turn the signal into guidance.</p></div>
      </section>

      <section className="case-section decision-section" id="decisions">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">06 · Product decisions</p>
            <h2>Trust was designed<br /><em>into the interaction.</em></h2>
          </div>
          <p>Three experience decisions made catastrophe-speed insight understandable, inspectable, and safe to act on.</p>
        </div>
        <div className="decision-grid">
          <article className="decision-card">
            <div className="question-ladder" aria-hidden="true"><span>Broad question</span><i /><span>Clarified scope</span><i /><strong>Answerable intent</strong></div>
            <p className="decision-number">01 · BEFORE GENERATION</p>
            <h3>Clarify before answering</h3>
            <p>Make date, location, claim stage, and topic visible—rather than letting the model silently guess.</p>
          </article>
          <article className="decision-card">
            <div className="evidence-drawer" aria-hidden="true"><b>Answer</b><span /><span /><div><i>01</i><i>02</i><i>03</i></div></div>
            <p className="decision-number">02 · INSIDE THE ANSWER</p>
            <h3>Keep evidence one move away</h3>
            <p>Pair each conclusion with the conversations and signals that support it.</p>
          </article>
          <article className="decision-card">
            <div className="state-model" aria-hidden="true"><span>Searching</span><span>Reasoning</span><span>Grounded</span><span>Ready</span></div>
            <p className="decision-number">03 · ACROSS THE WAIT</p>
            <h3>Make system state legible</h3>
            <p>Show progress, constraints, and confidence so waiting never feels like uncertainty.</p>
          </article>
        </div>
      </section>

      <section className="case-section product-surface" id="surface">
        <div className="case-section-head split-head">
          <div><p className="case-index">07 · Product surface</p><h2>Wildfire response,<br /><em>made interrogable.</em></h2></div>
          <p>The concept shows an operations team asking what drives repeat wildfire contact, seeing an emerging theme, and opening the conversations behind it.</p>
        </div>
        <DiscoverConceptScreen />
      </section>

      <section className="case-section outcome-section" id="outcome">
        <div className="outcome-intro">
          <p className="case-index">08 · Outcome</p>
          <h2>Trust was proven<br /><em>when the stakes were real.</em></h2>
          <p>The strongest validation was enterprise commitment to a product that made fast-moving customer insight understandable enough to use during a nationally recognized catastrophe response.</p>
        </div>
        <div className="outcome-ledger">
          <div><strong>$2.2M</strong><span>enterprise adoption secured</span></div>
          <div><strong>3,000</strong><span>agents at Farmers Insurance</span></div>
          <div><strong>Lead designer</strong><span>from discovery through experience definition</span></div>
        </div>
        <div className="role-strip">
          <span>My contribution</span>
          <p>UX research · problem framing · experience strategy · information architecture · conversational UX · interaction design · cross-functional alignment</p>
        </div>
      </section>

      <section className="case-next">
        <p>A known disaster made the product problem instantly legible: find the signal before the need changes again.</p>
        <a href="/#work">Return to selected work <span>↗</span></a>
      </section>
    </main>
  );
}
