function Hero() {
  return (
    <section className="container py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Write Smarter with{" "}
        <span className="gradient-text">novafly</span>
      </h1>

      <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
        AI Note helps you organize ideas, summarize notes, and collaborate
        with your team—all in one place.
      </p>

      <div className="flex justify-center gap-4 mt-10">
        <button className="btn-primary">
          Get Started
        </button>

        <button className="btn-secondary">
          Watch Demo
        </button>
      </div>

      <div className="mt-16 bg-slate-900 rounded-2xl p-10 shadow-2xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-4">
          AI Dashboard Preview
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-600 h-24 rounded-lg"></div>
          <div className="bg-purple-600 h-24 rounded-lg"></div>
          <div className="bg-cyan-600 h-24 rounded-lg"></div>
        </div>

        <div className="bg-slate-800 h-40 rounded-xl mt-6"></div>
      </div>
    </section>
  );
}

export default Hero;
