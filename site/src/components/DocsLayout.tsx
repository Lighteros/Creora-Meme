import { useMemo, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { docsNav } from "../data/docsNav";
import { ArrowUpRight, Search, X_HANDLE, X_URL } from "../lib/icons";

export function DocsLayout() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return docsNav;
    return docsNav
      .map((g) => ({
        ...g,
        items: g.items.filter((i) => i.label.toLowerCase().includes(query)),
      }))
      .filter((g) => g.items.length);
  }, [q]);

  return (
    <div className="min-h-dvh bg-[#0b0d12] text-[#f4f6fa]">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-[#0b0d12]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/docs" className="inline-flex items-center gap-2">
            <img src="/logo.png" alt="Creora" width={26} height={26} />
            <span className="text-[13px] font-medium">Docs</span>
          </Link>
          <nav className="top-links hidden items-center gap-5 text-[13px] md:flex" aria-label="Elsewhere">
            <Link className="text-foreground-secondary hover:text-foreground" to="/devlog">
              Dev log
            </Link>
            <a className="text-foreground-secondary hover:text-foreground" href={X_URL} target="_blank" rel="noopener noreferrer">
              {X_HANDLE}
            </a>
            <Link to="/chat" aria-label="Start creating" className="inline-flex items-center gap-1.5 rounded-full bg-link px-3 py-1.5 text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              Start creating
              <ArrowUpRight className="size-3" />
            </Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <label className="mb-4 flex h-9 items-center gap-2 rounded-lg bg-white/5 px-3 text-[13px] text-foreground-muted">
            <Search className="size-3.5" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search docs"
              className="w-full bg-transparent text-foreground outline-none placeholder:text-foreground-muted"
            />
          </label>
          <nav aria-label="Docs">
            {filtered.map((group) => (
              <div key={group.title} className="mb-5">
                <p className="mb-1.5 px-2 text-[11px] font-medium tracking-[0.16em] text-foreground-muted uppercase">{group.title}</p>
                <ul className="flex flex-col">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          `block rounded-md px-2 py-1.5 text-[13px] ${isActive ? "bg-white/8 text-white" : "text-foreground-secondary hover:bg-white/5 hover:text-white"}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 pb-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
