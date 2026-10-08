import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Clapperboard,
  Copy,
  Hammer,
  ImageIcon,
  MessageCircle,
  TOKEN_CA,
  X_HANDLE,
  X_URL,
} from "../lib/icons";
import { Partners } from "./Partners";

const products = [
  { name: "Chat", href: "/chat?mode=chat", copy: "Uncensored conversations, kept private to you. Ask anything and get a straight answer." },
  { name: "Images", href: "/chat?mode=image", copy: "A picture from a sentence, without the filter. Open it, download it, it is yours." },
  { name: "Video", href: "/chat?mode=video", copy: "Five second clips from a sentence, without the filter, made while you keep talking." },
  { name: "Build", href: "/chat?mode=build", copy: "Describe an app in a sentence. The agent writes it, gives it a database, runs it live and publishes it at your name." },
  { name: "Agents", href: "/agents", copy: "An AI that works for you on its own. Give it a task and the tools it may use, and run it now or on a schedule." },
];

const builderPoints = [
  ["Reads before it writes", "It lists your files, reads the ones that matter and edits with exact replacements. Every call is on screen as it happens."],
  ["A database you never set up", "Say “save it” and it creates the table, decides who may read and write it, and types the client your app imports."],
  ["A real bundler", "Every change recompiles in the preview beside the code. What you see is the bundle a visitor gets."],
  ["Published at your name", "A public page that stays put through renames. Publish again, roll back, or take it down."],
  ["History you can rewind", "Every run leaves a checkpoint. Restoring one saves where you are first, so nothing is lost."],
  ["Explore and remix", "Anything public can be copied into your workspace in one click, with where it came from kept."],
];

function LiveDot() {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] whitespace-nowrap text-link uppercase">
      <span aria-hidden className="relative flex size-1.5">
        <span className="absolute inset-0 rounded-full bg-current opacity-60 motion-safe:animate-[landing-pulse_2.4s_ease-in-out_infinite]" />
        <span className="relative size-1.5 rounded-full bg-current" />
      </span>
      Live
    </span>
  );
}

function CaCopy() {
  const [copied, setCopied] = useState(false);
  const short = `${TOKEN_CA.slice(0, 6)}…${TOKEN_CA.slice(-4)}`;

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(TOKEN_CA);
    } catch {
      const el = document.createElement("textarea");
      el.value = TOKEN_CA;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={TOKEN_CA}
      aria-label={copied ? "Contract address copied" : `Copy contract address ${TOKEN_CA}`}
      className="mt-7 inline-flex max-w-full items-center gap-2.5 rounded-full bg-white/75 px-3.5 py-2 text-left shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)] backdrop-blur-md transition-[color,background-color,box-shadow,transform] duration-300 hover:-translate-y-px hover:bg-white hover:shadow-[inset_0_0_0_1px_rgba(47,109,246,0.35),0_8px_20px_-10px_rgba(47,109,246,0.6)] motion-safe:animate-[landing-rise_0.7s_var(--landing-ease)_0.2s_both]"
    >
      <span className="shrink-0 text-[10px] font-medium tracking-[0.2em] text-link uppercase">CA</span>
      <span className="min-w-0 font-mono text-[12px] leading-none tracking-tight text-foreground sm:text-[13px]">
        <span className="sm:hidden">{short}</span>
        <span className="hidden truncate sm:inline">{TOKEN_CA}</span>
      </span>
      <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(47,109,246,0.1)] text-link">
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}

function Cta({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="chamfer-sm group/cta inline-flex items-center gap-2 bg-link px-5 py-3 text-[11px] font-medium tracking-[0.14em] text-white uppercase transition-[filter,transform] duration-300 hover:brightness-110"
    >
      {children}
      <ArrowUpRight className="size-3.5 transition-transform duration-300 motion-safe:group-hover/cta:translate-x-0.5 motion-safe:group-hover/cta:-translate-y-0.5" />
    </Link>
  );
}

