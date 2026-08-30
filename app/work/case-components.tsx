export function CaseHeader({ sections }: { sections: Array<[string, string]> }) {
  return (
    <header className="case-nav">
      <a className="case-brand" href="/" aria-label="Sunita Rout, home">
        <span className="case-mark" aria-hidden="true"><i /><b /></span>
        <span>Sunita Rout</span>
      </a>
      <nav aria-label="Case study navigation">
        {sections.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="case-close" href="/">Close ×</a>
    </header>
  );
}

export function CaseNext({ statement, nextHref, nextLabel }: { statement: string; nextHref: string; nextLabel: string }) {
  return (
    <section className="case-next">
      <p>{statement}</p>
      <a href={nextHref}>{nextLabel} <span>↗</span></a>
    </section>
  );
}

function WindowBar({ title, action }: { title: string; action: string }) {
  return (
    <div className="mock-window-bar">
      <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
      <strong>{title}</strong>
      <button type="button">{action}</button>
    </div>
  );
}

export function DiscoverConceptScreen() {
  return (
    <div className="screen-stage discover-screen">
      <div className="screen-caption"><span>Concept reconstruction · 01</span><p>Insight workspace — question, answer, and evidence in one traceable view</p></div>
      <div className="mock-window">
        <WindowBar title="Conversation intelligence" action="Share insight" />
        <div className="discover-app">
          <aside className="mock-icon-rail" aria-hidden="true"><b>⌁</b><i>◫</i><i>⌕</i><i>◇</i><i>↗</i><em>?</em></aside>
          <section className="discover-main">
            <div className="mock-page-title"><div><small>ANALYSIS WORKSPACE</small><h3>Repeat contact drivers</h3></div><span>Last 90 days⌄</span></div>
            <div className="query-card"><small>ASK YOUR CONVERSATIONS</small><p>Why are customers calling back within 7 days?</p><div><span>All service teams</span><span>18.4K conversations</span><button type="button">Ask ↗</button></div></div>
            <article className="answer-card">
              <div className="answer-meta"><span>GROUNDED ANSWER</span><b>High confidence</b></div>
              <h4>Billing handoff is the strongest repeat-contact signal.</h4>
              <p>Customers who leave the first call without a clear ownership handoff are 2.4× more likely to contact support again within seven days.</p>
              <div className="answer-insights"><div><i style={{"--bar":"82%"} as React.CSSProperties} /><span>Ownership unclear</span><strong>42%</strong></div><div><i style={{"--bar":"61%"} as React.CSSProperties} /><span>Promise not recorded</span><strong>31%</strong></div><div><i style={{"--bar":"38%"} as React.CSSProperties} /><span>Status uncertainty</span><strong>19%</strong></div></div>
            </article>
          </section>
          <aside className="evidence-panel">
            <div className="evidence-title"><span>EVIDENCE</span><strong>642 conversations</strong></div>
            <article><b>01</b><p>“I was told billing would own it, but I don’t know who to contact...”</p><span>Billing · 02:14</span></article>
            <article><b>02</b><p>“The previous agent said it was resolved. The balance still appears...”</p><span>Account · 04:38</span></article>
            <article><b>03</b><p>“I’m calling again because there was no confirmation after the transfer...”</p><span>Support · 01:52</span></article>
            <button type="button">Open evidence set →</button>
          </aside>
        </div>
      </div>
      <p className="screen-disclaimer">Fictionalized interface and data. The screen demonstrates the product logic without reproducing confidential production UI.</p>
    </div>
  );
}

export function CommerceConceptScreen() {
  return (
    <div className="screen-stage commerce-screen">
      <div className="screen-caption"><span>Concept reconstruction · 02</span><p>Connected commerce workspace — discovery context flows into ordering</p></div>
      <div className="mock-window">
        <WindowBar title="Partner commerce workspace" action="Help center" />
        <div className="commerce-app">
          <aside className="commerce-sidebar">
            <strong>Catalog</strong><nav><span className="active">Discover</span><span>My workspace</span><span>Orders</span><span>Subscriptions</span></nav>
            <div className="filter-block"><small>SOLUTION TYPE</small><label><i className="checked" /> Security <b>124</b></label><label><i /> Cloud <b>87</b></label><label><i /> Infrastructure <b>63</b></label></div>
            <div className="filter-block"><small>AVAILABILITY</small><label><i className="checked" /> Ready to quote</label><label><i /> Special order</label></div>
          </aside>
          <section className="catalog-main">
            <div className="catalog-head"><div><small>CATALOG / SECURITY</small><h3>Build a secure edge solution</h3><p>142 products · pricing available for your account</p></div><button type="button">＋ Compare</button></div>
            <div className="catalog-search"><span>⌕</span><p>Search products, capabilities, or use cases</p><b>⌘ K</b></div>
            <div className="catalog-context"><span>Active requirement</span><p>12 sites · 500–1,000 users · annual term</p><button type="button">Edit</button></div>
            <div className="product-table">
              <div className="product-head"><span>Product</span><span>Fit</span><span>Availability</span><span>Partner price</span><span /></div>
              {[
                ["SecureEdge Gateway","Best match","In stock","₹ 2,48,400"],
                ["Cloud Access Shield","Compatible","2–3 days","₹ 1,86,200"],
                ["Managed Threat Core","Add-on","Digital","₹ 74,900"],
              ].map((item,index)=><div className="product-row" key={item[0]}><span><i>{index+1}</i><b>{item[0]}</b><small>Enterprise subscription</small></span><span>{item[1]}</span><span><em />{item[2]}</span><strong>{item[3]}</strong><button type="button">Add +</button></div>)}
            </div>
          </section>
          <aside className="order-panel">
            <div className="order-title"><small>ORDER WORKSPACE</small><strong>Solution draft</strong><span>3 items</span></div>
            <div className="order-progress"><i className="done">1</i><b /><i className="active">2</i><b /><i>3</i><p><span>Discover</span><span>Configure</span><span>Checkout</span></p></div>
            <article><span>SecureEdge Gateway</span><b>× 12</b><strong>₹ 2,48,400</strong></article><article><span>Support coverage</span><b>Annual</b><strong>₹ 28,800</strong></article>
            <div className="order-total"><span>Estimated total</span><strong>₹ 2,77,200</strong><small>Taxes calculated at checkout</small></div>
            <button type="button">Continue configuration →</button>
            <p>Requirement context preserved from discovery</p>
          </aside>
        </div>
      </div>
      <p className="screen-disclaimer">Fictionalized products, prices, and interface. No company or partner logos are used.</p>
    </div>
  );
}

export function AutomationConceptScreen() {
  return (
    <div className="screen-stage automation-screen">
      <div className="screen-caption"><span>Concept reconstruction · 03</span><p>Workflow builder — shared patterns make complex AI behavior inspectable</p></div>
      <div className="mock-window">
        <WindowBar title="Automation studio" action="Publish workflow" />
        <div className="automation-app">
          <aside className="workflow-sidebar">
            <div><small>WORKFLOWS</small><button type="button">＋ New</button></div>
            <nav><span className="active"><i /> Case triage <b>Live</b></span><span><i /> Quality review <b>Draft</b></span><span><i /> Escalation assist <b>Live</b></span></nav>
            <div className="block-library"><small>BUILDING BLOCKS</small><span>⚡ Trigger</span><span>◇ AI decision</span><span>☷ Human review</span><span>↗ Action</span></div>
          </aside>
          <section className="workflow-canvas">
            <div className="canvas-toolbar"><span>Case triage / v12</span><div><button>−</button><b>80%</b><button>＋</button></div></div>
            <div className="workflow-grid" aria-label="Concept workflow with connected automation nodes">
              <article className="flow-node trigger-node"><small>TRIGGER</small><strong>New case received</strong><span>Queue: Priority support</span><i /></article>
              <b className="flow-line line-one" /><span className="flow-label label-one">case context</span>
              <article className="flow-node ai-node"><small>AI DECISION</small><strong>Classify intent + risk</strong><span>Model confidence ≥ 82%</span><i /><i /></article>
              <b className="flow-line line-two" /><b className="flow-line line-three" /><span className="flow-label label-two">high risk</span><span className="flow-label label-three">standard</span>
              <article className="flow-node review-node"><small>HUMAN GATE</small><strong>Review recommendation</strong><span>SLA: 15 minutes</span><i /></article>
              <article className="flow-node action-node"><small>ACTION</small><strong>Route + notify owner</strong><span>Write audit event</span><i /></article>
            </div>
            <div className="run-log"><span><i /> Test run completed</span><p>6 steps · 1 human gate · 0 errors</p><button type="button">View trace</button></div>
          </section>
          <aside className="config-panel">
            <div className="config-head"><span>SELECTED BLOCK</span><strong>Review recommendation</strong><button type="button">•••</button></div>
            <label>ASSIGNEE RULE<span>Risk owner by region⌄</span></label><label>RESPONSE WINDOW<span>15 minutes⌄</span></label>
            <div className="config-toggle"><p><strong>Require explanation</strong><small>Reviewer must add context</small></p><i className="on" /></div>
            <div className="config-toggle"><p><strong>Auto-escalate</strong><small>When response window expires</small></p><i className="on" /></div>
            <div className="config-branch"><small>ON APPROVAL</small><span>Continue to Route + notify owner</span></div>
            <button type="button">Save configuration</button>
          </aside>
        </div>
      </div>
      <p className="screen-disclaimer">Fictionalized workflow and interface. The reusable interaction model—not a production screen—is the artifact being demonstrated.</p>
    </div>
  );
}
