import { Clock3, MapPin } from "lucide-react";

const CLASSES = [
  { id: "hiphop", title: "Hip Hop", level: "All Levels", time: "Mon & Thu • 6:00 PM", location: "Studio A" },
  { id: "contemporary", title: "Contemporary", level: "Intermediate", time: "Tue • 7:30 PM", location: "Studio B" },
  { id: "ballet", title: "Ballet", level: "Beginner", time: "Wed • 5:30 PM", location: "Studio A" },
  { id: "latin", title: "Latin Fusion", level: "Open", time: "Sat • 11:00 AM", location: "Studio C" },
];

export default function Classes({ onSelect }) {
  return (
    <section id="classes" className="py-16 border-t border-slate-200/70 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Weekly schedule</h2>
            <p className="text-slate-600 mt-2">Pick a style you love and lock your spot.</p>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSES.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelect(c)}
              className="group text-left rounded-xl border border-slate-200 p-4 hover:shadow-md hover:border-slate-300 transition bg-gradient-to-b from-white to-slate-50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{c.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700">{c.level}</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                <Clock3 className="h-4 w-4" /> {c.time}
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" /> {c.location}
              </div>
              <div className="mt-4 text-sm text-slate-700 opacity-0 group-hover:opacity-100 transition">Tap to book this class</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
