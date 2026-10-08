import { Link, useParams } from "react-router-dom";

export function ProjectPage() {
  const { user = "user_1075a186", slug = "blox-fruits-executor" } = useParams();
  const title = slug
    .split("-")
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="min-h-dvh bg-[#0b0d12] text-white">
      <header className="flex items-center justify-between px-5 py-4">
        <Link to="/" className="inline-flex items-center gap-2">
          <img src="/logo.png" alt="Creora" width={26} height={26} />
        </Link>
        <Link to="/explore" className="text-[13px] text-white/70 hover:text-white">
          Explore
        </Link>
      </header>
      <div className="mx-auto max-w-4xl px-5 py-8">
        <img src="/covers/blox.jpg" alt="" className="aspect-[16/9] w-full rounded-2xl object-cover" />
        <h1 className="mt-6 text-[32px] font-medium tracking-tight">{title}</h1>
        <p className="mt-2 text-[14px] text-white/60">
          @{user} · published on Creora
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">adasdasdas</p>
        <div className="mt-6 flex gap-3">
          <Link to={`/signin?redirect=/u/${user}/${slug}`} className="inline-flex h-10 items-center rounded-lg bg-link px-4 text-[13px] font-medium">
            Remix
          </Link>
          <Link to="/explore" className="inline-flex h-10 items-center rounded-lg bg-white/8 px-4 text-[13px]">
            More apps
          </Link>
        </div>
      </div>
    </div>
  );
}
