import { Calendar, Music, User } from "lucide-react";

export default function Navbar({ onLoginClick, user }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 grid place-items-center text-white">
            <Music className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">Pulse Dance Studio</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#classes" className="hover:text-slate-900">Classes</a>
          <a href="#booking" className="hover:text-slate-900 flex items-center gap-1"><Calendar className="h-4 w-4" /> Book</a>
        </nav>

        <div>
          {user ? (
            <div className="flex items-center gap-3 text-sm">
              <div className="h-8 w-8 rounded-full bg-slate-200 grid place-items-center text-slate-600">
                <User className="h-4 w-4" />
              </div>
              <span className="text-slate-700">{user.name}</span>
            </div>
          ) : (
            <button onClick={onLoginClick} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">
              <User className="h-4 w-4" />
              <span>Log in</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
