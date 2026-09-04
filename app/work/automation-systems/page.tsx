import type { Metadata } from "next";
import { CaseHeader, CaseNext, AutomationConceptScreen } from "../case-components";

export const metadata: Metadata = {
  title: "Automation Systems Case Study | Sunita Rout",
  description: "How Sunita Rout designed reusable AI workflow systems across three product suites, accelerating rollouts by 60%.",
};

const lifecycle = [
  ["Define", "Trigger", "Goal", "Scope"],
  ["Configure", "Inputs", "Rules", "Actions"],
  ["Validate", "Test", "Review", "Approve"],
  ["Operate", "Run", "Monitor", "Recover"],
];

export default function AutomationSystemsCaseStudy() {
  return (
    <main className="case-shell case-ash">
      <CaseHeader sections={[["Problem", "#problem"], ["Pattern", "#pattern"], ["Scale", "#scale"], ["Surface", "#surface"], ["Outcome", "#outcome"]]} />

      <section className="case-hero ash-hero">
        <div className="case-hero-grid" aria-hidden="true" />
        <div className="automation-constellation" aria-hidden="true"><span /><span /><span /><span /><span /><i /><i /><i /></div>
        <div className="case-hero-copy">
          <p className="case-kicker">Automation Systems · AI workflow architecture · 2023 to 2026</p>
          <h1>Stop designing every AI workflow<br /><em>as if it were the first.</em></h1>
          <p className="case-lede">I turned isolated automation flows into a reusable product language across U Suite, X Suite, and Model Space, so teams could configure, ship, and scale with less reinvention.</p>
        </div>
        <div className="case-hero-proof">
          <div><strong>60%</strong><span>faster rollout cycles</span></div>
          <div><strong>3</strong><span>AI product suites</span></div>
          <div><strong>Reusable</strong><span>workflow system</span></div>
        </div>
        <p className="case-disclosure">Selected system logic shown. Proprietary product details are abstracted.</p>
      </section>

      <section className="case-section case-framing" id="problem">
        <div className="case-section-head">
          <p className="case-index">01 · Diagnose the drag</p>
          <h2>The workflows looked different.<br /><em>The design problems repeated.</em></h2>
        </div>
        <div className="problem-layout">
          <div className="problem-copy">
            <p>AI workflows were being solved as individual feature requests. Teams repeatedly redesigned triggers, configuration, validation, deployment, and recovery, even when the underlying decisions were the same.</p>
            <p>The product problem was not a shortage of screens. It was the absence of a shared grammar for how automation should behave across products.</p>
            <blockquote>“Scale arrived when we separated what must stay consistent from what each product must configure.”</blockquote>
          </div>
          <div className="drag-model" aria-label="Cost of isolated workflows">
            <div className="drag-input"><span>U Suite</span><span>X Suite</span><span>Model Space</span></div>
            <div className="drag-chaos"><i>Trigger</i><i>Rules</i><i>Test</i><i>Deploy</i><i>Errors</i><i>Status</i></div>
            <div className="drag-cost"><span>REDESIGN</span><span>REBUILD</span><span>RELEARN</span></div>
            <strong>Isolated UX created compound delivery cost.</strong>
          </div>
        </div>
      </section>

      <section className="case-section pattern-section" id="pattern">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">02 · Pattern architecture</p>
            <h2>A shared grammar for<br /><em>human + AI work.</em></h2>
          </div>
          <p>The system organizes automation around stable decisions, not product specific page layouts.</p>
        </div>
        <div className="pattern-grammar" aria-label="Reusable automation pattern grammar">
          <div className="grammar-spine"><span>Workflow intent</span><i /><span>Configuration</span><i /><span>Execution</span><i /><span>Recovery</span></div>
          <div className="grammar-cards">
            <article><span>WHEN</span><strong>Trigger</strong><p>Event · schedule · condition</p></article>
            <article><span>WITH</span><strong>Context</strong><p>Data · permissions · scope</p></article>
            <article><span>DECIDE</span><strong>Logic</strong><p>Rules · model · human gate</p></article>
            <article><span>THEN</span><strong>Action</strong><p>Execute · notify · hand off</p></article>
            <article><span>IF NOT</span><strong>Recovery</strong><p>Retry · edit · escalate</p></article>
          </div>
          <div className="grammar-base"><span>Explainability</span><span>Control</span><span>Observability</span><span>Governance</span></div>
        </div>
      </section>

      <section className="case-section lifecycle-section">
        <div className="case-section-head">
          <p className="case-index">03 · Workflow lifecycle</p>
          <h2>Design beyond the happy path.<br /><em>Especially with AI.</em></h2>
        </div>
        <div className="lifecycle-map">
          {lifecycle.map(([stage, ...steps], index) => (
            <article key={stage}>
              <span>{String(index + 1).padStart(2,"0")}</span><h3>{stage}</h3>
              <div>{steps.map(step => <i key={step}>{step}</i>)}</div>
            </article>
          ))}
        </div>
        <div className="failure-loop">
          <span>Failure is a primary state</span>
          <div><i>Detect</i><b>→</b><i>Explain</i><b>→</b><i>Recover</i><b>→</b><i>Learn</i></div>
          <p>Every automation pattern included a route back to human understanding and control.</p>
        </div>
      </section>

      <section className="case-section scale-section" id="scale">
        <div className="case-section-head split-head">
          <div>
            <p className="case-index">04 · System at scale</p>
            <h2>Configure the differences.<br /><em>Reuse the decisions.</em></h2>
          </div>
          <p>A shared core reduced repeated design and engineering effort while leaving each suite room for its own context.</p>
        </div>
        <div className="reuse-matrix" role="table" aria-label="Reusable automation patterns across three product suites">
          <div className="reuse-row reuse-head" role="row"><strong role="columnheader">Pattern</strong><span role="columnheader">U Suite</span><span role="columnheader">X Suite</span><span role="columnheader">Model Space</span><i role="columnheader">System value</i></div>
          {[
            ["Trigger builder","●","●","●","One interaction model"],
            ["Rule logic","●","●","●","Predictable configuration"],
            ["Human approval","●","●","○","Control where risk rises"],
            ["Test + validation","●","●","●","Confidence before release"],
            ["Monitoring + recovery","●","●","●","Shared operational language"],
          ].map(row => <div className="reuse-row" role="row" key={row[0]}><strong role="rowheader">{row[0]}</strong><span role="cell">{row[1]}</span><span role="cell">{row[2]}</span><span role="cell">{row[3]}</span><i role="cell">{row[4]}</i></div>)}
        </div>
        <div className="matrix-key"><span>● Shared core</span><span>○ Contextual variation</span></div>
      </section>

      <section className="case-section product-surface ash-surface" id="surface">
        <div className="case-section-head split-head">
          <div><p className="case-index">05 · Product surface</p><h2>Reusable logic.<br /><em>Inspectable execution.</em></h2></div>
          <p>The concept screen demonstrates how a shared automation grammar can feel tangible, configurable, and safe, without recreating a proprietary product.</p>
        </div>
        <AutomationConceptScreen />
      </section>

      <section className="case-section outcome-section ash-outcome" id="outcome">
        <div className="outcome-intro">
          <p className="case-index">06 · Outcome</p>
          <h2>Consistency became<br /><em>a growth mechanism.</em></h2>
          <p>The reusable system accelerated rollout while the automation strategy contributed to stronger retention, conversion, and churn performance across the product suite.</p>
        </div>
        <div className="outcome-ledger metric-ledger">
          <div><strong>60%</strong><span>faster rollout cycles</span></div>
          <div><strong>+35%</strong><span>retention</span></div>
          <div><strong>+37%</strong><span>conversion</span></div>
          <div><strong>38%</strong><span>lower churn</span></div>
        </div>
        <div className="role-strip"><span>My contribution</span><p>automation strategy · systems thinking · workflow architecture · reusable interaction patterns · conversational UX · portfolio alignment · design mentorship</p></div>
      </section>

      <CaseNext statement="The most valuable screen is often the one a team never has to redesign." nextHref="/#work" nextLabel="Return to selected work" />
    </main>
  );
}
