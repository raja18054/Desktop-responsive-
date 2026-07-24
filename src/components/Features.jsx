const features = [
  {
    title: "AI Summaries",
    desc: "Generate smart summaries of your long notes instantly.",
    icon: "🤖",
  },
  {
    title: "Cloud Sync",
    desc: "Access your notes anytime from any device.",
    icon: "☁️",
  },
  {
    title: "Voice Notes",
    desc: "Convert your voice into editable text in seconds.",
    icon: "🎤",
  },
  {
    title: "Team Collaboration",
    desc: "Share notes and work together with your team.",
    icon: "👥",
  },
];

function Features() {
  return (
    <section id="features" className="container py-20">
      <h2 className="section-title">
        Powerful Features
      </h2>

      <p className="section-subtitle">
        Everything you need to create, organize and manage your notes efficiently.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:scale-105 transition duration-300"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>

            <h3 className="text-xl font-bold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-400">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
