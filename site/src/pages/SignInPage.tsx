import { Link } from "react-router-dom";

export function SignInPage() {
  return (
    <div className="landing min-h-dvh bg-white p-3 sm:p-5">
      <div className="relative isolate min-h-[calc(100dvh-24px)] overflow-hidden rounded-[28px] bg-white sm:min-h-[calc(100dvh-40px)] sm:rounded-[36px]">
        <img src="/landing/hero-poster.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
        <div className="relative flex items-center justify-between px-5 pt-5 sm:px-10 sm:pt-8">
          <Link to="/" aria-label="Creora home">
            <img src="/logo.png" alt="Creora" width={40} height={40} />
          </Link>
          <Link to="/" className="text-[11px] font-medium tracking-[0.14em] uppercase text-foreground-secondary">
            Back
          </Link>
        </div>
        <div className="relative mx-auto flex max-w-md flex-col px-5 py-16 sm:py-24">
          <h1 className="font-display text-[36px] leading-[1.05] tracking-[-0.04em] sm:text-[44px]">Sign in to Creora</h1>
          <p className="mt-4 text-[15px] leading-[1.65] text-foreground-secondary">
            Use Google, your email, another social account or a wallet, then sign a message to continue. The signature is not a transaction: it costs nothing and moves nothing.
          </p>
          <div className="mt-8 space-y-3">
            <button type="button" className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0f172a] text-[14px] font-medium text-white">
              Continue with Google
            </button>
            <button type="button" className="flex h-12 w-full items-center justify-center rounded-xl border border-[#0f172a1a] bg-white text-[14px] font-medium text-[#0f172a]">
              Email, Apple, X, Discord, GitHub or Facebook
            </button>
            <button type="button" className="flex h-12 w-full items-center justify-center rounded-xl border border-[#0f172a1a] bg-white text-[14px] font-medium text-[#0f172a]">
              Wallet
            </button>
          </div>
          <ul className="mt-8 space-y-4 text-[13px] leading-[1.6] text-foreground-secondary">
            <li>
              <strong className="text-foreground">Email or Google.</strong> Google, Apple, X, Discord, GitHub or Facebook, or a code sent to your inbox. A wallet is made for you; nothing to install.
            </li>
            <li>
              <strong className="text-foreground">Wallet.</strong> MetaMask, Rainbow, Coinbase Wallet, Trust, or any wallet that supports WalletConnect.
            </li>
          </ul>
          <p className="mt-8 text-[12px] text-foreground-muted">
            By continuing you agree to the{" "}
            <Link to="/terms" className="underline">
              terms
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
