import { Navigate, Route, Routes } from "react-router-dom";
import { usePageTitle } from "./lib/usePageTitle";
import { LandingPage } from "./components/LandingPage";
import { AppShell } from "./components/AppShell";
import { DocsLayout } from "./components/DocsLayout";
import { ChatPage } from "./pages/ChatPage";
import { AgentsPage } from "./pages/AgentsPage";
import { ExplorePage } from "./pages/ExplorePage";
import { ForumPage } from "./pages/ForumPage";
import { TokensPage } from "./pages/TokensPage";
import { NetworkPage } from "./pages/NetworkPage";
import { DevlogPage } from "./pages/DevlogPage";
import { SignInPage } from "./pages/SignInPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { ProjectPage } from "./pages/ProjectPage";
import { DocsHome, DocsArticle } from "./pages/DocsPages";

export default function App() {
  usePageTitle();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/u/:user/:slug" element={<ProjectPage />} />
      <Route path="/u/:user" element={<ExplorePage />} />
      <Route element={<AppShell />}>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/tokens" element={<TokensPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/devlog" element={<DevlogPage />} />
      </Route>
      <Route path="/docs" element={<DocsLayout />}>
        <Route index element={<DocsHome />} />
        <Route path=":slug" element={<DocsArticle />} />
      </Route>
      <Route path="/community" element={<Navigate to="/forum" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
