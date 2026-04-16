import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-green-900/50 bg-[#0d160d]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-green-400">
          SEC
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="text-green-200 transition hover:text-green-400">
            Home
          </Link>
          <Link href="/team" className="text-green-200 transition hover:text-green-400">
            Team
          </Link>
          <Link href="/news" className="text-green-200 transition hover:text-green-400">
            News
          </Link>
        </div>
      </div>
    </nav>
  );
}
