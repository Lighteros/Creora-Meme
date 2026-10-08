import { Link } from "react-router-dom";

export function NetworkPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-[36px] font-medium tracking-tight">GPU network</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-foreground-secondary">
        The GPU network is opening to providers. The node software, the guide and the network console are out now for anyone with a sealed GPU machine — Intel TDX with an NVIDIA H100, H200 or Blackwell GPU in confidential computing mode.
      </p>
      <ul className="mt-8 space-y-5">
        {[
          "Creora checks every machine’s proof itself, when it joins and every 10 minutes after, and sends nothing to a machine without one.",
          "Requests are sealed end to end to a key born inside the machine, and every answer is signed there, so whoever runs it never sees what anybody asks.",
          "Owners earn 70% of what each request their machines serve costs, paid daily in USDG on Robinhood Chain once at least $5 is owed.",
        ].map((t) => (
          <li key={t} className="border-t border-border pt-4 text-[14px] leading-[1.65] text-foreground-secondary">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-3">
        <Link to="/signin?redirect=/network/console" className="inline-flex h-10 items-center rounded-lg bg-link px-4 text-[13px] font-medium text-white">
          Open the console
        </Link>
        <Link to="/docs/network" className="inline-flex h-10 items-center rounded-lg px-4 text-[13px] text-foreground-secondary hover:text-foreground">
          Read the docs
        </Link>
      </div>
    </div>
  );
}
