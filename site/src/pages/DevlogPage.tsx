const upcoming = [
  ["Next", "A second, cheaper builder model", "A model for the builder that does the same work for about a twelfth of the credits, chosen from a menu under the message box."],
  ["Next", "The best price on every swap", "Token pages will compare the pool with the best route across the whole chain through 1inch, and trade on the better one."],
  ["Planned", "Publishing agents", "On Starter or Pro, publish an agent so anybody signed in can run it for a price you set, and earn 70% of it, paid daily in USDG on Robinhood Chain."],
  ["Planned", "The token launchpad", "Fair token launches for the sites you build, on Robinhood Chain and Arbitrum. The launchpad is for the future: its contracts are already deployed on both, and launching opens on creora.ai later."],
  ["Planned", "Payments inside your apps", "Take payments in the apps you build."],
  ["Planned", "$CREORA", "A token for paying for Creora, staking and having a say in what comes next. There is no $CREORA token yet, so any token using the name today is not ours."],
];

const shipped: [string, string, string[]][] = [
  ["v2.1", "Paying with Dash", ["Plans and credits can now be paid in Dash. Press Buy, then Pay with Dash, and send the amount shown to your own Dash address.", "It is credited automatically once Dash locks the payment, usually within half a minute, a thousand credits to the dollar."]],
  ["v2.0", "Agents", ["Agents are here. Give one instructions and the tools it may use, and it works for you on its own.", "Run it now with a task for that run, or put it on a schedule. Watch every step as it happens, with what it cost."]],
  ["v1.9", "Ethereum, and paying privately there", ["Plans and credits can now be paid on Ethereum too, in USDT or USDC.", "Paying privately goes through NullMask on Ethereum."]],
  ["v1.8", "The GPU network", ["The GPU network is opening to providers. Creora checks every machine’s proof itself.", "Owners earn 70% of what each request their machines serve costs, paid daily in USDG on Robinhood Chain."]],
  ["v1.7", "USDG on Robinhood Chain", ["Plans and credits can now be paid in USDG or USDC on Robinhood Chain, beside USDC, USDT and USDC.e on Arbitrum."]],
  ["v1.6", "Private chat, and paying privately", ["A private chat is saved nowhere: no conversation, no history in the sidebar, and pictures sent straight to your screen.", "Pay privately through NullMask."]],
  ["v1.5", "A sidebar with everything in reach", ["Search, New chat, every page and your chats now sit in one list down the left of every page.", "Search opens from anywhere with ⌘K."]],
  ["v1.4", "Start creating", ["The main button on the home page and in the docs now says Start creating, because Creora is chat, pictures, video and apps, not only a builder."]],
  ["v1.3", "New docs, with a full API reference", ["The docs are rebuilt with search, an outline beside every page, and a new API section covering every endpoint."]],
  ["v1.2", "Free every day, open to everyone, and the Creora API", ["Everyone gets three free uses a day. Use Creora before you sign in. The Creora API is open."]],
  ["v1.1", "Sign in your way", ["Sign in with Google, an email address or another social account, as well as a wallet."]],
  ["v1.0", "One chat for everything", ["A single chat that talks, makes pictures and five second videos, and hands app requests straight to the builder.", "Private AI by design: no tracking, nothing trained on what you say."]],
  ["v0.9", "Copies on Filecoin", ["Pictures you upload can also be kept on Filecoin, with an IPFS address for every copy."]],
  ["v0.8", "Arbitrum One", ["The launchpad’s contracts are deployed on Arbitrum One as well, beside Robinhood Chain."]],
  ["v0.7", "Live data and connections for your apps", ["Apps you build can show tables that update live. Connections let an app call an outside service."]],
  ["v0.6", "A builder that checks its own work", ["The builder compiles what it wrote, looks at the running app and goes back to fix anything it broke."]],
  ["v0.5", "Full page sites, and a new sign in", ["A published site now fills the whole page, with nothing of Creora’s around it."]],
  ["v0.4", "Covers and a new look", ["Every published site gets a cover picture, taken automatically."]],
  ["v0.3", "Your own domain", ["A published site can live on a domain you own, with the certificate taken care of."]],
  ["v0.2", "Launchpad contracts, for the future", ["The token launchpad is for the future, and its contracts are the first step: deployed on Robinhood Chain."]],
  ["v0.1", "The first Creora", ["Describe an app and an AI agent builds it, with the code, a live preview and a history you can rewind."]],
];

export function DevlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-[36px] font-medium tracking-tight">Dev log</h1>
      <p className="mt-2 text-[15px] text-foreground-secondary">What has shipped on Creora, and what is on the way.</p>
      <h2 className="mt-12 text-[13px] font-medium tracking-[0.18em] text-foreground-muted uppercase">On the way</h2>
      <ul className="mt-4 space-y-8">
        {upcoming.map(([tag, title, copy]) => (
          <li key={title} className="border-t border-border pt-5">
            <p className="text-[11px] tracking-[0.16em] text-link uppercase">{tag}</p>
            <h3 className="mt-1 text-[18px] font-medium">{title}</h3>
            <p className="mt-2 text-[14px] leading-[1.65] text-foreground-secondary">{copy}</p>
          </li>
        ))}
      </ul>
      <h2 className="mt-14 text-[13px] font-medium tracking-[0.18em] text-foreground-muted uppercase">Shipped</h2>
      <ol className="mt-4 space-y-10">
        {shipped.map(([ver, title, points], i) => (
          <li key={String(ver)} className="border-t border-border pt-5">
            <p className="text-[11px] tracking-[0.16em] text-foreground-muted uppercase">
              {ver}
              {i === 0 ? " · Latest" : ""}
            </p>
            <h3 className="mt-1 text-[18px] font-medium">{title}</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[14px] leading-[1.65] text-foreground-secondary">
              {(points as string[]).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
