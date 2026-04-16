const posts = [
  {
    title: "Global Solar Capacity Surpasses 2 Terawatts",
    date: "2026-04-15",
    summary:
      "The world has officially crossed the 2 TW mark for installed solar photovoltaic capacity, driven by record deployments in India, China, and Brazil over the past year.",
  },
  {
    title: "Offshore Wind Farm Powers 1.5 Million Homes in the North Sea",
    date: "2026-04-14",
    summary:
      "A newly completed offshore wind installation in the North Sea is now generating enough electricity to power 1.5 million households, marking a milestone for European renewable energy.",
  },
  {
    title: "Green Hydrogen Costs Drop Below $2/kg for the First Time",
    date: "2026-04-13",
    summary:
      "Advances in electrolyzer technology and cheaper renewable electricity have pushed green hydrogen production costs below the $2 per kilogram threshold, making it competitive with fossil-fuel alternatives.",
  },
  {
    title: "Kenya Achieves 90% Renewable Electricity Grid",
    date: "2026-04-12",
    summary:
      "Kenya now generates over 90% of its electricity from renewable sources — primarily geothermal and wind — setting an example for developing nations worldwide.",
  },
];

export default function NewsPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-center text-4xl font-bold tracking-tight text-green-400">
          Energy News
        </h1>
        <p className="mt-4 text-center text-green-200/70">
          Daily updates on sustainable energy innovations around the world.
        </p>

        <div className="mt-12 space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-green-900/50 bg-[#142014] p-6"
            >
              <time className="text-xs font-medium text-green-500/70">
                {post.date}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-green-300">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-green-200/70">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
