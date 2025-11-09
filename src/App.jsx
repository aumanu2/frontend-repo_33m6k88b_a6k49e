import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classes from "./components/Classes";
import Booking from "./components/Booking";
import AuthModal from "./components/AuthModal";

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleLoginClick = () => setShowAuth(true);
  const handleCloseAuth = () => setShowAuth(false);
  const handleLogin = (data) => setUser(data);

  const welcome = useMemo(() => (user ? `Welcome back, ${user.name}!` : null), [user]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onLoginClick={handleLoginClick} user={user} />
      <main>
        <Hero />
        {welcome && (
          <div className="max-w-6xl mx-auto px-4 -mt-8">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 p-3 text-sm">
              {welcome}
            </div>
          </div>
        )}
        <Classes onSelect={(c) => setSelectedClass(c)} />
        <Booking selectedClass={selectedClass} onLoginRequest={handleLoginClick} user={user} />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Pulse Dance Studio</div>
          <div className="flex items-center gap-6">
            <a href="#classes" className="hover:text-slate-900">Classes</a>
            <a href="#booking" className="hover:text-slate-900">Book</a>
          </div>
        </div>
      </footer>

      <AuthModal open={showAuth} onClose={handleCloseAuth} onLogin={handleLogin} />
    </div>
  );
}

export default App;
