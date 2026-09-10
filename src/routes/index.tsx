import { createFileRoute } from "@tanstack/react-router";
import OgCallersPage from "../components/og-callers/OgCallersPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OG Callers — The Official Squad Coin" },
      { name: "description", content: "Join OG Callers, a community of traders, degens and believers sharing calls, alpha and opportunities." },
      { property: "og:title", content: "OG Callers — The Official Squad Coin" },
      { property: "og:description", content: "Trade, call and grow together with the OG Callers community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <OgCallersPage />;
}
