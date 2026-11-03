import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white mt-16">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-8"
        style={{ backgroundColor: "#4a5b9a" }}
      >
        we
      </div>
      <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">404</p>
      <h1 className="text-3xl font-bold text-[#1a1a2e] mb-4">Page Not Found</h1>
      <p className="text-gray-500 max-w-sm mb-10">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
          style={{ backgroundColor: "#4a5b9a" }}
        >
          Go Home <ArrowRight size={16} />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-gray-200 hover:border-[#4a5b9a] text-[#1a1a2e] transition-colors"
        >
          View Services
        </Link>
      </div>
    </div>
  );
}
