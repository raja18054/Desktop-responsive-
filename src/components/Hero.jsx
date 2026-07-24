function Hero() {
  return (
    <section className="container py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Streamline Your Workflow with{" "}
        <span className="gradient-text">NovaFlow</span>
      </h1>

      <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
        Manage projects, collaborate with your team, and track progress from one
        beautiful workspace designed for modern businesses.
      </p>

      <div className="flex justify-center gap-4 mt-10">
        <button className="btn-primary">Start Free</button>
        <button className="btn-secondary">Book a Demo</button>
      </div>

      <div className="mt-16 bg-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Workspace Overview
        </h2>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-400">Projects</p>
            <h3 className="text-3xl font-bold">24</h3>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-400">Team</p>
            <h3 className="text-3xl font-bold">18</h3>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-400">Revenue</p>
            <h3 className="text-3xl font-bold">$24K</h3>
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            <p className="text-gray-400">Growth</p>
            <h3 className="text-3xl font-bold text-green-400">+18%</h3>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 text-left">
          <h3 className="font-bold mb-4">Recent Activity</h3>

          <div className="space-y-3 text-gray-300">
            <p>✅ New project created</p>
            <p>📈 Monthly report generated</p>
            <p>👥 5 new team members joined</p>
            <p>💳 Payment received successfully</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
