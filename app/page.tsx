export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For typists who love to read
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find books that match your{" "}
          <span className="text-[#58a6ff]">typing skill level</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          TypeReads analyzes novels and texts for typing difficulty — word frequency, character patterns, and complexity — then builds a personalized reading list that grows with your speed and accuracy.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start for $7/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "⌨️", title: "Difficulty Scoring", desc: "Every book rated by WPM target, key patterns, and word rarity." },
          { icon: "📈", title: "Skill Progression", desc: "Recommendations advance as your speed and accuracy improve." },
          { icon: "📚", title: "Curated Library", desc: "500+ novels pre-analyzed and ready to practice with today." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-wide text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Personalized book recommendations",
              "Typing difficulty scores for 500+ books",
              "Progress tracking & skill milestones",
              "New books added weekly",
              "Export your reading list"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does TypeReads score book difficulty?",
              a: "We analyze word frequency, average word length, punctuation density, and uncommon character sequences. Each book gets a WPM target range so you always know if it's a good fit."
            },
            {
              q: "Do I need to be a fast typist to start?",
              a: "Not at all. TypeReads has recommendations starting at 20 WPM all the way to 120+ WPM. Beginners get simple, high-frequency-word texts; advanced typists get complex literary fiction."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your account dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} TypeReads. All rights reserved.
      </footer>
    </main>
  );
}
