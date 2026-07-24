export default function LandingPage() {
  const [reserved, setReserved] = useState(false);

  return (
    <div
      className="min-h-screen w-full text-[#E8E4DC]"
      style={{
        background: "#1C1B1A",
        fontFamily: "Inter, ui-sans-serif, system-ui",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .display { font-family: 'Space Grotesk', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .grain { position: relative; }
        .grain::before {
          content: "";
          position: absolute; inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 3px 3px;
          pointer-events: none;
          z-index: 1;
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .float { animation: floatY 7s ease-in-out infinite; }
        .focus-ring:focus-visible { outline: 2px solid #C9A227; outline-offset: 3px; }
        .card-lift { transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease; }
        .card-lift:hover { transform: translateY(-3px); box-shadow: 0 16px 32px -18px rgba(0,0,0,0.6); }
      `}</style>

      <header className="sticky top-0 z-30 border-b border-[#33302b] bg-[#1C1B1Aee] backdrop-blur">
        <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border-2 border-[#C9A227] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#C9A227]" />
            </div>
            <span className="display text-[19px] font-semibold tracking-tight">MERIDIAN</span>
          </div>
          <nav className="flex items-center gap-9 text-[14px] text-[#B8B3A8]">
            <a href="#design" className="hover:text-[#E8E4DC] transition-colors focus-ring">Design</a>
            <a href="#specs" className="hover:text-[#E8E4DC] transition-colors focus-ring">Specs</a>
            <a href="#reviews" className="hover:text-[#E8E4DC] transition-colors focus-ring">Reviews</a>
            <a
              href="#reserve"
              className="focus-ring px-4 py-2 rounded-full bg-[#E8E4DC] text-[#1C1B1A] font-medium hover:bg-white transition-colors"
            >
              Reserve
            </a>
          </nav>
        </div>
      </header>

      <section className="grain relative overflow-hidden border-b border-[#33302b]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1100px 500px at 15% -10%, rgba(201,162,39,0.08), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-8 pt-20 pb-24 grid grid-cols-[1.1fr_0.9fr] gap-16 items-center" style={{ zIndex: 2 }}>
          <div>
            <div className="fade-up mono text-[12px] tracking-[0.15em] text-[#C9A227] mb-5" style={{ animationDelay: "0s" }}>
              MERIDIAN TEN — TURNTABLE &amp; INTEGRATED AMPLIFIER
            </div>
            <h1
              className="fade-up display text-[56px] leading-[1.04] font-semibold tracking-tight text-[#F3F1EA]"
              style={{ animationDelay: "0.06s", textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
            >
              One instrument.
              <br />
              Every record you own.
            </h1>
            <p className="fade-up mt-6 text-[18px] leading-[1.6] text-[#B8B3A8] max-w-[480px]" style={{ animationDelay: "0.12s" }}>
              A direct-drive turntable, phono stage, and 60-watt amplifier
              built into a single walnut-and-aluminum chassis. Plug in
              speakers. Drop the needle.
            </p>
            <div className="fade-up mt-9 flex items-center gap-4" style={{ animationDelay: "0.18s" }}>
              <a
                href="#reserve"
                className="focus-ring inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C9A227] text-[#1C1B1A] font-semibold text-[15px] hover:bg-[#E4B94C] hover:shadow-[0_8px_24px_-6px_rgba(201,162,39,0.5)] transition-all"
              >
                Reserve yours — $60 deposit
                <ChevronRight size={16} />
              </a>
              <a
                href="#specs"
                className="focus-ring text-[15px] text-[#E8E4DC] border-b border-[#57534a] hover:border-[#E8E4DC] pb-0.5 transition-colors"
              >
                View full specs
              </a>
            </div>
            <div className="fade-up mt-14 h-14 rounded-lg border border-[#33302b] bg-[#221f1c] px-4 flex items-center gap-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_24px_-16px_rgba(0,0,0,0.8)]" style={{ animationDelay: "0.24s" }}>
              <span className="mono text-[11px] text-[#8a8578] shrink-0">OUTPUT</span>
              <VUMeter />
            </div>
          </div>

          <div className="fade-up relative flex items-center justify-center" style={{ animationDelay: "0.15s" }}>
            <div
              className="absolute w-[440px] h-[440px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,162,39,0.16), transparent 70%)",
              }}
            />
            <div className="float relative rounded-2xl border border-[#3a3630] bg-gradient-to-b from-[#252320] to-[#191715] p-10 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.04)]">
              <Platter />
            </div>
          </div>
        </div>
      </section>

      <section id="specs" className="max-w-[1280px] mx-auto px-8 py-24">
        <div className="max-w-[560px] mb-14">
          <div className="mono text-[12px] tracking-[0.15em] text-[#C9A227] mb-3">SPECIFICATION</div>
          <h2 className="display text-[34px] font-semibold tracking-tight text-[#F3F1EA]">
            Four systems, tuned as one.
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-lift rounded-xl border border-[#33302b] bg-[#211f1c] p-6 hover:border-[#4a4438]"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 35% 30%, #2c2925, #1a1816)",
                  boxShadow: "inset 0 0 0 1px #3a352e",
                }}
              >
                <f.icon size={19} className="text-[#C9A227]" strokeWidth={1.75} />
              </div>
              <div className="mono text-[12px] text-[#8a8578] mt-5">{f.spec}</div>
              <h3 className="display text-[17px] font-semibold mt-1.5 text-[#F3F1EA]">
                {f.title}
              </h3>
              <p className="text-[14px] leading-[1.6] text-[#B8B3A8] mt-2.5">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="border-y border-[#33302b] bg-[#19171588]">
        <div className="max-w-[1280px] mx-auto px-8 py-20">
          <div className="mono text-[12px] tracking-[0.15em] text-[#8a8578] mb-8 text-center">
            AS FEATURED IN
          </div>
          <div className="flex items-center justify-center gap-14 flex-wrap mb-16 opacity-70">
            {PRESS.map((p) => (
              <span key={p} className="display text-[18px] font-medium text-[#B8B3A8] tracking-tight">
                {p}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-[#33302b] bg-[#211f1c] p-7 flex flex-col justify-between"
              >
                <p className="text-[15px] leading-[1.65] text-[#D9D5CC]">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-[#33302b]">
                  <div className="text-[14px] font-medium text-[#F3F1EA]">{t.name}</div>
                  <div className="mono text-[12px] text-[#8a8578] mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="max-w-[1280px] mx-auto px-8 py-28">
        <div
          className="relative overflow-hidden rounded-2xl border border-[#3a3630] px-14 py-16 flex items-center justify-between shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]"
          style={{
            background:
              "linear-gradient(135deg, #221f1c, #1a1817), repeating-linear-gradient(96deg, rgba(139,111,71,0.05) 0px, rgba(139,111,71,0.09) 4px, transparent 9px, transparent 18px)",
          }}
        >
          <div className="max-w-[460px]">
            <h2 className="display text-[32px] font-semibold tracking-tight text-[#F3F1EA]">
              First production run ships spring.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-[#B8B3A8]">
              Reserve now with a fully refundable $60 deposit. Estimated
              delivery within 6 weeks of the run closing. Full price $1,480.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Free shipping & white-glove setup", "10-year chassis warranty", "30-day home trial"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-2.5 text-[14px] text-[#D9D5CC]">
                    <Check size={15} className="text-[#C9A227]" /> {i}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="shrink-0">
            {!reserved ? (
              <button
                onClick={() => setReserved(true)}
                className="focus-ring px-8 py-4 rounded-full bg-[#C9A227] text-[#1C1B1A] font-semibold text-[15px] hover:bg-[#E4B94C] transition-colors"
              >
                Reserve — $60 deposit
              </button>
            ) : (
              <div className="px-8 py-4 rounded-full border border-[#C9A227] text-[#C9A227] font-medium text-[15px] flex items-center gap-2">
                <Check size={16} /> You're on the list
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#33302b]">
        <div className="max-w-[1280px] mx-auto px-8 py-14 grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-6 rounded-full border-2 border-[#C9A227] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              </div>
              <span className="display text-[15px] font-semibold">MERIDIAN</span>
            </div>
            <p className="text-[13px] text-[#8a8578] leading-[1.6] max-w-[240px]">
              Precision-built audio instruments, designed and assembled for a
              lifetime of use.
            </p>
          </div>
          {[
            { h: "Product", items: ["Design", "Specifications", "Reviews", "FAQ"] },
            { h: "Company", items: ["About", "Journal", "Careers"] },
            { h: "Support", items: ["Warranty", "Shipping", "Contact"] },
          ].map((col) => (
            <div key={col.h}>
              <div className="mono text-[12px] text-[#8a8578] mb-4 tracking-wide">{col.h.toUpperCase()}</div>
              <ul className="space-y-2.5">
                {col.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="focus-ring text-[13.5px] text-[#B8B3A8] hover:text-[#E8E4DC] transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#33302b]">
          <div className="max-w-[1280px] mx-auto px-8 py-6 flex items-center justify-between text-[12.5px] text-[#6b6862]">
            <span>© 2026 Meridian Audio. Fictional product for demonstration purposes.</span>
            <span className="mono">MADE FOR THE RECORD</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
