import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight text-green-400 sm:text-6xl">
          Sustainable Energy Club
        </h1>

        <p className="mt-6 text-lg leading-8 text-green-200/80">
          We are a community of students passionate about building a cleaner,
          greener future. Through research, awareness campaigns, and hands-on
          projects, we explore renewable energy solutions — from solar and wind
          to hydrogen and beyond — and work to make sustainable living
          accessible to everyone.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/team"
            className="rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-green-500"
          >
            Meet Our Team
          </Link>
          <Link
            href="/news"
            className="rounded-full border border-green-600 px-8 py-3 text-sm font-semibold text-green-400 transition hover:bg-green-600/10"
          >
            Latest News
          </Link>
        </div>
      </div>
    </div>
  );
}
