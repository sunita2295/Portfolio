import type { Metadata } from "next";
import { CaseHeader, CaseNext, CommerceConceptScreen } from "../case-components";

export const metadata: Metadata = {
  title: "Redington Online Case Study — Sunita Rout",
  description: "How Sunita Rout is unifying four fragmented B2B commerce journeys into one research-led product system.",
};

const journeyRows = [
  ["Partner goal", "Find the right offer", "Build a viable order", "Commit with confidence", "Manage what comes next"],
  ["Journey", "Discovery", "Ordering", "Checkout", "Platform"],
  ["System need", "Shared taxonomy", "Persistent context", "Visible validation", "Continuous status"],
  ["Success signal", "Relevant discovery", "Fewer dead ends", "Completion quality", "Repeat self-service"],
];

export default function RedingtonCaseStudy() {
  return (
    <main className="case-shell case-steel">
      <CaseHeader sections={[["Problem", "#problem"], ["Journey", "#journey"], ["Model", "#model"], ["Surface", "#surface"], ["Outcome", "#outcome"]]} />

      <section className="case-hero steel-hero">
        <div className="case-hero-grid" aria-hidden="true" />
        <div className="commerce-routes" aria-hidden="true"><i /><i /><i /><i /><b /></div>
        <div className="case-hero-copy">
          <p className="case-kicker">Redington Online · B2B commerce · 2026—Now</p>
          <h1>Four fragmented journeys.<br /><em>One commerce system.</em></h1>
          <p className="case-lede">I lead UX strategy across discovery, ordering, checkout, and platform capabilities—turning separate touchpoints into a coherent partner experience.</p>
        </div>
        <div className="case-hero-proof">
          <div><strong>4</strong><span>critical journeys connected</span></div>
          <div><strong>End-to-end</strong><span>research → delivery → measure</span></div>
          <div><strong>Manager</strong><span>UX/UI design leadership</span></div>
        </div>
        <p className="case-disclosure">Ongoing transformation. Product details are abstracted; outcome measurement is in progress.</p>
      </section>

      <section className="case-section case-framing" id="problem">
        <div className="case-section-head">
          <p className="case-index">01 · Reframe the challenge</p>
          <h2>The screens were separate.<br /><em>The partner journey was not.</em></h2>
        </div>
        <div className="problem-layout">
          <div className="problem-copy">
            <p>Partners move through discovery, ordering, checkout, and ongoing platform tasks as one commercial journey. The product, however, can easily inherit the boundaries of teams, capabilities, and release plans.</p>
            <p>My role is to make those organizational seams disappear from the experience—while giving product, engineering, business, and analytics one shared model for deciding what to improve.</p>
            <blockquote>“The product problem was continuity: preserve intent, context, and confidence across every handoff.”</blockquote>
          </div>
          <div className="continuity-model" aria-label="Business problem to continuity design model">
            <div><span>BUSINESS</span><strong>Grow digital partner commerce</strong></div>
            <i>×</i>
            <div><span>FRICTION</span><strong>Capability-led fragmentation</strong></div>
            <i>↓</i>
            <div className="continuity-answer"><span>PRODUCT MOVE</span><strong>Design for journey continuity</strong><small>Shared context · predictable states · visible progress</small></div>
          </div>
        </div>
      </section>

      <section className="case-section journey-section" id="journey">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">02 · Journey architecture</p>
            <h2>A commerce journey<br /><em>without dropped context.</em></h2>
          </div>
          <p>The architecture connects what partners are trying to accomplish with the system behavior and measures required at each stage.</p>
        </div>
        <div className="journey-rail" aria-label="Four connected commerce journeys">
          {journeyRows.map((row, rowIndex) => (
            <div className={`journey-row row-${rowIndex}`} key={row[0]}>
              {row.map((cell, index) => index === 0 ? <strong key={cell}>{cell}</strong> : <span key={cell}><i>{String(index).padStart(2,"0")}</i>{cell}</span>)}
            </div>
          ))}
        </div>
        <div className="journey-principle"><span>Continuity rule</span><p>A partner should never have to reconstruct context the platform already knows.</p></div>
      </section>

      <section className="case-section ecosystem-section">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">03 · Ecosystem map</p>
            <h2>The interface is where<br /><em>four systems negotiate.</em></h2>
          </div>
          <p>The visual model makes ownership visible before design begins, so experience decisions survive cross-functional complexity.</p>
        </div>
        <div className="ecosystem-map" aria-label="Partner commerce ecosystem model">
          <div className="eco-core"><span>PARTNER</span><strong>Intent + context</strong></div>
          <div className="eco-node eco-product"><span>Product</span><strong>Priorities + rules</strong></div>
          <div className="eco-node eco-business"><span>Business</span><strong>Offers + policy</strong></div>
          <div className="eco-node eco-tech"><span>Engineering</span><strong>Services + states</strong></div>
          <div className="eco-node eco-data"><span>Analytics</span><strong>Signals + measures</strong></div>
          <i className="eco-line line-a" /><i className="eco-line line-b" /><i className="eco-line line-c" /><i className="eco-line line-d" />
        </div>
      </section>

      <section className="case-section operating-section" id="model">
        <div className="case-section-head">
          <p className="case-index">04 · UX operating model</p>
          <h2>Research is not a phase.<br /><em>It is the steering system.</em></h2>
        </div>
        <div className="operating-loop" aria-label="Research-led product operating loop">
          <div><span>01</span><strong>Observe</strong><small>Partner evidence</small></div><i>→</i>
          <div><span>02</span><strong>Frame</strong><small>Journey constraint</small></div><i>→</i>
          <div><span>03</span><strong>Align</strong><small>Shared priority</small></div><i>→</i>
          <div><span>04</span><strong>Ship</strong><small>Scalable pattern</small></div><i>→</i>
          <div><span>05</span><strong>Measure</strong><small>Behavior change</small></div>
        </div>
        <div className="measure-board">
          <article><span>DISCOVERY</span><strong>Can partners find a viable path?</strong><p>Relevance · progression · dead ends</p></article>
          <article><span>ORDERING</span><strong>Can they build with confidence?</strong><p>Validation · recovery · completion</p></article>
          <article><span>CHECKOUT</span><strong>Can they commit without uncertainty?</strong><p>Error rate · abandonment · success</p></article>
          <article><span>PLATFORM</span><strong>Can they stay self-sufficient?</strong><p>Status clarity · repeat use · support need</p></article>
        </div>
      </section>

      <section className="case-section product-surface steel-surface" id="surface">
        <div className="case-section-head split-head">
          <div><p className="case-index">05 · Product surface</p><h2>Continuity made<br /><em>visible and actionable.</em></h2></div>
          <p>The concept carries requirement context from discovery into an order workspace—showing the journey model at screen level without copying confidential UI.</p>
        </div>
        <CommerceConceptScreen />
      </section>

      <section className="case-section outcome-section steel-outcome" id="outcome">
        <div className="outcome-intro">
          <p className="case-index">06 · Current outcome</p>
          <h2>The transformation is live.<br /><em>The evidence is still moving.</em></h2>
          <p>This is ongoing work, so I do not turn unfinished measurement into a polished claim. The value delivered now is a connected journey model, a research-led operating rhythm, and a measurement structure built into the work.</p>
        </div>
        <div className="outcome-ledger">
          <div><strong>4 journeys</strong><span>designed as one connected system</span></div>
          <div><strong>1 model</strong><span>shared across product, engineering, business, and analytics</span></div>
          <div><strong>In progress</strong><span>behavioral outcome measurement</span></div>
        </div>
        <div className="role-strip"><span>My contribution</span><p>UX strategy · user research · journey architecture · interaction design · scalable UX practices · AI-assisted commerce · cross-functional leadership</p></div>
      </section>

      <CaseNext statement="Transformation work should show the system changing—not pretend the story is already finished." nextHref="/work/automation-systems" nextLabel="Next: Automation Systems" />
    </main>
  );
}
