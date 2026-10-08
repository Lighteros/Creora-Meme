import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const sections = [
  ["What is stored", "Creora keeps the following in its MongoDB database: your wallet address and the chain you signed in on, the username shown in the app, your projects (their files, names and settings), the messages exchanged with the agent in each project, and the pictures and files you upload. If you add an Anthropic API key in Settings it is stored encrypted, and only a hint of its last characters is kept readable so that you can recognise it."],
  ["Sign-in", "Signing in uses a message signed by your wallet. Creora keeps a short-lived nonce to prevent replay and sets a session cookie in your browser. No password or other identity information is collected. If you choose to sign in with an email address, or with a Google, Apple, X, Discord, GitHub or Facebook account, that address or account goes to Reown. Creora only ever sees that wallet's address."],
  ["The agent", "When you send a message to the agent, the conversation and the files of that project are sent to Anthropic's API to produce the reply, using your stored key when you have one and the server's key otherwise."],
  ["The chat", "When you use the chat, your message and the recent part of that conversation are sent to the AI provider Creora uses to answer it, and the pictures and videos you ask for are made by the same provider. Creora keeps your conversations, and the pictures and videos made in them, so you can come back to them."],
  ["Agents", "Creora keeps the agents you make, with their instructions, standing tasks, tools, schedules and notes, until you delete them, and each agent's runs for 30 days."],
  ["Copies on Filecoin", "Keeping a copy of your uploads on Filecoin is off unless you turn it on in Settings. With it on, each upload is also stored by Filecoin storage providers and given an IPFS address."],
  ["No analytics", "Creora collects no analytics and uses no tracking, advertising or third-party measurement. The wallet connection library is configured with its analytics off. Server logs record request ids and errors for operating the service, not your content."],
  ["Deleting your data", "Deleting your account in Settings removes your user record, your projects and their messages, the files you uploaded here, your agents with their notes and runs, and your stored API key. Copies already made on Filecoin stay there."],
];

export function PrivacyPage() {
  return (
    <Legal title="Privacy policy" intro="This page describes what Creora stores about you and why. The short version: only what the service needs to work, and no analytics.">
      {sections.map(([h, p]) => (
        <section key={h} className="mt-10">
          <h2 className="text-[20px] font-medium tracking-tight">{h}</h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-foreground-secondary">{p}</p>
        </section>
      ))}
      <p className="mt-10 text-[14px] text-foreground-secondary">
        See also the{" "}
        <Link to="/terms" className="text-link">
          terms of service
        </Link>
        .
      </p>
    </Legal>
  );
}

export function Legal({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="landing min-h-dvh bg-white">
      <div className="mx-auto max-w-2xl px-5 py-10 sm:px-8 sm:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-[13px] text-foreground-secondary">
          <img src="/logo.png" alt="" width={22} height={22} />
          Creora
        </Link>
        <h1 className="mt-8 font-display text-[36px] leading-[1.1] tracking-[-0.04em]">{title}</h1>
        <p className="mt-4 text-[15px] leading-[1.7] text-foreground-secondary">{intro}</p>
        {children}
      </div>
    </div>
  );
}
