import { Link } from "react-router-dom";

export function TokensPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-[36px] font-medium tracking-tight">Tokens</h1>
      <p className="mt-2 text-[15px] text-foreground-secondary">
        Fair launches on Robinhood Chain and Arbitrum, each one for a site somebody built.
      </p>
      <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.03] p-6">
        <p className="text-[15px] font-medium">Launch a token</p>
        <p className="mt-1 text-[13px] text-link">Coming soon</p>
        <p className="mt-3 text-[14px] leading-relaxed text-foreground-secondary">
          Token launches open soon, and each one will appear here.
        </p>
      </div>
      <Link to="/docs/tokens" className="mt-6 inline-block text-[13px] text-link">
        Read the Token Launchpad docs
      </Link>
    </div>
  );
}
