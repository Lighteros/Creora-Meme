import { Link } from "react-router-dom";

export function AgentsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-[11px] font-medium tracking-[0.2em] text-foreground-muted uppercase">Agents</p>
      <h1 className="mt-3 text-[36px] leading-[1.1] font-medium tracking-tight">An agent works for you on its own.</h1>
      <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-foreground-secondary">
        Give it instructions and the tools it may use, then run it now or on a schedule. It searches the web, reads pages, makes pictures and videos, works with your apps' data and keeps notes between runs.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[
          ["Tools", "Turn on only the tools it needs: web search, reading pages, pictures, videos and notes. Give it the apps whose data it may read, or read and write."],
          ["Schedules", "Run an agent whenever you like, or every hour, day or week at a time you pick. A scheduled run does the standing task you gave it."],
          ["Credits and caps", "Runs are paid with your credits, not the free daily uses. Each run has a cap, 200 credits unless you set another, and never spends past it."],
        ].map(([t, d]) => (
          <div key={t} className="border-t border-border pt-4">
            <h2 className="text-[15px] font-medium">{t}</h2>
            <p className="mt-2 text-[14px] leading-[1.6] text-foreground-secondary">{d}</p>
          </div>
        ))}
      </div>
      <Link to="/signin?redirect=/agents/console" className="mt-10 inline-flex h-11 items-center rounded-lg bg-link px-5 text-[13px] font-medium text-white">
        Create an agent
      </Link>
    </div>
  );
}
