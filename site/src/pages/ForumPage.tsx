import { Link, useSearchParams } from "react-router-dom";

const categories = [
  ["all", "All"],
  ["help", "Help"],
  ["showcase", "Showcase"],
  ["feedback", "Feedback"],
  ["announcements", "Announcements"],
];

export function ForumPage() {
  const [params] = useSearchParams();
  const category = params.get("category") || "all";

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-[36px] font-medium tracking-tight">Community</h1>
      <p className="mt-2 text-[15px] text-foreground-secondary">Ask for help, show what you built, and say what Creora is missing.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map(([id, label]) => (
          <Link
            key={id}
            to={id === "all" ? "/forum" : `/forum?category=${id}`}
            className={`rounded-full px-3 py-1.5 text-[13px] ${category === id ? "bg-white/10 text-white" : "text-foreground-muted hover:text-foreground"}`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-[18px] font-medium">Nothing here yet</p>
        <p className="mt-2 text-[14px] text-foreground-secondary">This is where people building on Creora ask each other things. Somebody has to go first.</p>
        <Link to="/signin?redirect=/forum/new" className="mt-6 inline-flex h-10 items-center rounded-lg bg-link px-4 text-[13px] font-medium text-white">
          Start a thread
        </Link>
      </div>
    </div>
  );
}