export function LandingPage() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [section, setSection] = useState(1);

  useEffect(() => {
    document.title = "Creora · Private AI meets limitless creation.";
    const ids = ["top", "suite", "private", "builder", "launchpad", "start"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const i = ids.indexOf(visible.target.id);
          if (i >= 0) setSection(i + 1);
        }
      },
      { threshold: 0.35 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function start(e?: FormEvent, mode?: string) {
    e?.preventDefault();
    const q = new URLSearchParams();
    if (mode) q.set("mode", mode);
    if (prompt.trim()) q.set("q", prompt.trim());
    navigate(`/chat${q.toString() ? `?${q}` : ""}`);
  }

  return (
    <div className="landing h-dvh bg-white p-3 sm:p-5">
      <div className="relative size-full overflow-hidden rounded-[28px] bg-white sm:rounded-[36px]">
        <div className="no-scrollbar absolute inset-0 overflow-x-hidden overflow-y-auto scroll-smooth">
          <section data-landing-section id="top" className="relative flex min-h-[calc(100dvh-24px)] flex-col overflow-hidden sm:min-h-[calc(100dvh-40px)]">
            <video autoPlay loop muted playsInline disablePictureInPicture preload="metadata" poster="/landing/hero-poster.jpg" aria-hidden tabIndex={-1} className="landing-hero-video pointer-events-none absolute inset-0 size-full object-cover motion-reduce:hidden">
              <source src="/landing/hero.mp4" type="video/mp4" />
            </video>
            <img src="/landing/hero-poster.jpg" alt="" aria-hidden className="absolute inset-0 hidden size-full object-cover motion-reduce:block" />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white" />
            <div className="relative z-20 flex items-center justify-between px-4 pt-5 sm:px-10 sm:pt-8">
              <Link to="/" aria-label="Creora home" className="inline-flex shrink-0 items-center">
                <img alt="Creora" draggable={false} width={40} height={40} className="shrink-0 select-none" src="/logo.png" />
              </Link>
              <div className="flex items-center gap-3.5 sm:gap-7">
                <Link to="/devlog" className="hidden text-[11px] font-medium tracking-[0.1em] whitespace-nowrap text-foreground uppercase transition-colors hover:text-foreground-secondary min-[360px]:inline xl:hidden sm:tracking-[0.14em]">
                  Dev log
                </Link>
                <Link to="/signin" className="text-[11px] font-medium tracking-[0.1em] whitespace-nowrap text-foreground uppercase transition-colors hover:text-foreground-secondary sm:tracking-[0.14em]">
                  Sign in
                </Link>
                <Cta to="/chat">
                  <span className="hidden sm:inline">Start creating</span>
                  <span className="sm:hidden">Start</span>
                </Cta>
              </div>
            </div>
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-20 pb-24 text-center text-foreground sm:pt-24">
              <h1 className="font-display text-[38px] leading-[0.92] font-normal tracking-[-0.04em] text-balance sm:text-[68px] lg:text-[88px] xl:text-[108px]">
                Private AI meets <br className="hidden sm:inline" />
                limitless creation.
              </h1>
              <p className="mt-8 max-w-md text-[12px] leading-[1.8] font-medium tracking-[0.3em] uppercase opacity-90 motion-safe:animate-[landing-rise_0.7s_var(--landing-ease)_0.13s_both] sm:text-[14px]">
                Chat. Create. Build. Own it.
              </p>
              <CaCopy />
              <div className="relative mx-auto mt-9 w-full max-w-[680px] text-left sm:mt-11">
                <div aria-hidden className="chat-breathe pointer-events-none absolute -inset-x-10 -top-6 -bottom-12 -z-10 rounded-[48px] bg-[radial-gradient(60%_55%_at_50%_50%,rgba(47,109,246,0.30),rgba(75,189,240,0.14)_55%,transparent_75%)] blur-2xl" />
                <div className="group/prompt relative rounded-[26px] motion-safe:animate-[landing-prompt-in_0.9s_var(--landing-ease)_0.2s_both]">
                  <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-[rgba(15,23,42,0.08)] ring-inset" />
                  <form onSubmit={start} className="relative rounded-[26px] bg-white/80 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_28px_60px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl backdrop-saturate-150">
                    <label htmlFor="landing-prompt" className="sr-only">Ask Creora anything</label>
                    <textarea
                      id="landing-prompt"
                      rows={2}
                      maxLength={8000}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          start();
                        }
                      }}
                      placeholder="Ask anything, or describe a picture, a video or an app…"
                      className="block w-full resize-none bg-transparent px-5 pt-[18px] pb-2 text-[16px] leading-relaxed text-foreground outline-none placeholder:text-foreground-muted sm:text-[17px]"
                    />
                    <div className="flex items-center justify-between gap-3 px-4 pb-3.5">
                      <p className="hidden text-[12px] text-foreground-muted sm:block">
                        <kbd className="font-sans font-medium text-foreground-secondary">Enter</kbd> to start,{" "}
                        <kbd className="font-sans font-medium text-foreground-secondary">Shift</kbd> and{" "}
                        <kbd className="font-sans font-medium text-foreground-secondary">Enter</kbd> for a new line
                      </p>
                      <button
                        type="submit"
                        aria-label="Send"
                        disabled={!prompt.trim()}
                        className={`ml-auto flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${prompt.trim() ? "bg-link text-white" : "bg-[rgba(15,23,42,0.06)] text-foreground-muted"}`}
                      >
                        <ArrowUp className="size-[18px]" />
                      </button>
                    </div>
                  </form>
                  <div aria-hidden className="landing-prompt-trace pointer-events-none absolute inset-0 rounded-[26px]" />
                  <div aria-hidden className="pointer-events-none absolute inset-0 motion-safe:animate-[landing-fade-in_0.9s_ease-out_1.5s_both]">
                    <div className="absolute inset-0 rounded-[26px] opacity-60 transition-opacity duration-500 group-focus-within/prompt:opacity-100 group-hover/prompt:opacity-80">
                      <div className="chat-ring chat-ring-live absolute inset-0 rounded-[26px]" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:gap-2">
                  {[
                    { label: "Picture", mode: "image", Icon: ImageIcon, delay: "0.6s" },
                    { label: "Video", mode: "video", Icon: Clapperboard, delay: "0.67s" },
                    { label: "Build", mode: "build", Icon: Hammer, delay: "0.74s" },
                    { label: "Ask", mode: "chat", Icon: MessageCircle, delay: "0.81s" },
                  ].map(({ label, mode, Icon, delay }) => (
                    <button
                      key={label}
                      type="button"
                      style={{ animationDelay: delay }}
                      onClick={() => start(undefined, mode)}
                      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white/70 px-3 text-[12.5px] font-medium text-foreground-secondary shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)] backdrop-blur-md transition-[color,background-color,box-shadow,transform] duration-300 hover:-translate-y-px hover:bg-white hover:text-foreground hover:shadow-[inset_0_0_0_1px_rgba(47,109,246,0.35),0_8px_20px_-10px_rgba(47,109,246,0.6)] motion-safe:animate-[landing-rise_0.6s_var(--landing-ease)_both] sm:px-3.5 sm:text-[13px]"
                    >
                      <Icon className="size-3.5 text-link" />
                      {label}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-center text-[12.5px] font-medium text-foreground-secondary motion-safe:animate-[landing-rise_0.6s_var(--landing-ease)_0.95s_both]">
                  Free to try, no account needed: 3 messages a day.
                </p>
              </div>
            </div>
          </section>

          <main>
            <Partners />

            <section id="suite" aria-labelledby="suite-heading" className="relative scroll-mt-4 pt-16 pb-8 sm:pt-24 sm:pb-12">
              <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
                <div className="grid gap-8 lg:grid-cols-12">
                  <p className="text-[11px] font-medium tracking-[0.24em] text-foreground-secondary uppercase lg:col-span-3 lg:pt-3">Private AI · Uncensored</p>
                  <h2 id="suite-heading" className="font-display text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.08] font-light tracking-[-0.03em] text-balance lg:col-span-9">
                    One private place for everything you make with AI.{" "}
                    <span className="text-foreground-muted">Talk, make pictures and video without the filter, and build apps that are yours. All of it open now.</span>
                  </h2>
                </div>
                <ul aria-label="Products" className="mt-16 sm:mt-24">
                  {products.map((p) => (
                    <li key={p.name} className="border-t border-border last:border-b">
                      <Link to={p.href} className="group/row grid gap-3 py-7 sm:py-9 lg:grid-cols-12 lg:items-end lg:gap-8">
                        <span className="flex items-start justify-between gap-4 lg:col-span-5">
                          <span className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.86] font-normal tracking-[-0.05em] transition-transform duration-500 ease-[var(--landing-ease)] motion-safe:group-hover/row:translate-x-3">
                            {p.name}
                          </span>
                          <ArrowUpRight className="mt-2 size-6 shrink-0 text-link transition-transform duration-500 motion-safe:group-hover/row:translate-x-1 motion-safe:group-hover/row:-translate-y-1 sm:size-8 lg:hidden" />
                        </span>
                        <span className="max-w-md text-[15px] leading-[1.6] text-foreground-secondary lg:col-span-5 lg:pb-2">{p.copy}</span>
                        <span className="flex items-center justify-between gap-4 lg:col-span-2 lg:justify-end lg:pb-3">
                          <LiveDot />
                          <ArrowUpRight className="hidden size-7 text-link transition-transform duration-500 motion-safe:group-hover/row:translate-x-1 motion-safe:group-hover/row:-translate-y-1 lg:block" />
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li className="border-t border-border last:border-b">
                    <div className="grid gap-3 py-7 sm:py-9 lg:grid-cols-12 lg:items-end lg:gap-8">
                      <span className="flex items-start justify-between gap-4 lg:col-span-5">
                        <span className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.86] font-normal tracking-[-0.05em]">Launch</span>
                      </span>
                      <span className="max-w-md text-[15px] leading-[1.6] text-foreground-secondary lg:col-span-5 lg:pb-2">
                        A fair launch token for any site you build, on Robinhood Chain or Arbitrum.
                      </span>
                      <span className="lg:col-span-2" />
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="private" aria-labelledby="private-heading" className="relative scroll-mt-4 px-3 sm:px-5">
              <div className="relative isolate overflow-hidden rounded-[24px] bg-[#050912] text-white sm:rounded-[32px]">
                <video autoPlay loop muted playsInline disablePictureInPicture preload="metadata" poster="/landing/hero-poster.jpg" aria-hidden tabIndex={-1} className="landing-hero-video pointer-events-none absolute inset-0 size-full object-cover opacity-70 [filter:invert(1)_hue-rotate(180deg)_saturate(1.5)] motion-reduce:hidden">
                  <source src="/landing/hero.mp4" type="video/mp4" />
                </video>
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050912]/80 via-[#050912]/20 to-[#050912]" />
                <div className="relative mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-10 sm:py-36">
                  <div className="flex flex-col gap-6">
                    <p className="text-[11px] font-medium tracking-[0.24em] uppercase text-white/60">Private by design</p>
                    <h2 id="private-heading" className="font-display max-w-4xl text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.92] font-normal tracking-[-0.045em] text-balance">
                      What you ask stays yours.
                    </h2>
                    <p className="max-w-lg text-[15px] leading-[1.65] text-white/65">
                      AI you can talk to freely. Creora runs no analytics, trains nothing on you and keeps only what it needs to work.
                    </p>
                  </div>
                  <ul className="mt-16 grid gap-x-10 gap-y-10 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      ["No tracking", "No analytics, no ad pixels, no third party measurement. Nobody is profiling what you ask."],
                      ["Not trained on you", "Creora trains no model on what you say or make. Your chats are kept for you to come back to, and for nothing else."],
                      ["No email needed", "Sign in with a wallet and nothing else. Email or Google work too, if you would rather."],
                      ["Delete means delete", "Deleting a chat deletes it and every picture and video made in it. Deleting your account deletes everything."],
                    ].map(([t, d]) => (
                      <li key={t} className="flex flex-col gap-2 border-t border-white/15 pt-5">
                        <h3 className="text-[15px] font-medium tracking-tight">{t}</h3>
                        <p className="text-[14px] leading-[1.6] text-white/60">{d}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-6 sm:mt-20 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-[15px] text-white/85">Chat, pictures, video and the builder all work this way, with three free uses every day.</p>
                    <Link to="/privacy" className="group/more inline-flex items-center gap-1.5 self-start text-[11px] font-medium tracking-[0.14em] text-white uppercase transition-colors hover:text-white/70 lg:self-auto">
                      Read the privacy policy
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 motion-safe:group-hover/more:translate-x-0.5 motion-safe:group-hover/more:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section id="builder" aria-labelledby="builder-heading" className="relative scroll-mt-4 py-24 sm:py-32">
              <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="flex flex-col gap-6 lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      <p className="text-[11px] font-medium tracking-[0.24em] text-foreground-secondary uppercase">Build</p>
                      <LiveDot />
                    </div>
                    <h2 id="builder-heading" className="font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.92] font-normal tracking-[-0.045em] text-balance">
                      An app from a sentence.
                    </h2>
                  </div>
                  <div className="flex flex-col items-start gap-8 lg:col-span-5">
                    <p className="max-w-md text-[15px] leading-[1.65] text-foreground-secondary">
                      Say what you want. The agent builds it the way you would if you had all day, runs it live beside the code, and publishes it when you are happy with it.
                    </p>
                    <Cta to="/chat?mode=build">Start building</Cta>
                  </div>
                </div>
                <EditorPreview />
                <ul className="mt-16 grid gap-x-10 gap-y-10 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
                  {builderPoints.map(([t, d]) => (
                    <li key={t} className="flex flex-col gap-2 border-t border-border pt-5">
                      <h3 className="text-[15px] font-medium tracking-tight">{t}</h3>
                      <p className="text-[14px] leading-[1.6] text-foreground-secondary">{d}</p>
                    </li>
                  ))}
                </ul>
                <div id="showcase" className="mt-24 scroll-mt-4 sm:mt-32">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-none font-normal tracking-[-0.035em]">Made with Creora</h3>
                    <Link to="/explore" className="group/more inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] text-foreground uppercase transition-colors hover:text-foreground-secondary">
                      Explore everything
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 motion-safe:group-hover/more:translate-x-0.5 motion-safe:group-hover/more:-translate-y-0.5" />
                    </Link>
                  </div>
                  <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                    <li className="transition-transform duration-300 motion-safe:hover:-translate-y-0.5">
                      <div className="chamfer h-full bg-[var(--landing-stroke)] p-px">
                        <div className="chamfer size-full bg-background">
                          <Link to="/u/user_1075a186/blox-fruits-executor" className="group flex h-full flex-col">
                            <span className="aspect-[16/10] w-full overflow-hidden border-b border-border">
                              <img src="/covers/blox.jpg" alt="" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                            </span>
                            <span className="flex flex-col gap-0.5 px-3 py-3 sm:px-5 sm:py-4">
                              <span className="truncate text-[14px] font-medium">Blox Fruits Executor</span>
                              <span className="flex items-center justify-between gap-2 text-[11px] tracking-[0.06em] text-foreground-muted uppercase">
                                <span className="truncate">@user_1075a186</span>
                                <span className="shrink-0 tabular-nums">0 remixed</span>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="launchpad" aria-labelledby="launchpad-heading" className="relative scroll-mt-4 py-24 sm:py-36">
              <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                  <div className="flex flex-col gap-6 lg:col-span-8">
                    <p className="text-[11px] font-medium tracking-[0.24em] text-foreground-secondary uppercase">Launchpad · Robinhood Chain · Arbitrum</p>
                    <h2 id="launchpad-heading" className="font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.92] font-normal tracking-[-0.045em] text-balance">
                      Every site can have a token.
                    </h2>
                    <p className="max-w-lg text-[15px] leading-[1.65] text-foreground-secondary">
                      Optional, one per site, and welded to the thing you built: the token page shows the site, and the site's page shows the token. A name, a ticker, a description and a wallet prompt. That is the whole form.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-5 lg:col-span-4 lg:justify-end">
                    <Link to="/tokens" className="group/more inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.14em] text-foreground uppercase transition-colors hover:text-foreground-secondary">
                      Tokens already live
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 motion-safe:group-hover/more:translate-x-0.5 motion-safe:group-hover/more:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
                <figure className="mt-12 sm:mt-16">
                  <svg viewBox="0 0 1120 260" aria-hidden className="h-44 w-full sm:h-64" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="launch-fill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#2f6df6" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#2f6df6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[52, 104, 156, 208].map((y) => (
                      <line key={y} x1="0" x2="1120" y1={y} y2={y} className="stroke-border" strokeWidth="1" />
                    ))}
                    <path d="M0 236 C 220 234, 420 210, 560 150 S 720 60, 760 44 L 760 260 L 0 260 Z" fill="url(#launch-fill)" className="landing-chart-fill" />
                    <path d="M0 236 C 220 234, 420 210, 560 150 S 720 60, 760 44" pathLength="1" strokeDasharray="1" fill="none" className="landing-chart-curve stroke-link" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="760" x2="1120" y1="44" y2="44" className="landing-chart-after stroke-foreground/50" strokeWidth="2" strokeDasharray="6 8" />
                    <line x1="760" x2="760" y1="28" y2="250" className="landing-chart-after stroke-foreground/25" strokeWidth="1" strokeDasharray="2 5" />
                    <circle cx="760" cy="44" r="7" className="landing-chart-point origin-center fill-link/25" />
                    <circle cx="760" cy="44" r="3.5" className="landing-chart-after fill-link" />
                  </svg>
                  <figcaption className="relative mt-2 flex justify-between gap-4 text-[10px] font-medium tracking-[0.18em] text-foreground-muted uppercase">
                    <span>The curve · everyone buys here</span>
                    <span className="absolute left-[67.86%] hidden -translate-x-1/2 whitespace-nowrap xl:block">Graduation · same price</span>
                    <span className="text-right">The pool · trading carries on</span>
                  </figcaption>
                </figure>
                <ul className="mt-16 grid gap-x-10 gap-y-10 sm:mt-20 sm:grid-cols-3">
                  {[
                    ["Fair by construction", "One curve, one price for everybody from the first second. No allocation, no whitelist, no presale: the creator’s first buy is on the same curve, at the same price as yours."],
                    ["Graduates into Uniswap v4", "When the raise fills, the curve closes and becomes a v4 pool at the price it closed at, seeded with the raise and the unsold supply. Trading carries on there."],
                    ["Your fee, on chain", "Half of the fee on every trade on the curve is the creator’s, credited on chain as it happens and pulled when you want it. Creora never holds a key or pays gas."],
                  ].map(([t, d]) => (
                    <li key={t} className="flex flex-col gap-2 border-t border-border pt-5">
                      <h3 className="text-[15px] font-medium tracking-tight">{t}</h3>
                      <p className="text-[14px] leading-[1.6] text-foreground-secondary">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="start" aria-labelledby="closing-heading" className="relative isolate scroll-mt-4 overflow-hidden">
              <img src="/landing/hero-poster.jpg" alt="" aria-hidden className="absolute inset-0 -z-10 size-full object-cover opacity-90 [mask-image:linear-gradient(to_bottom,transparent,#000_35%,#000_70%,transparent)] [filter:brightness(1.06)]" />
              <div className="mx-auto w-full max-w-[1200px] px-5 py-28 sm:px-10 sm:py-40">
                <div className="flex flex-col items-center text-center">
                  <p className="text-[11px] font-medium tracking-[0.24em] text-foreground-secondary uppercase">Start</p>
                  <h2 id="closing-heading" className="font-display mt-6 text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.92] font-normal tracking-[-0.045em] text-balance">
                    Start with a sentence.
                  </h2>
                  <div className="mt-12 w-full max-w-2xl [filter:drop-shadow(0_24px_36px_rgba(15,23,42,0.12))]">
                    <Link to="/chat" aria-label="Start creating" className="chamfer group/bar flex bg-[var(--landing-stroke)] p-px transition-[background-color] duration-300 hover:bg-link/50">
                      <span className="chamfer flex w-full items-center gap-4 bg-white py-2.5 pr-2.5 pl-5 text-left sm:pl-6">
                        <span className="min-w-0 flex-1 truncate text-[15px] text-foreground-muted sm:text-[17px]">Ask anything, or describe what to make…</span>
                        <span className="chamfer-sm inline-flex shrink-0 items-center gap-2 bg-link px-5 py-3 text-[11px] font-medium tracking-[0.14em] text-white uppercase">
                          <span className="hidden sm:inline">Start creating</span>
                          <span className="sm:hidden">Start</span>
                          <ArrowUpRight className="size-3.5" />
                        </span>
                      </span>
                    </Link>
                  </div>
                  <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-balance text-foreground-secondary uppercase">An email or a wallet is the whole sign up</p>
                </div>
              </div>
            </section>
          </main>

          <footer className="mx-auto w-full max-w-[1200px] px-5 sm:px-10">
            <div className="grid gap-8 border-t border-border py-10 sm:grid-cols-[minmax(0,2fr)_repeat(2,minmax(0,1fr))]">
              <div className="flex flex-col gap-3">
                <img alt="Creora" width={28} height={28} className="shrink-0 select-none" src="/logo.png" />
                <p className="max-w-xs text-[13px] leading-relaxed text-foreground-secondary">
                  Private AI. Uncensored chat, pictures and video, and an agent that builds your apps. Nothing tracked, nothing trained on you.
                </p>
              </div>
              <nav aria-label="Product" className="flex flex-col gap-2">
                <p className="text-[11px] font-medium tracking-[0.24em] text-foreground-secondary uppercase">Product</p>
                <Link className="text-[13px] text-foreground-secondary hover:text-foreground" to="/explore">Explore</Link>
                <Link className="text-[13px] text-foreground-secondary hover:text-foreground" to="/forum">Community</Link>
                <a className="text-[13px] text-foreground-secondary hover:text-foreground" href="/#launchpad">Launchpad</a>
                <Link className="text-[13px] text-foreground-secondary hover:text-foreground" to="/docs">Docs</Link>
                <Link className="text-[13px] text-foreground-secondary hover:text-foreground" to="/devlog">Dev log</Link>
                <Link className="text-[13px] text-foreground-secondary hover:text-foreground" to="/signin">Sign in</Link>
                <a className="text-[13px] text-foreground-secondary hover:text-foreground" href={X_URL} target="_blank" rel="noopener noreferrer">
                  {X_HANDLE}
                </a>
              </nav>
              <nav aria-label="Legal" className="flex flex-col gap-2">
                <p className="text-[11px] font-medium tracking-[0.24em] text-foreground-secondary uppercase">Legal</p>
                <Link className="text-[13px] text-foreground-secondary hover:text-foreground" to="/terms">Terms</Link>
                <Link className="text-[13px] text-foreground-secondary hover:text-foreground" to="/privacy">Privacy</Link>
              </nav>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-5 text-[10px] font-medium tracking-[0.18em] text-foreground-muted uppercase">
              <span>© 2026 Creora</span>
              <span>Private AI · No tracking · Nothing trained on you</span>
            </div>
          </footer>
        </div>

        <nav aria-label="Primary" className="absolute top-0 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-10 rounded-b-[28px] bg-white px-10 py-4 xl:flex">
          <span aria-hidden className="absolute top-0 -left-6 size-6 bg-white" style={{ maskImage: "radial-gradient(circle at 0 100%, transparent 24px, black 25px)" }} />
          <span aria-hidden className="absolute top-0 -right-6 size-6 bg-white" style={{ maskImage: "radial-gradient(circle at 100% 100%, transparent 24px, black 25px)" }} />
          {[
            ["/#suite", "Products"],
            ["/#private", "Private"],
            ["/#builder", "Build"],
            ["/#launchpad", "Launchpad"],
            ["/devlog", "Dev log"],
            ["/docs", "Docs"],
          ].map(([href, label]) =>
            href.startsWith("/#") ? (
              <a key={label} href={href} className="text-[11px] font-medium tracking-[0.14em] text-neutral-800 uppercase transition-colors hover:text-neutral-500">
                {label}
              </a>
            ) : (
              <Link key={label} to={href} className="text-[11px] font-medium tracking-[0.14em] text-neutral-800 uppercase transition-colors hover:text-neutral-500">
                {label}
              </Link>
            ),
          )}
        </nav>
        <p aria-hidden className="pointer-events-none absolute bottom-4 left-4 z-40 text-[10px] font-medium tracking-[0.18em] text-white/80 uppercase mix-blend-difference sm:bottom-6 sm:left-8">
          Scroll to discover
        </p>
        <p aria-label={`Section ${section} of 6`} className="pointer-events-none absolute right-4 bottom-4 z-40 flex items-center gap-3 text-[10px] font-medium tracking-[0.18em] text-white/80 uppercase mix-blend-difference sm:right-8 sm:bottom-6">
          <span>{String(section).padStart(2, "0")}</span>
          <span aria-hidden className="h-px w-8 bg-white/40" />
          <span>06</span>
        </p>
      </div>
    </div>
  );
}

function EditorPreview() {
  const rows = [
    ["List files", "2 files"],
    ["Describe schema", "0 tables"],
    ["Create table habits", "change 1"],
    ["Create table habit_entries", "change 2"],
    ["Write App.tsx", "267 lines"],
  ];
  const habits = [
    ["Read 20 pages", [1, 1, 0, 1, 1, 1, 0]],
    ["Run", [0, 1, 1, 0, 1, 0, 0]],
    ["No coffee after 2", [1, 1, 1, 1, 0, 1, 0]],
  ] as const;

  return (
    <div className="mt-14 sm:mt-20">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-background shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_30px_80px_-40px_rgba(0,0,0,0.6)]">
        <div className="flex h-10 items-center gap-3 border-b border-border px-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full border border-border" />
            <span className="size-2.5 rounded-full border border-border" />
            <span className="size-2.5 rounded-full border border-border" />
          </span>
          <span className="mx-auto hidden rounded-md border border-border bg-background-subtle px-2.5 py-0.5 font-mono text-[11px] text-foreground-muted sm:block">
            creora.app/editor/habit-tracker
          </span>
          <span className="ml-auto flex overflow-hidden rounded-md border border-border font-mono text-[10px] uppercase">
            <span className="px-2 py-0.5 text-foreground-muted">Code</span>
            <span className="bg-foreground px-2 py-0.5 text-background">Preview</span>
          </span>
        </div>
        <div className="grid md:grid-cols-[260px_minmax(0,1fr)]">
          <div className="flex flex-col gap-2.5 border-b border-border p-3.5 md:border-r md:border-b-0">
            <div className="rounded-md border-l-2 border-foreground/60 bg-background-subtle px-2.5 py-2">
              <p className="font-mono text-[9px] tracking-[0.08em] text-foreground-muted uppercase">You · just now</p>
              <p className="mt-1 text-[12px] leading-snug">Build a habit tracker that saves to the database: add a habit, tick it done for today, and show a 7-day grid.</p>
            </div>
            <ul className="flex flex-col gap-1">
              {rows.map(([label, meta], i) => (
                <li key={label} style={{ animationDelay: `${i * 0.55}s` }} className="flex items-center gap-2 rounded-md border border-border px-2 py-1 font-mono text-[10.5px] motion-safe:animate-[landing-row-loop_7s_ease-out_infinite_both]">
                  <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-success" />
                  <span className="truncate">{label}</span>
                  <span className="ml-auto shrink-0 text-foreground-muted tabular-nums">{meta}</span>
                </li>
              ))}
            </ul>
            <p className="text-[12px] leading-snug text-foreground-secondary">The habit tracker is built and persists to the database.</p>
          </div>
          <div className="bg-[#f6f7f9] p-5 text-[#0f172a] sm:p-7">
            <div className="mx-auto flex max-w-md flex-col gap-4 rounded-xl border border-black/[0.06] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_12px_32px_-16px_rgba(0,0,0,0.2)]">
              <div>
                <p className="text-lg font-semibold tracking-tight">Habit tracker</p>
                <p className="text-[12px] text-[#64748b]">Tick off today and watch the last 7 days fill in.</p>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 rounded-lg border border-black/10 px-3 py-2 text-[12px] text-[#94a3b8]">New habit, e.g. Read 20 pages</div>
                <div className="rounded-lg bg-[#0f172a] px-3 py-2 text-[12px] font-medium text-white">+ Add</div>
              </div>
              <table className="w-full border-separate border-spacing-y-1.5 text-[12px]">
                <thead>
                  <tr className="text-[#64748b]">
                    <th className="text-left font-normal">Habit</th>
                    {"SSMTWTF".split("").map((d, i) => (
                      <th key={i} className="w-7 text-center font-normal">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {habits.map(([name, days]) => (
                    <tr key={name}>
                      <td className="truncate pr-2 font-medium">{name}</td>
                      {days.map((on, i) => (
                        <td key={i} className="text-center">
                          <span
                            aria-hidden
                            className={`inline-block size-[18px] rounded-[5px] ${
                              on
                                ? `border border-[#0d9488] bg-[#14b8a6]${i === 5 ? " ring-2 ring-[#14b8a6]/35 ring-offset-1 ring-offset-white" : ""}`
                                : `border border-black/10 bg-black/[0.03]${i === 5 ? " ring-2 ring-[#14b8a6]/35 ring-offset-1 ring-offset-white" : ""}`
                            }`}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
