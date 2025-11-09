import { useState } from "react";
import { CalendarPlus, Mail, Phone, User } from "lucide-react";

export default function Booking({ selectedClass, onLoginRequest, user }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "" });
  const [status, setStatus] = useState(null);

  const disabled = !user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (disabled) return onLoginRequest();

    // For now we just simulate success UI; backend can be wired later
    setStatus("success");
    setForm({ name: "", email: "", phone: "", date: "" });
  };

  return (
    <section id="booking" className="py-16 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Book your class</h2>
            <p className="text-slate-600 mt-2">Secure your spot in seconds. Log in to save your bookings.</p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-sm text-slate-600">Selected:</div>
              <div className="mt-1 font-medium text-slate-900">{selectedClass ? selectedClass.title : "No class chosen yet"}</div>
              {selectedClass && (
                <div className="text-sm text-slate-600">{selectedClass.time} • {selectedClass.location}</div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <label className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-slate-50">
                <User className="h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="flex-1 bg-transparent outline-none placeholder:text-slate-400"
                  required
                  disabled={disabled}
                />
              </label>

              <label className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-slate-50">
                <Mail className="h-4 w-4 text-slate-500" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="flex-1 bg-transparent outline-none placeholder:text-slate-400"
                  required
                  disabled={disabled}
                />
              </label>

              <label className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-slate-50">
                <Phone className="h-4 w-4 text-slate-500" />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="flex-1 bg-transparent outline-none placeholder:text-slate-400"
                  required
                  disabled={disabled}
                />
              </label>

              <label className="flex items-center gap-3 border rounded-lg px-3 py-2 bg-slate-50">
                <CalendarPlus className="h-4 w-4 text-slate-500" />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="flex-1 bg-transparent outline-none placeholder:text-slate-400"
                  required
                  disabled={disabled}
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={disabled}
              >
                {disabled ? "Log in to book" : "Confirm booking"}
              </button>

              {status === "success" && (
                <div className="text-green-700 bg-green-50 border border-green-200 rounded-md p-3 text-sm">
                  Booking confirmed! You will receive a confirmation email.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
