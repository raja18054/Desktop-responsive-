const testimonials = [
  {
    name: "Sarah Johnson",
    review: "AI Note saves me hours every week. It's simple, fast, and reliable.",
  },
  {
    name: "David Miller",
    review: "The best note-taking app I've ever used. Highly recommended!",
  },
  {
    name: "Emily Brown",
    review: "Beautiful design and powerful AI features. My productivity has improved a lot.",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="container py-20">
      <h2 className="section-title">
        What Our Users Say
      </h2>

      <p className="section-subtitle">
        Trusted by thousands of users worldwide.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:shadow-xl transition"
          >
            <div className="text-yellow-400 text-xl mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-300 italic">
              "{item.review}"
            </p>

            <h3 className="mt-5 font-bold text-lg">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
