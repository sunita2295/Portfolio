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
