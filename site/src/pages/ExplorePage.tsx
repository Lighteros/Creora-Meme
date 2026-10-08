import { Link, useSearchParams } from "react-router-dom";

const apps = [
  {
    slug: "blox-fruits-executor",
    user: "user_1075a186",
    title: "Blox Fruits Executor",
    blurb: "adasdasdas",
    views: 9,
    remixes: 0,
    date: "2026-09-30",
    cover: "/covers/blox.jpg",
  },
];

export function ExplorePage() {
  const [params] = useSearchParams();
  const sort = params.get("sort") || "new";

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-[36px] font-medium tracking-tight">Explore</h1>
      <p className="mt-2 max-w-xl text-[15px] text-foreground-secondary">
        Apps people built with Creora and published for anyone to open. Take a copy of any of them.
      </p>
      <div className="mt-6 flex gap-2 text-[13px]">
        {[
          ["new", "New"],
          ["viewed", "Most viewed"],
          ["remixed", "Most remixed"],
        ].map(([id, label]) => (
          <Link
            key={id}
            to={`/explore?sort=${id}`}
            className={`rounded-full px-3 py-1.5 ${sort === id ? "bg-white/10 text-white" : "text-foreground-muted hover:text-foreground"}`}
          >
            {label}
          </Link>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <li key={app.slug}>
            <Link to={`/u/${app.user}/${app.slug}`} className="group block overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
              <img src={app.cover} alt="" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="p-4">
                <p className="text-[15px] font-medium">{app.title}</p>
                <p className="mt-1 text-[13px] text-foreground-secondary">{app.blurb}</p>
                <p className="mt-3 text-[11px] tracking-[0.08em] text-foreground-muted uppercase">
                  {app.user} · {app.views} views · {app.remixes} remixes
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
