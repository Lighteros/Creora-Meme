import type { ReactNode } from "react";

const partners = [
  {
    name: "Filecoin",
    href: "https://filecoin.io",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-7 shrink-0 sm:size-8" aria-hidden>
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <path
          fill="#fff"
          transform="translate(12 12) scale(0.74) translate(-12 -12)"
          d="m13.212 10.457-.415 2.109 3.947.528-.277.988-3.877-.528c-.277.859-.417 1.781-.762 2.573-.346.923-.693 1.845-1.109 2.704-.554 1.12-1.522 1.912-2.837 2.109-.762.132-1.592.065-2.216-.395-.207-.132-.416-.395-.416-.594 0-.263-.005-.573.347-.725.351-.153.496-.045.693.065.207.198.414.462.553.726.415.528.969.593 1.523.197.623-.526.97-1.252 1.177-1.977.415-1.582.831-3.1 1.176-4.681v-.265l-3.668-.528.138-.988 3.808.527.483-2.043-3.945-.595.14-1.054 4.084.528c.137-.397.207-.726.346-1.055.345-1.188.692-2.375 1.523-3.43.83-1.055 1.8-1.714 3.253-1.649.624 0 1.247.199 1.662.66.07.066.207.198.207.329 0 .265 0 .594-.207.793-.277.196-.623.13-.9-.132-.208-.198-.347-.396-.554-.594-.415-.528-1.038-.594-1.523-.132-.375.359-.68.783-.9 1.253-.486 1.384-.831 2.835-1.315 4.286l3.807.528-.277.988z"
        />
      </svg>
    ),
  },
  {
    name: "Blockscout",
    href: "https://www.blockscout.com",
    icon: (
      <svg viewBox="-2 0 24 24" fill="none" className="size-7 shrink-0 sm:size-8" aria-hidden>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.71 3a1 1 0 0 0-1-1H4.52a1 1 0 0 0-1 1v2.167a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h2.188a1 1 0 0 0 1-1V7.167a1 1 0 0 1 1-1H6.71a1 1 0 0 0 1-1zm8.404 0a1 1 0 0 0-1-1h-2.188a1 1 0 0 0-1 1v2.167a1 1 0 0 0 1 1h1.376a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1h2.188a1 1 0 0 0 1-1V7.167a1 1 0 0 0-1-1h-1.376a1 1 0 0 1-1-1zm-4.246 7.976a1 1 0 0 0-1-1H8.68a1 1 0 0 0-1 1v6.095a1 1 0 0 0 1 1h2.188a1 1 0 0 0 1-1z"
        />
      </svg>
    ),
  },
  {
    name: "Robinhood Chain",
    href: "https://robinhood.com/chain",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-7 shrink-0 sm:size-8" aria-hidden>
        <path
          fill="currentColor"
          d="M5.104 21h.399c.072 0 .145-.036.169-.096 3.009-7.632 6.283-11.412 8.337-13.675.085-.097.049-.169-.072-.169h-3.673a.42.42 0 0 0-.339.169l-2.634 3.25c-.387.481-.483.927-.483 1.565v3.322c-.858 2.396-1.402 4.02-1.8 5.49-.025.093.011.144.096.144M18.359 3.485c-.568-.602-3.13-.626-4.314-.169a2.3 2.3 0 0 0-.592.35 31 31 0 0 0-2.5 2.383c-.085.084-.05.168.072.168h4.072c.374 0 .592.217.592.59v4.575c0 .12.097.156.169.048l2.453-3.19c.399-.518.52-.674.628-1.397.145-1.059.06-2.684-.58-3.358m-5.256 12.134 1.68-2.757a.5.5 0 0 0 .048-.216V8.047c0-.12-.085-.168-.17-.072-2.525 2.805-4.494 5.754-6.319 9.305-.046.09.012.169.121.133l3.77-1.156c.425-.13.665-.3.87-.638"
        />
      </svg>
    ),
  },
  {
    name: "1inch",
    href: "https://1inch.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-7 shrink-0 sm:size-8" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path fill="#fff" d="M8.2 7.2h2.1l3.4 5.1V7.2h2.1v9.6h-2.1l-3.4-5.1v5.1H8.2z" />
      </svg>
    ),
  },
  {
    name: "Arbitrum",
    href: "https://arbitrum.io",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-7 shrink-0 sm:size-8" aria-hidden>
        <path fill="currentColor" d="m13.353 13.368-.885 2.39a.3.3 0 0 0 0 .205l1.523 4.112 1.76-1.001-2.113-5.706a.152.152 0 0 0-.285 0m1.774-4.019a.152.152 0 0 0-.285 0l-.885 2.39a.3.3 0 0 0 0 .205l2.494 6.732 1.761-1.001z" />
        <path fill="currentColor" d="M11.998 4.115a.3.3 0 0 1 .126.033l6.715 3.818a.25.25 0 0 1 .126.214v7.635c0 .089-.048.17-.126.214l-6.715 3.819a.25.25 0 0 1-.126.032.3.3 0 0 1-.125-.032l-6.715-3.815a.25.25 0 0 1-.126-.215V8.182c0-.089.048-.17.126-.215l6.715-3.818a.26.26 0 0 1 .125-.034m0-1.115c-.238 0-.478.06-.692.183L4.593 7A1.36 1.36 0 0 0 3.9 8.182v7.635c0 .487.264.938.693 1.181l6.714 3.819a1.41 1.41 0 0 0 1.386 0l6.714-3.818a1.36 1.36 0 0 0 .693-1.182V8.182A1.36 1.36 0 0 0 19.407 7l-6.716-3.817A1.4 1.4 0 0 0 11.998 3" />
        <path fill="currentColor" d="m7.559 18.685.617-1.666 1.244 1.018-1.163 1.046zm3.874-11.05H9.731a.3.3 0 0 0-.285.197l-3.649 9.852 1.761 1.001 4.018-10.849a.15.15 0 0 0-.143-.2" />
        <path fill="currentColor" d="M14.412 7.635h-1.703a.3.3 0 0 0-.284.197l-4.167 11.25 1.761 1 4.535-12.246a.15.15 0 0 0-.142-.2" />
      </svg>
    ),
  },
];

function PartnerLink({
  name,
  href,
  icon,
  hidden,
}: {
  name: string;
  href: string;
  icon: ReactNode;
  hidden?: boolean;
}) {
  return (
    <li aria-hidden={hidden} className={hidden ? "motion-reduce:hidden" : undefined}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        tabIndex={hidden ? -1 : undefined}
        className="group/partner flex items-center gap-3 rounded-sm text-foreground-muted transition-colors duration-300 hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {icon}
        <span className="font-display text-lg font-semibold tracking-tight whitespace-nowrap sm:text-xl">{name}</span>
      </a>
    </li>
  );
}

export function Partners() {
  const loop = [...partners, ...partners, ...partners];
  return (
    <section aria-labelledby="partners-heading" className="py-10 sm:py-14">
      <p className="text-center text-[11px] font-medium tracking-[0.24em] text-foreground-secondary uppercase">
        <span id="partners-heading">Partners</span>
      </p>
      <div className="landing-marquee group/marquee relative mt-6 overflow-hidden sm:mt-8">
        <div className="landing-marquee-track flex w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
          <ul className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-6 motion-reduce:pr-0">
            {loop.map((p, i) => (
              <PartnerLink key={`${p.name}-${i}`} {...p} hidden={i >= partners.length} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
