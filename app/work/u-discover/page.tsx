import type { Metadata } from "next";
import { DiscoverConceptScreen } from "../case-components";

export const metadata: Metadata = {
  title: "U-Discover Case Study — Sunita Rout",
  description: "How Sunita Rout shaped a trustworthy GenAI conversation-intelligence workflow into a $2.2M enterprise adoption.",
};

const blueprintRows = [
  {
    label: "User intent",
    tone: "plain",
    cells: ["Frame a business question", "Narrow the scope", "Interrogate the answer", "Turn insight into action"],
  },
  {
    label: "Experience",
    tone: "front",
    cells: ["Natural-language entry", "Guided clarification", "Answer + evidence trail", "Save, share, revisit"],
  },
  {
    label: "Intelligence",
    tone: "middle",
    cells: ["Detect intent", "Build the query plan", "Synthesize grounded insight", "Preserve context"],
  },
  {
    label: "System",
    tone: "back",
    cells: ["Permissions + corpus", "Retrieve + rank", "Citations + confidence", "Workspace + governance"],
  },
  {
    label: "Measure",
    tone: "measure",
    cells: ["Question quality", "Refinement rate", "Evidence inspection", "Repeat use + adoption"],
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
          <p className="case-kicker">U-Discover · Conversation intelligence · 2023—2026</p>
          <h1>From thousands of conversations to <em>one answer you can trust.</em></h1>
          <p className="case-lede">I led the experience strategy for a GenAI product that made enterprise conversation data askable, traceable, and useful at the moment of decision.</p>
        </div>
        <div className="case-hero-proof">
          <div><strong>$2.2M</strong><span>enterprise adoption secured</span></div>
          <div><strong>3,000</strong><span>Farmers Insurance agents</span></div>
          <div><strong>Lead</strong><span>research → strategy → UX</span></div>
        </div>
        <p className="case-disclosure">Selected process shown. Customer data and proprietary interface details are abstracted.</p>
      </section>

      <section className="case-section case-framing" id="problem">
        <div className="case-section-head">
          <p className="case-index">01 · Find the real problem</p>
          <h2>The request was AI search.<br /><em>The risk was untrusted answers.</em></h2>
        </div>
        <div className="problem-layout">
          <div className="problem-copy">
            <p>Enterprise teams were sitting on thousands of customer conversations, yet getting a reliable answer still depended on analysts, manual filtering, and time-consuming interpretation.</p>
            <p>The design challenge was not simply to add a prompt box. It was to help people ask better questions, understand what the system searched, and verify why an answer deserved action.</p>
            <blockquote>“The product succeeds only when an answer can survive the next question: how do you know?”</blockquote>
          </div>
          <div className="problem-stack" aria-label="Business problem decomposed into product and experience problems">
            <div className="problem-layer layer-business"><span>Business pressure</span><strong>Make conversation data valuable at enterprise scale</strong></div>
            <div className="problem-arrow">↓</div>
            <div className="problem-layer layer-product"><span>Product problem</span><strong>Remove the analyst bottleneck without creating a trust bottleneck</strong></div>
            <div className="problem-arrow">↓</div>
            <div className="problem-layer layer-design"><span>Experience problem</span><strong>Turn a vague question into a traceable, decision-ready answer</strong></div>
          </div>
        </div>
      </section>

      <section className="case-section evidence-section">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">02 · Research synthesis</p>
            <h2>Four failure modes.<br /><em>One trust gap.</em></h2>
          </div>
          <p>Rather than organize findings by interview, I organized the evidence by where confidence broke across the workflow.</p>
        </div>
        <div className="evidence-map">
          <div className="evidence-core"><span>CORE TENSION</span><strong>Speed without certainty is not insight.</strong></div>
          <article><span>01</span><h3>Analyst bottleneck</h3><p>Answers arrived too late to shape the decision.</p></article>
          <article><span>02</span><h3>Question ambiguity</h3><p>Users knew the decision—not the query syntax.</p></article>
          <article><span>03</span><h3>Black-box risk</h3><p>A fluent answer could still feel impossible to defend.</p></article>
          <article><span>04</span><h3>Handoff loss</h3><p>Insight disconnected from the workflow where action happened.</p></article>
        </div>
      </section>

      <section className="case-section system-section" id="system">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">03 · System architecture</p>
            <h2>I designed the journey<br /><em>behind the answer.</em></h2>
          </div>
          <p>The interface was the visible edge of a larger contract between user intent, model behavior, enterprise data, and evidence.</p>
        </div>
        <div className="system-map" aria-label="U-Discover conversation to insight system map">
          <div className="system-node node-user"><span>01 · INTENT</span><strong>Decision question</strong><small>What is the user trying to decide?</small></div>
          <div className="system-link"><i /><span>clarify</span></div>
          <div className="system-node"><span>02 · PLAN</span><strong>Query strategy</strong><small>Scope, entities, time, filters</small></div>
          <div className="system-link"><i /><span>retrieve</span></div>
          <div className="system-node"><span>03 · GROUND</span><strong>Evidence set</strong><small>Ranked conversations + signals</small></div>
          <div className="system-link"><i /><span>synthesize</span></div>
          <div className="system-node node-answer"><span>04 · EXPLAIN</span><strong>Traceable answer</strong><small>Insight, confidence, citations</small></div>
          <div className="system-foundation">
            <span>Enterprise foundation</span>
            <div>Permissions</div><div>Governance</div><div>Context</div><div>Auditability</div>
          </div>
        </div>
      </section>

      <section className="case-section blueprint-section">
        <div className="case-section-head">
          <p className="case-index">04 · Service blueprint</p>
          <h2>One question.<br /><em>Five coordinated layers.</em></h2>
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
        <div className="blueprint-note"><span>Design leverage</span><p>The blueprint exposed ownership gaps early: what the interface could explain, what the model had to return, and what the enterprise layer had to guarantee.</p></div>
      </section>

      <section className="case-section decision-section" id="decisions">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">05 · Product decisions</p>
            <h2>Trust was designed<br /><em>into the interaction.</em></h2>
          </div>
          <p>Three experience decisions turned the architecture into something people could understand and control.</p>
        </div>
        <div className="decision-grid">
          <article className="decision-card">
            <div className="question-ladder" aria-hidden="true"><span>Broad question</span><i /><span>Clarified scope</span><i /><strong>Answerable intent</strong></div>
            <p className="decision-number">01 · BEFORE GENERATION</p>
            <h3>Clarify before answering</h3>
            <p>Translate ambiguity into visible scope—rather than letting the model silently guess.</p>
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
          <div><p className="case-index">06 · Product surface</p><h2>The strategy becomes<br /><em>a usable point of view.</em></h2></div>
          <p>A custom concept screen shows how question refinement, grounded synthesis, and evidence inspection can coexist without exposing production UI.</p>
        </div>
        <DiscoverConceptScreen />
      </section>

      <section className="case-section outcome-section" id="outcome">
        <div className="outcome-intro">
          <p className="case-index">07 · Outcome</p>
          <h2>The system earned<br /><em>enterprise belief.</em></h2>
          <p>The strongest validation was not a prettier interface. It was enterprise commitment to a product that made AI-generated insight understandable enough to adopt.</p>
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
        <p>That is what “the system behind the screen” looks like in practice.</p>
        <a href="/#work">Return to selected work <span>↗</span></a>
      </section>
    </main>
  );
}
