import { Link } from "react-router-dom";
import { Legal } from "./PrivacyPage";

const sections = [
  ["Your account", "Your account is your wallet address. You are responsible for keeping control of that wallet and for everything done from it. Signing in is a signed message only; Creora never asks for a transaction and never holds funds."],
  ["Your projects", "The projects, files and messages you create belong to you. Creora stores them so that you can come back to them and may delete them when you delete your account. Do not use Creora to build or distribute anything unlawful, harmful or infringing."],
  ["API keys", "If you store an Anthropic API key, requests made with it are billed to that key by Anthropic under Anthropic's terms. You can remove the key at any time in Settings."],
  ["The service", "Creora is provided as is, without warranty of any kind. Limits on project size, message length and agent usage apply and may change. The service may be unavailable from time to time, and features may change or be withdrawn."],
  ["Changes", "These terms may change; continuing to use Creora after a change means you accept it."],
];

export function TermsPage() {
  return (
    <Legal title="Terms of service" intro="Creora lets you describe an app, have an AI agent build it and run it live in the browser. By signing in with your wallet you agree to these terms.">
      {sections.map(([h, p]) => (
        <section key={h} className="mt-10">
          <h2 className="text-[20px] font-medium tracking-tight">{h}</h2>
          <p className="mt-3 text-[15px] leading-[1.7] text-foreground-secondary">{p}</p>
        </section>
      ))}
      <p className="mt-10 text-[14px] text-foreground-secondary">
        See also the{" "}
        <Link to="/privacy" className="text-link">
          privacy policy
        </Link>
        .
      </p>
    </Legal>
  );
}
