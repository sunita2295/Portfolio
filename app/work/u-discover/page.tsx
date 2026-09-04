import type { Metadata } from "next";
import { DiscoverConceptScreen } from "../case-components";

export const metadata: Metadata = {
  title: "U Discover Case Study | Sunita Rout",
  description: "How Sunita Rout shaped U Discover for Farmers Insurance as the January 2025 Los Angeles wildfires created an urgent need for trustworthy conversation intelligence.",
};

const blueprintRows = [
  {
    label: "Customer voice",
    tone: "plain",
    cells: ["Describe loss in their own words", "Answer essential questions", "Explain the exception", "Confirm the next step"],
  },
  {
    label: "Agent experience",
    tone: "front",
    cells: ["See the live transcript", "Review detected intent", "Focus on what AI cannot resolve", "Confirm action + summary"],
  },
  {
    label: "AI assistance",
    tone: "middle",
    cells: ["Listen + transcribe", "Extract intent, entities + issue", "Automate repetitive capture", "Summarize + recommend"],
  },
  {
    label: "System",
    tone: "back",
    cells: ["Live conversation stream", "Claim + policy context", "Rules, guidance + confidence", "Supervisor signal + audit"],
  },
  {
    label: "Measure",
    tone: "measure",
    cells: ["Intent accuracy", "Agent correction rate", "Questions avoided + AHT", "Emerging issue detection"],
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
          <p className="case-kicker">U Discover · Farmers Insurance · Los Angeles wildfires · 2025</p>
          <h1>While the customer was still speaking, <em>AI found what mattered.</em></h1>
          <p className="case-lede">U Discover launched into the January 2025 Los Angeles wildfire response as a live call intent discovery and agent assist experience, helping 3,000 Farmers Insurance agents automate repetition, detect issues, and focus on the human conversation.</p>
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
          <p>The catastrophe was public. The intent hidden inside each urgent, emotional customer call had to be understood in the moment.</p>
        </div>
        <div className="wildfire-timeline">
          <article><span>JAN 07 · 2025</span><strong>Palisades and Eaton fires begin</strong><p>Two destructive fires ignite in Los Angeles County, changing customer needs and claims operations immediately.</p><a href="https://www.fire.ca.gov/incidents/2025/1/7/palisades-fire" target="_blank" rel="noreferrer">CAL FIRE ↗</a></article>
          <i aria-hidden="true" />
          <article><span>JAN 09 · 2025</span><strong>Farmers activates catastrophe response</strong><p>Farmers reports its catastrophe team is helping affected customers and deploying additional claims resources.</p><a href="https://newsroom.farmers.com/2025-01-09-Farmers-Insurance-R-Assisting-Customers-Impacted-by-Southern-California-Wildfires" target="_blank" rel="noreferrer">Farmers newsroom ↗</a></article>
          <i aria-hidden="true" />
          <article><span>JAN 27 · 2025</span><strong>31,210 claims across the event</strong><p>California’s insurance regulator reports tens of thousands of home, business, living expense, and disaster claims filed.</p><a href="https://www.insurance.ca.gov/0400-news/0100-press-releases/2025/release011-2025.cfm" target="_blank" rel="noreferrer">CA Dept. of Insurance ↗</a></article>
        </div>
        <div className="wildfire-brief"><span>THE PRODUCT QUESTION</span><strong>How might AI understand intent during live wildfire calls, automate repetition, and expose emerging issues to supervisors in real time?</strong></div>
      </section>

      <section className="case-section case-framing" id="problem">
        <div className="case-section-head">
          <p className="case-index">02 · Find the real problem</p>
          <h2>The pressure was speed.<br /><em>The requirement was trust.</em></h2>
        </div>
        <div className="problem-layout">
          <div className="problem-copy">
            <p>A wildfire call rarely begins with a clean label. Customers describe evacuation, smoke, damaged property, temporary housing, documents, payments, and fear in the same conversation. Agents still need to identify the intent, capture essentials, resolve repetitive questions, and remain present.</p>
            <p>The product challenge was to let AI handle the mechanical work while the call was live, then aggregate those detected intents so supervisors could see recurring issues before they became an operational backlog.</p>
            <blockquote>“The AI should remove repetition from the call, not humanity from the response.”</blockquote>
          </div>
          <div className="problem-stack" aria-label="Business problem decomposed into product and experience problems">
            <div className="problem-layer layer-business"><span>Business pressure</span><strong>Scale consistent support across a surge of critical wildfire calls</strong></div>
            <div className="problem-arrow">↓</div>
            <div className="problem-layer layer-product"><span>Product problem</span><strong>Detect intent and automate repetitive work while the customer is still on the call</strong></div>
            <div className="problem-arrow">↓</div>
            <div className="problem-layer layer-design"><span>Experience problem</span><strong>Guide agents without stealing control, and turn every call into a supervisor signal</strong></div>
          </div>
        </div>
      </section>

      <section className="case-section evidence-section">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">03 · Crisis workflow synthesis</p>
            <h2>Four places the call<br /><em>could lose what mattered.</em></h2>
          </div>
          <p>I mapped where agent attention, customer intent, automation, and supervisor awareness broke across the live call workflow.</p>
        </div>
        <div className="evidence-map">
          <div className="evidence-core"><span>CORE TENSION</span><strong>Automate the obvious. Protect the human moment.</strong></div>
          <article><span>01</span><h3>Intent arrived unstructured</h3><p>One emotional account could contain several claims related needs.</p></article>
          <article><span>02</span><h3>Intake consumed attention</h3><p>Obvious, repetitive questions competed with active listening.</p></article>
          <article><span>03</span><h3>AI could overstep</h3><p>Silent automation risked incorrect assumptions and agent distrust.</p></article>
          <article><span>04</span><h3>Patterns stayed call sized</h3><p>Supervisors needed emerging issues across the operation, not one transcript.</p></article>
        </div>
      </section>

      <section className="case-section system-section" id="system">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">04 · System architecture</p>
            <h2>One live call.<br /><em>Two levels of intelligence.</em></h2>
          </div>
          <p>The same detection system assisted the agent inside the conversation and built an aggregate issue picture for the supervisor.</p>
        </div>
        <div className="system-map" aria-label="U Discover live call intent system map">
          <div className="system-node node-user"><span>01 · LISTEN</span><strong>Live customer conversation</strong><small>Speech, urgency, context, changing needs</small></div>
          <div className="system-link"><i /><span>understand</span></div>
          <div className="system-node"><span>02 · DETECT</span><strong>Intent + issue model</strong><small>Entities, claim stage, confidence, missing details</small></div>
          <div className="system-link"><i /><span>assist</span></div>
          <div className="system-node"><span>03 · GUIDE</span><strong>Agent automation</strong><small>Prefill, obvious questions, next best action</small></div>
          <div className="system-link"><i /><span>aggregate</span></div>
          <div className="system-node node-answer"><span>04 · LEARN</span><strong>Supervisor issue pulse</strong><small>Emerging intents, trends, exceptions, evidence</small></div>
          <div className="system-foundation">
            <span>Trust foundation</span>
            <div>Privacy</div><div>Confidence</div><div>Agent control</div><div>Auditability</div>
          </div>
        </div>
      </section>

      <section className="case-section blueprint-section">
        <div className="case-section-head">
          <p className="case-index">05 · Response blueprint</p>
          <h2>One live call.<br /><em>Five coordinated layers.</em></h2>
        </div>
        <div className="blueprint-wrap">
          <div className="blueprint" role="table" aria-label="U Discover service blueprint">
            <div className="blueprint-header" role="row">
              <span role="columnheader">Layer</span><span role="columnheader">Listen</span><span role="columnheader">Detect</span><span role="columnheader">Assist</span><span role="columnheader">Learn</span>
            </div>
            {blueprintRows.map((row) => (
              <div className={`blueprint-row ${row.tone}`} role="row" key={row.label}>
                <strong role="rowheader">{row.label}</strong>
                {row.cells.map((cell) => <span role="cell" key={cell}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
        <div className="blueprint-note"><span>Design leverage</span><p>The blueprint connected what happened inside one call with what supervisors needed across hundreds: automation at the frontline, issue discovery at the operational layer.</p></div>
      </section>

      <section className="case-section decision-section" id="decisions">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">06 · Product decisions</p>
            <h2>Automation stayed<br /><em>under human control.</em></h2>
          </div>
          <p>Three decisions kept AI useful on a critical live call without turning the agent into a passenger.</p>
        </div>
        <div className="decision-grid">
          <article className="decision-card">
            <div className="question-ladder" aria-hidden="true"><span>Customer language</span><i /><span>Detected intent · 91%</span><i /><strong>Agent confirms</strong></div>
            <p className="decision-number">01 · DURING DETECTION</p>
            <h3>Detect, do not hijack</h3>
            <p>Show the inferred intent, confidence, and correction path so the agent always owns the decision.</p>
          </article>
          <article className="decision-card">
            <div className="evidence-drawer" aria-hidden="true"><b>AI captured</b><span /><span /><div><i>✓</i><i>✓</i><i>?</i></div></div>
            <p className="decision-number">02 · DURING INTAKE</p>
            <h3>Automate the obvious</h3>
            <p>Extract known details, answer repetition, and surface only what still requires agent judgement.</p>
          </article>
          <article className="decision-card">
            <div className="state-model" aria-hidden="true"><span>One call</span><span>Detected issue</span><span>Team pattern</span><span>Supervisor action</span></div>
            <p className="decision-number">03 · ACROSS CALLS</p>
            <h3>Make every call a signal</h3>
            <p>Aggregate detected intents and exceptions so supervisors can act before the issue becomes obvious.</p>
          </article>
        </div>
      </section>

      <section className="case-section product-surface" id="surface">
        <div className="case-section-head split-head">
          <div><p className="case-index">07 · Product surface</p><h2>One live call.<br /><em>Two views of intent.</em></h2></div>
          <p>The concept shows AI assisting an agent in real time while the same detected issue contributes to a supervisor’s wildfire operations pulse.</p>
        </div>
        <DiscoverConceptScreen />
      </section>

      <section className="case-section outcome-section" id="outcome">
        <div className="outcome-intro">
          <p className="case-index">08 · Outcome</p>
          <h2>Trust was proven<br /><em>when the stakes were real.</em></h2>
          <p>The strongest validation was enterprise commitment to a product that made live call AI useful to frontline agents and operational issue discovery visible to supervisors during a nationally recognized catastrophe response.</p>
        </div>
        <div className="outcome-ledger">
          <div><strong>$2.2M</strong><span>enterprise adoption secured</span></div>
          <div><strong>3,000</strong><span>agents at Farmers Insurance</span></div>
          <div><strong>Lead designer</strong><span>from discovery through experience definition</span></div>
        </div>
        <div className="role-strip">
          <span>My contribution</span>
          <p>UX research · problem framing · experience strategy · information architecture · conversational UX · interaction design · collaborative alignment</p>
        </div>
      </section>

      <section className="case-next">
        <p>The system did two jobs at once: reduce repetition inside the call and reveal the issue across the operation.</p>
        <a href="/#work">Return to selected work <span>↗</span></a>
      </section>
    </main>
  );
}
