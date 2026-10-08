import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  BookOpen,
  Bot,
  Code2,
  Coins,
  Compass,
  Cpu,
  MessagesSquare,
  ScrollText,
  Search,
  SquarePen,
  X_HANDLE,
  X_URL,
} from "../lib/icons";

const nav = [
  { to: "/chat", label: "New chat", icon: SquarePen, end: false },
  { to: "/agents", label: "Agents", icon: Bot },
  { to: "/explore", label: "Explore", icon: Compass },
  { to: "/forum", label: "Community", icon: MessagesSquare },
  { to: "/docs/api", label: "API", icon: Code2 },
  { to: "/tokens", label: "Tokens", icon: Coins },
  { to: "/network", label: "GPU network", icon: Cpu },
  { to: "/docs", label: "Docs", icon: BookOpen },
  { to: "/devlog", label: "Dev log", icon: ScrollText },
];

export function AppShell() {
  const [open, setOpen] = useState(true);
  const loc = useLocation();

  return (
    <div className="flex min-h-dvh bg-background text-foreground">
      <aside
        aria-label="Sidebar"
        className={`sticky top-0 z-30 hidden h-dvh shrink-0 overflow-hidden transition-[width] duration-500 lg:block ${open ? "w-72" : "w-0"}`}
      >
        <div className="flex h-full w-72 flex-col bg-background/55 shadow-[1px_0_0_color-mix(in_oklch,var(--foreground)_8%,transparent)] backdrop-blur-2xl">
          <div className="flex h-16 shrink-0 items-center justify-between gap-2 pr-2 pl-4">
            <Link to="/chat" aria-label="Creora home" className="inline-flex">
              <img alt="Creora" width={30} height={30} src="/logo.png" className="select-none" />
            </Link>
            <button type="button" aria-label="Close sidebar" onClick={() => setOpen(false)} className="size-7 rounded-full text-foreground-secondary hover:bg-muted">
              <svg viewBox="0 0 24 24" className="mx-auto size-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 3v18" />
                <path d="m16 15-3-3 3-3" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-2">
            <nav aria-label="Creora">
              <ul className="flex flex-col gap-0.5">
                {nav.map(({ to, label, icon: Icon }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `flex h-10 w-full items-center gap-3 rounded-lg px-3 text-[14px] transition-colors ${
                          isActive || (to === "/chat" && loc.pathname === "/chat")
                            ? "bg-foreground/[0.07] text-foreground"
                            : "text-foreground/80 hover:bg-foreground/[0.05] hover:text-foreground"
                        }`
                      }
                    >
                      <Icon className="size-[18px] shrink-0 text-foreground/70" />
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-auto border-t border-border px-3 py-3">
            <a href={X_URL} target="_blank" rel="noopener noreferrer" className="mb-2 flex items-center gap-2 px-2 text-[12px] text-foreground-secondary hover:text-foreground">
              {X_HANDLE}
            </a>
            <Link to="/signin?redirect=/settings/billing#plans" className="flex h-10 items-center justify-center rounded-lg bg-link text-[13px] font-medium text-white">
              Go Pro
            </Link>
            <Link to="/signin" className="mt-2 flex h-10 items-center justify-center rounded-lg text-[13px] text-foreground-secondary hover:bg-muted hover:text-foreground">
              Sign in
            </Link>
          </div>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between gap-3 px-4 lg:px-6">
          <div className="flex items-center gap-2">
            {!open && (
              <button type="button" aria-label="Open sidebar" onClick={() => setOpen(true)} className="mr-1 hidden size-8 rounded-full text-foreground-secondary hover:bg-muted lg:inline-flex">
                <svg viewBox="0 0 24 24" className="m-auto size-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                  <path d="m16 15-3-3 3-3" />
                </svg>
              </button>
            )}
            <Link to="/" className="lg:hidden">
              <img alt="Creora" width={28} height={28} src="/logo.png" />
            </Link>
          </div>
          <button type="button" className="hidden h-9 items-center gap-2 rounded-full bg-foreground/[0.05] px-3 text-[13px] text-foreground-muted md:inline-flex">
            <Search className="size-3.5" />
            Search
            <kbd className="ml-2 text-[11px]">⌘K</kbd>
          </button>
          <div className="flex items-center gap-2">
            <Link to="/signin?redirect=/settings/billing#plans" className="hidden h-8 items-center rounded-full bg-link px-3 text-[11px] font-medium tracking-[0.08em] text-white uppercase sm:inline-flex">
              Go Pro
            </Link>
            <Link to="/signin" className="h-8 rounded-full px-3 text-[13px] text-foreground-secondary hover:text-foreground">
              Sign in
            </Link>
          </div>
        </header>
        <main className="min-h-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
