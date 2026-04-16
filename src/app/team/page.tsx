const members = [
  { name: "Kavya", role: "Founder" },
  { name: "Kavin", role: "Founder" },
];

export default function TeamPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-green-400">
          Our Team
        </h1>
        <p className="mt-4 text-green-200/70">
          The people behind the Sustainable Energy Club.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {members.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-green-900/50 bg-[#142014] p-8 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-900/60 text-3xl text-green-400">
                {member.name[0]}
              </div>
              <h2 className="mt-4 text-xl font-semibold text-green-300">
                {member.name}
              </h2>
              <p className="mt-1 text-sm text-green-400/70">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
