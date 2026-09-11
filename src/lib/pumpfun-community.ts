import { createServerFn } from "@tanstack/react-start";
import { PUMP_FUN_HEADERS } from "./pumpfun-leaderboard";

// The OG Callers squad's group id on pump.fun (used as the `user` param for its aggregate stats).
const COMMUNITY_GROUP_ID = "7607c13f-1a02-480a-9c71-566495dc8788";

export type CommunityStats = {
  memberCount: number;
  totalPnl: string;
  totalValue: string;
};

function formatUsdCompact(value: number) {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toFixed(0)}`;
}

// Fetches squad-wide PNL/member stats for the community stats bar, server-side (avoids browser CORS).
export const getCommunityStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<CommunityStats> => {
    const res = await fetch(
      `https://frontend-api-v3.pump.fun/portfolio-summary?user=${COMMUNITY_GROUP_ID}&period=1d`,
      { headers: PUMP_FUN_HEADERS },
    );
    if (!res.ok) throw new Error(`community portfolio-summary request failed (${res.status})`);
    const data = (await res.json()) as {
      pnl: { usd: number };
      totalValueUsd: number;
      memberCount: number;
    };

    return {
      memberCount: data.memberCount,
      totalPnl: formatUsdCompact(data.pnl.usd),
      totalValue: formatUsdCompact(data.totalValueUsd),
    };
  },
);
