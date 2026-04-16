import postsData from "@/data/posts.json";

const posts = [...postsData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

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
