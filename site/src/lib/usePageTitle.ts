import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { docsTitles } from "../data/docsNav";

const titles: Record<string, string> = {
  "/": "Creora · Private AI meets limitless creation.",
  "/chat": "Chat · Creora",
  "/agents": "Agents · Creora",
  "/explore": "Explore · Creora",
  "/forum": "Community · Creora",
  "/tokens": "Tokens · Creora",
  "/network": "GPU network · Creora",
  "/devlog": "Dev log · Creora",
  "/signin": "Sign in · Creora",
  "/privacy": "Privacy · Creora",
  "/terms": "Terms · Creora",
  "/docs": "Creora Docs",
};

export function usePageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.startsWith("/docs/")) {
      const slug = pathname.slice(6);
      document.title = `${docsTitles[slug] || slug} · Creora Docs`;
      return;
    }
    if (pathname.startsWith("/u/")) {
      document.title = "Blox Fruits Executor";
      return;
    }
    document.title = titles[pathname] || "Creora · Private AI meets limitless creation.";
  }, [pathname]);
}
