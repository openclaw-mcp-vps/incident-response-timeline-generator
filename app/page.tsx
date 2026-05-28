export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For SRE Teams &amp; Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Generate Incident Timelines<br />
          <span className="text-[#58a6ff]">from Slack &amp; Logs — Instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop spending hours piecing together what happened. Paste your Slack thread and log entries, and get a complete, AI-correlated incident timeline and post-mortem report in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start for $45/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required to try</span>
        </div>
        <div className="rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left font-mono text-sm text-[#8b949e] max-w-2xl mx-auto">
          <div className="mb-2"><span className="text-[#58a6ff]">14:02</span> <span className="text-[#f0883e]">@oncall</span> — alerts firing: p99 latency &gt; 5s on /checkout</div>
          <div className="mb-2"><span className="text-[#58a6ff]">14:05</span> <span className="text-[#3fb950]">deploy</span> — v2.4.1 rolled out to prod (payments-service)</div>
          <div className="mb-2"><span className="text-[#58a6ff]">14:09</span> <span className="text-[#f0883e]">ERROR</span> — DB connection pool exhausted (payments-db)</div>
          <div><span className="text-[#58a6ff]">14:23</span> <span className="text-[#3fb950]">resolved</span> — rollback to v2.4.0 complete, latency nominal</div>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#30363d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "⚡", title: "Slack Integration", desc: "Paste any Slack thread or connect via API to auto-import messages" },
            { icon: "🔍", title: "AI Correlation", desc: "GPT-powered engine links log lines, deploys, and alerts by timestamp" },
            { icon: "📄", title: "Export Reports", desc: "Download Markdown, PDF, or Confluence-ready post-mortem docs" }
          ].map((f) => (
            <div key={f.title}>
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-[#8b949e] text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-4">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$45<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per workspace. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited incident timelines",
              "Slack API + manual paste input",
              "AI-powered event correlation",
              "Markdown, PDF &amp; Confluence export",
              "Log file upload (up to 50 MB)",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What log formats are supported?",
              a: "We support plain text, JSON, syslog, and structured logs from Datadog, Splunk, CloudWatch, and Elasticsearch. You can also paste raw log output directly."
            },
            {
              q: "Do you store our Slack messages or logs?",
              a: "No. All processing happens ephemerally. We do not persist your Slack data or log content after the timeline is generated. Your data stays yours."
            },
            {
              q: "Can I export the timeline to Confluence or Notion?",
              a: "Yes. Every generated timeline can be exported as Markdown (Notion-compatible), PDF, or a Confluence wiki page via our one-click export buttons."
            }
          ].map((item) => (
            <div key={item.q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Incident Timeline Generator. Built for SRE teams.
      </footer>
    </main>
  )
}
