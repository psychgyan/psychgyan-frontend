import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-[480px] min-h-screen bg-[#f8fafc] shadow-2xl flex flex-col items-center justify-center p-6 text-center">
      <div className="text-4xl font-extrabold text-[#091322] mb-2">404</div>
      <h2 className="text-lg font-bold text-slate-800 mb-2">Page Not Found</h2>
      <p className="text-xs text-slate-500 mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
