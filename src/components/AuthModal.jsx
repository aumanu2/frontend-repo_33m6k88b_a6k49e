import { useEffect } from "react";
import { Mail } from "lucide-react";

export default function AuthModal({ open, onClose, onLogin }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const handleDemoLogin = () => {
    onLogin({ id: "demo", name: "Guest" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-200">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900">Log in</h3>
          <p className="text-slate-600 mt-1">Use a demo account to explore booking. Full auth can be connected later.</p>

          <div className="mt-6 space-y-3">
            <button onClick={handleDemoLogin} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800">
              <Mail className="h-4 w-4" /> Continue as Guest
            </button>
          </div>
        </div>
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 text-right">
          <button onClick={onClose} className="text-slate-700 hover:text-slate-900">Close</button>
        </div>
      </div>
    </div>
  );
}
