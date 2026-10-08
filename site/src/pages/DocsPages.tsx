import { Link, useParams } from "react-router-dom";
import { docsPages } from "../data/docsContent";
import { docsTitles } from "../data/docsNav";
import { ArrowUpRight, X_HANDLE, X_URL } from "../lib/icons";

function Paragraphs({ text }: { text: string }) {
  const blocks = text
    .split(/\n{2,}/)
    .map((b) => b.replace(/\n+/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .filter((b) => !["Resources", "Open", "Follow", "In the app", "Channels"].includes(b));

  return (
    <div className="prose-docs">
      {blocks.map((b, i) => {
        const isHeading = b.length < 80 && !b.endsWith(".") && !b.endsWith(",") && i > 0;
        if (isHeading) {
          return (
            <h2 key={i} className="mt-10 mb-3 text-[22px] font-medium tracking-tight">
              {b}
            </h2>
          );
        }
        return (
          <p key={i} className="mb-4 text-[15px] leading-[1.7] text-foreground-secondary">
            {b}
          </p>
        );
      })}
    </div>
  );
}

export function DocsHome() {
  return (
    <article>
      <p className="text-[11px] font-medium tracking-[0.2em] text-foreground-muted uppercase">Creora Docs</p>
      <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.04em]">About Creora</h1>
      <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-foreground-secondary">
        Creora is a private AI workspace where a conversation becomes a working product. You can chat with a private AI, make pictures and videos, and build applications you own, and all of it happens inside one platform that you never have to leave.
      </p>
      <p className="mt-4 text-[13px] font-medium tracking-[0.2em] uppercase text-foreground-muted">Chat. Create. Build. Own it.</p>
      <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-foreground-secondary">
        The chat talks with you, makes pictures and videos, and builds apps when you describe one, and you can try it before you sign in. You tell the agent what you want and watch it build the site in front of you. When it looks right you can publish it at an address of its own, connect your own domain, give it a database and sign ups, or push it to GitHub. Everything the agent writes is yours to keep, edit, download and share.
      </p>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-foreground-secondary">
        Free to start. Every account gets three free uses a day, and so does a visitor who has not signed in yet: a chat answer, a picture, a build run or a video, with at most one video a day. They start again at midnight UTC. Beyond them you pay in credits, or run the builder on your own Anthropic key.
      </p>
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {[
          ["/docs/chat", "The Chat", "Answers, pictures and five second videos in one box."],
          ["/docs/building", "Build", "Describe an app and watch the agent write it."],
          ["/docs/publishing", "Publish", "Put your app at /u/yourname/project or on your own domain."],
          ["/docs/data", "Data", "A database of its own and sign ups, table by table."],
          ["/docs/api", "API", "Chat, pictures and videos from your own code."],
          ["/docs/tokens", "Launch", "A fair launch token for a site you built."],
        ].map(([href, title, copy]) => (
          <Link key={href} to={href} className="rounded-xl border border-white/8 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]">
            <p className="text-[15px] font-medium">{title}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-foreground-secondary">{copy}</p>
          </Link>
        ))}
      </div>
    </article>
  );
}

export function DocsArticle() {
  const { slug = "" } = useParams();
  const title = docsTitles[slug] || slug;
  const body = docsPages[slug];

  if (slug === "links") {
    return (
      <article>
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.04em]">Official Links</h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-foreground-secondary">
          These are the official Creora channels. Announcements and product updates are published only through them.
        </p>
        <div className="mt-8 grid gap-3">
          {[
            ["creora.ai", "The Creora app, where you sign in, chat, build and publish.", "/", "Open"],
            ["This guide", "The step by step guide to Creora at creora.ai/docs, also under Docs in the sidebar.", "/docs", "Open"],
            [`𝕏 ${X_HANDLE}`, "Announcements, launches and product updates.", X_URL, "Follow"],
            ["Chat", "Talk, make pictures and videos, and hand an app to the builder.", "/chat", "Open"],
            ["Community", "The forum, for help, feedback and showing your work.", "/forum", "Open"],
            ["Tokens", "The launchpad, where tokens already launched are listed and traded.", "/tokens", "Open"],
          ].map(([name, copy, href, action]) => {
            const className =
              "flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4 hover:bg-white/[0.06]";
            const inner = (
              <>
                <div>
                  <p className="text-[15px] font-medium">{name}</p>
                  <p className="mt-1 text-[13px] text-foreground-secondary">{copy}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[12px] text-link">
                  {action}
                  <ArrowUpRight className="size-3" />
                </span>
              </>
            );
            if (String(href).startsWith("http")) {
              return (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={className}>
                  {inner}
                </a>
              );
            }
            return (
              <Link key={name} to={href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
        <p className="mt-8 max-w-2xl text-[14px] leading-[1.7] text-foreground-secondary">
          Stay safe. Creora will never ask for your seed phrase or private key, and signing in never requires a transaction. Treat any message that asks for either as a scam. Pay only to the deposit address shown in Settings › Billing on creora.ai. There is no $CREORA token today, so anything sold under that name is not Creora's. Confirm links against the channels on this page before connecting a wallet.
        </p>
      </article>
    );
  }

  return (
    <article>
      <h1 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[-0.04em]">{title}</h1>
      {body ? <div className="mt-8"><Paragraphs text={body} /></div> : <p className="mt-6 text-foreground-secondary">This page is not available.</p>}
    </article>
  );
}
