export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(236,72,153,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Move with confidence.</h1>
            <p className="mt-4 text-slate-600 text-lg">Modern dance classes for all levels — hip hop, contemporary, ballet, and more. Book your next session in seconds.</p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#booking" className="px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">Book a class</a>
              <a href="#classes" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-white">View schedule</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-100 to-violet-100 border border-slate-200 shadow-inner overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1600&auto=format&fit=crop" alt="Dancers" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
