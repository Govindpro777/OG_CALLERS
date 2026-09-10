import { createServerFn } from "@tanstack/react-start";

export type LeaderboardTrader = {
  name: string;
  link: string;
  wallet: string;
  pnl: string;
  percent: string;
  pnlValue: number;
  ogHeld: string;
};

const TRACKED_WALLETS = [
  // {
  //   name: "OGPeach",
  //   link: "https://join.pump.fun/HSag/7gx4z3x2",
  //   wallet: "CHXHjEdbzDxqzXzsh9Vs1jxMixnBSAJuqQ9bjZMzFqn9",
  // },
  // {
  //   name: "berdush",
  //   link: "https://join.pump.fun/HSag/n9tgbdif",
  //   wallet: "HLNMn7ZcLmxfYXt4QTpc8g6xMqZoXR4ixpehswgbQhVG",
  // },
  // {
  //   name: "appiesol_",
  //   link: "https://join.pump.fun/HSag/cekxej0j",
  //   wallet: "DieowDJ137xDRyCDn3YZYfAe4qzeGmdQJvryyqdWhtuc",
  // },
  // {
  //   name: "borealj",
  //   link: "https://pump.fun/profile/H3T4nbQV119capeaPjXK1FJPK3PuB5neAa2Dicyek7wG",
  //   wallet: "H3T4nbQV119capeaPjXK1FJPK3PuB5neAa2Dicyek7wG",
  // },
  // {
  //   name: "SagezUP",
  //   link: "https://pump.fun/profile/AHGALeqAuRkC7cQJrKwjdL4fSxiz9HkgtMRcRGsrwaqk",
  //   wallet: "AHGALeqAuRkC7cQJrKwjdL4fSxiz9HkgtMRcRGsrwaqk",
  // },
  // {
  //   name: "spectacular",
  //   link: "https://pump.fun/profile/6Fz4cnnvdRSqQzUnLS3Q5M35vo8uRnu5rag6Q6Kbb7s",
  //   wallet: "6Fz4cnnvdRSqQzUnLS3Q5M35vo8uRnu5rag6Q6Kbb7s",
  // },
  // {
  //   name: "OGSniffer",
  //   link: "https://pump.fun/profile/8oHccwEN4eCk6Anb3dxCeT9UsNjW6pS8cU8RXadaC7i7",
  //   wallet: "8oHccwEN4eCk6Anb3dxCeT9UsNjW6pS8cU8RXadaC7i7",
  // },
  // {
  //   name: "tumors",
  //   link: "https://pump.fun/profile/B6GK4Uk5HfcexdqfaFQKCu7cZw5LYdJ6bhi25BWq1Nic",
  //   wallet: "B6GK4Uk5HfcexdqfaFQKCu7cZw5LYdJ6bhi25BWq1Nic",
  // },
  // {
  //   name: "adebola",
  //   link: "https://pump.fun/profile/DNyA4HRP65X1FB8HnqsyT1ZAvvb5ng8eZq4b1oAiWesC",
  //   wallet: "DNyA4HRP65X1FB8HnqsyT1ZAvvb5ng8eZq4b1oAiWesC",
  // },
  // {
  //   name: "roommate",
  //   link: "https://pump.fun/profile/3SoYUq5eY8gn5p9Uz3fomA5ZbbHEpe6PhitttQ84GHBK",
  //   wallet: "3SoYUq5eY8gn5p9Uz3fomA5ZbbHEpe6PhitttQ84GHBK",
  // },
  // {
  //   name: "MagicCooker",
  //   link: "https://pump.fun/profile/BvgE1K46Hd4g5vbeoy1GXfDdvvLZUmELa4WASKjG8skm",
  //   wallet: "BvgE1K46Hd4g5vbeoy1GXfDdvvLZUmELa4WASKjG8skm",
  // },
  // {
  //   name: "synciemann",
  //   link: "https://pump.fun/profile/8x1q3VeNkjeznoUa29fF2vVHp2E7Ju9TrwS7y6AyiVMa",
  //   wallet: "8x1q3VeNkjeznoUa29fF2vVHp2E7Ju9TrwS7y6AyiVMa",
  // },
  // {
  //   name: "gaston_levai",
  //   link: "https://pump.fun/profile/9fasCqz4yRErTZPEWBUuoYoKZzzSziEGSjAjnj1YHoGh",
  //   wallet: "9fasCqz4yRErTZPEWBUuoYoKZzzSziEGSjAjnj1YHoGh",
  // },
  // {
  //   name: "jspizzlecryptoo",
  //   link: "https://pump.fun/profile/4z3WtX32eehkmnaNNstZWyAuVBhj6cgpk5JtkdTa4m4A",
  //   wallet: "4z3WtX32eehkmnaNNstZWyAuVBhj6cgpk5JtkdTa4m4A",
  // },
  // {
  //   name: "gutssay",
  //   link: "https://pump.fun/profile/DGma4Uxm9JS6yLNdgYaxsZhwk2nxrRGMfMt5buXbiFCm",
  //   wallet: "DGma4Uxm9JS6yLNdgYaxsZhwk2nxrRGMfMt5buXbiFCm",
  // },
  // {
  //   name: "shredtrades",
  //   link: "https://pump.fun/profile/ERhjPxBBain6CV1WTwXjjaeADWmS6P5THReYzLByVBst",
  //   wallet: "ERhjPxBBain6CV1WTwXjjaeADWmS6P5THReYzLByVBst",
  // },
  // {
  //   name: "DrHeisenberg",
  //   link: "https://pump.fun/profile/49AuxnyoFm2mkYazK4usgmsEzXJaVurQAm9T5DWZTWuH",
  //   wallet: "49AuxnyoFm2mkYazK4usgmsEzXJaVurQAm9T5DWZTWuH",
  // },
  // {
  //   name: "ImJustAGuy1993",
  //   link: "https://pump.fun/profile/2NsiXHVD8Ge2czhsM7cFKM9CTP1XnQHw6LJWGNTfennk",
  //   wallet: "2NsiXHVD8Ge2czhsM7cFKM9CTP1XnQHw6LJWGNTfennk",
  // },
  // {
  //   name: "Mzgete_",
  //   link: "https://pump.fun/profile/GTuctg8YR5oH1jdAaGMvkb51MSWPHE9nLCc1zUrwss6L",
  //   wallet: "GTuctg8YR5oH1jdAaGMvkb51MSWPHE9nLCc1zUrwss6L",
  // },
  // {
  //   name: "younghogey",
  //   link: "https://pump.fun/profile/9KPMHW2FuTrHBkPa8YQb2PR58V2KQcBXvyM21AFXvhQV",
  //   wallet: "9KPMHW2FuTrHBkPa8YQb2PR58V2KQcBXvyM21AFXvhQV",
  // },
  // {
  //   name: "edonfx",
  //   link: "https://pump.fun/profile/GKMUxpHS5uoW1dqjxzyJP66bHC3GbsKaQKU1tzXmzReb",
  //   wallet: "GKMUxpHS5uoW1dqjxzyJP66bHC3GbsKaQKU1tzXmzReb",
  // },
  // {
  //   name: "CamaboLambo420",
  //   link: "https://pump.fun/profile/Bfw66Qnx2rWi7y3rZNS5wCSrjcAkkrGV9XVfyay8N3Yj",
  //   wallet: "Bfw66Qnx2rWi7y3rZNS5wCSrjcAkkrGV9XVfyay8N3Yj",
  // },
  // {
  //   name: "liarliar",
  //   link: "https://pump.fun/profile/6G8Cu53PRgm5aPHxMaZRguYHJfaNxmnmgoR129cKMvJk",
  //   wallet: "6G8Cu53PRgm5aPHxMaZRguYHJfaNxmnmgoR129cKMvJk",
  // },
  // {
  //   name: "archelon",
  //   link: "https://pump.fun/profile/FNcrF6nt9BXswJrHom4hNmXCeW9no2C8wKh5UqdP8ueu",
  //   wallet: "FNcrF6nt9BXswJrHom4hNmXCeW9no2C8wKh5UqdP8ueu",
  // },
  // {
  //   name: "jazz",
  //   link: "https://pump.fun/profile/FRSyazz3gamvxQ3vSyA9sdy2dWbnkTLgZgPnozQ3vXZT",
  //   wallet: "FRSyazz3gamvxQ3vSyA9sdy2dWbnkTLgZgPnozQ3vXZT",
  // },
  // {
  //   name: "rockked",
  //   link: "https://pump.fun/profile/EPKVhqyGjYDE2HoPi8n9MjjkJPhiezT1Fxb7yECZJq6p",
  //   wallet: "EPKVhqyGjYDE2HoPi8n9MjjkJPhiezT1Fxb7yECZJq6p",
  // },
  // {
  //   name: "CryptoLouie",
  //   link: "https://pump.fun/profile/8URSTGkPWUdTsKji9YncfU3QEDzaE7UqThUaSDbk5A72",
  //   wallet: "8URSTGkPWUdTsKji9YncfU3QEDzaE7UqThUaSDbk5A72",
  // },
  // {
  //   name: "Trader29",
  //   link: "https://pump.fun/profile/9vXhFfEhn5sKrGeGit4ah3nbEsXUBiLPSCEHLHTcZL6C",
  //   wallet: "9vXhFfEhn5sKrGeGit4ah3nbEsXUBiLPSCEHLHTcZL6C",
  // },
  // {
  //   name: "OGDamon",
  //   link: "https://pump.fun/profile/9mtRcD5Zo8e3WLUq3k3PWpBpFxJhZXLE1GbuZB5aopEF",
  //   wallet: "9mtRcD5Zo8e3WLUq3k3PWpBpFxJhZXLE1GbuZB5aopEF",
  // },
  // {
  //   name: "TysonCrypto_",
  //   link: "https://pump.fun/profile/3eYQQb5sb99eysUUZGjNmAbC6jdGQY36nqPXVTfziaeX",
  //   wallet: "3eYQQb5sb99eysUUZGjNmAbC6jdGQY36nqPXVTfziaeX",
  // },
  // {
  //   name: "TheCopeDev",
  //   link: "https://pump.fun/profile/4gkCnJh3teEXRZ3EfXSfSArBpy2pSHsd2JjMVaQfPz4a",
  //   wallet: "4gkCnJh3teEXRZ3EfXSfSArBpy2pSHsd2JjMVaQfPz4a",
  // },




  {
    name: "DameWebThree",
    link: "https://pump.fun/profile/EtyHwLDfAi9E24Qw41xFUW8WtQ3NxajxJA2yaaUASR5a",
    wallet: "EtyHwLDfAi9E24Qw41xFUW8WtQ3NxajxJA2yaaUASR5a",
  },
  {
    name: "Roundtripper1",
    link: "https://pump.fun/profile/5iDoWCjKRh487KDyU4J3m2bHsYnGBESfVaUgUNvNBNT5",
    wallet: "5iDoWCjKRh487KDyU4J3m2bHsYnGBESfVaUgUNvNBNT5",
  },
  {
    name: "COPANGA",
    link: "https://pump.fun/profile/3xdXnq1uc6GCh541A6APSFaA9HEDHi1sqANiMnvLa4Cz",
    wallet: "3xdXnq1uc6GCh541A6APSFaA9HEDHi1sqANiMnvLa4Cz",
  },
  {
    name: "PlNGU",
    link: "https://pump.fun/profile/8emnM6nfVM2ePrYDmZcMkwy8qzDhRFZ5EefCkMsmgByX",
    wallet: "8emnM6nfVM2ePrYDmZcMkwy8qzDhRFZ5EefCkMsmgByX",
  },
  {
    name: "AIesh",
    link: "https://pump.fun/profile/9QAEGBhQcRGMS62w2Ktr69gFfRqswVT6Kg92cNBurgLL",
    wallet: "9QAEGBhQcRGMS62w2Ktr69gFfRqswVT6Kg92cNBurgLL",
  },
  {
    name: "cryptogodfather",
    link: "https://pump.fun/profile/9emXYGUF7cYtX2uyuZavDhhxZ65wHcYZgRv5AHVAHGSp",
    wallet: "9emXYGUF7cYtX2uyuZavDhhxZ65wHcYZgRv5AHVAHGSp",
  },
  {
    name: "Stain100x",
    link: "https://pump.fun/profile/68xaw2jz26BwR6yRtQxdX1Xb7cyGKrdaNMzAy6WXWMK9",
    wallet: "68xaw2jz26BwR6yRtQxdX1Xb7cyGKrdaNMzAy6WXWMK9",
  },
  {
    name: "ItabezUp",
    link: "https://pump.fun/profile/53ySUBVJCkvAkw72CojfAa8Ms8F5t8hDYCAyxXsJwTdp",
    wallet: "53ySUBVJCkvAkw72CojfAa8Ms8F5t8hDYCAyxXsJwTdp",
  },
  {
    name: "element69420",
    link: "https://pump.fun/profile/FdSShBiR1nBtxQzhwNMszyRdcvMVLiAeVraJLvERERZL",
    wallet: "FdSShBiR1nBtxQzhwNMszyRdcvMVLiAeVraJLvERERZL",
  },
  {
    name: "supernatural",
    link: "https://pump.fun/profile/6GBk14gE2FJ4pqNzGAtCruaHzENyD2bYcbJgcsCacGRX",
    wallet: "6GBk14gE2FJ4pqNzGAtCruaHzENyD2bYcbJgcsCacGRX",
  },
  {
    name: "hannahful",
    link: "https://pump.fun/profile/2dwngFffVW7Apx1ycTEWUKXwHniikX3S1NLpzucpuHmt",
    wallet: "2dwngFffVW7Apx1ycTEWUKXwHniikX3S1NLpzucpuHmt",
  },
  {
    name: "hachuping",
    link: "https://pump.fun/profile/HqBs3RVM5aRjcdjq9dVgi9Uuxgaqhqe4NyWF15vuYgAR",
    wallet: "HqBs3RVM5aRjcdjq9dVgi9Uuxgaqhqe4NyWF15vuYgAR",
  },
  {
    name: "iapetops1",
    link: "https://pump.fun/profile/AX7b5uUFk7hApBeccB2nX1hSEwA7DPcF5WBmjRH6VgBK",
    wallet: "AX7b5uUFk7hApBeccB2nX1hSEwA7DPcF5WBmjRH6VgBK",
  },
  {
    name: "doah",
    link: "https://pump.fun/profile/3YuNBitiCmfCPQ6SUfwoLiJKtU7shcMsemUVF44f22HY",
    wallet: "3YuNBitiCmfCPQ6SUfwoLiJKtU7shcMsemUVF44f22HY",
  },
  {
    name: "lastunknown",
    link: "https://pump.fun/profile/B1ZMARC6qhJYJrvBJywUYdtf6hq2WBkTgvbbnGuQsQnX",
    wallet: "B1ZMARC6qhJYJrvBJywUYdtf6hq2WBkTgvbbnGuQsQnX",
  },
  {
    name: "_Elboss",
    link: "https://pump.fun/profile/81yGFvBZGxqGmUp1Lnv6xtZ5extLnEW8uoaUEeid819m",
    wallet: "81yGFvBZGxqGmUp1Lnv6xtZ5extLnEW8uoaUEeid819m",
  },
  {
    name: "amos_j1",
    link: "https://pump.fun/profile/3UVrBNZnePDykHHtWxmDrP4a1hPX5gnWZ5r8z5bMz9Nt",
    wallet: "3UVrBNZnePDykHHtWxmDrP4a1hPX5gnWZ5r8z5bMz9Nt",
  },
  {
    name: "spectate",
    link: "https://pump.fun/profile/2mjCQy1nmT7NwcKTfYoPVmarDo7YYH4NfanYHZRQhx89",
    wallet: "2mjCQy1nmT7NwcKTfYoPVmarDo7YYH4NfanYHZRQhx89",
  },
  {
    name: "Ayuba_efe",
    link: "https://pump.fun/profile/7DsPAjLnwRYBQL3c72sZwFpxk4GPvzaQYrD6ruuzDmKu",
    wallet: "7DsPAjLnwRYBQL3c72sZwFpxk4GPvzaQYrD6ruuzDmKu",
  },
];

function shortenWallet(wallet: string) {
  return `${wallet.slice(0, 4)}...${wallet.slice(-4)}`;
}

function formatUsd(value: number) {
  const sign = value < 0 ? "-" : "+";
  const abs = Math.abs(value).toLocaleString("en-US", { maximumFractionDigits: 0 });
  return `${sign} $${abs}`;
}

function formatPercent(value: number) {
  const sign = value < 0 ? "-" : "+";
  return `${sign}${Math.abs(value).toFixed(1)}%`;
}

const PUMP_FUN_HEADERS = {
  accept: "*/*",
  origin: "https://pump.fun",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/152.0.0.0 Safari/537.36",
};

async function fetchPortfolioSummary(wallet: string) {
  const res = await fetch(
    `https://frontend-api-v3.pump.fun/portfolio-summary?user=${wallet}&period=1d`,
    { headers: PUMP_FUN_HEADERS },
  );
  if (!res.ok) throw new Error(`portfolio-summary request failed (${res.status}) for ${wallet}`);
  return res.json() as Promise<{ pnl: { usd: number }; percentage: { usd: number } }>;
}

type PortfolioPosition = { amountHeld: number; coin?: { symbol?: string } };

// Looks up how much OGCALLERS this wallet is currently holding.
async function fetchOgCallersHeld(wallet: string) {
  const res = await fetch(
    `https://frontend-api-v3.pump.fun/user-portfolio/${wallet}?filter=open&page=0&pageSize=100&sortBy=POSITION_SIZE`,
    { headers: PUMP_FUN_HEADERS },
  );
  if (!res.ok) throw new Error(`user-portfolio request failed (${res.status}) for ${wallet}`);
  const data = (await res.json()) as { positions: PortfolioPosition[] };
  const position = data.positions.find((p) => p.coin?.symbol === "OGCALLERS");
  return position?.amountHeld ?? 0;
}

function formatTokenAmount(value: number) {
  if (value >= 1_000_000) return `${trimDecimal(value / 1_000_000)}M`;
  if (value >= 1_000) return `${trimDecimal(value / 1_000)}K`;
  return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function trimDecimal(value: number) {
  return value.toFixed(1).replace(/\.0$/, "");
}

// Fetches live pump.fun portfolio PNL for the tracked squad wallets, server-side (avoids browser CORS).
export const getLeaderboard = createServerFn({ method: "GET" }).handler(
  async (): Promise<LeaderboardTrader[]> => {
    const rows = await Promise.all(
      TRACKED_WALLETS.map(async ({ name, link, wallet }) => {
        const ogHeld = await fetchOgCallersHeld(wallet)
          .then(formatTokenAmount)
          .catch(() => "—");

        try {
          const data = await fetchPortfolioSummary(wallet);
          return {
            name,
            link,
            wallet: shortenWallet(wallet),
            pnl: formatUsd(data.pnl.usd),
            percent: formatPercent(data.percentage.usd),
            pnlValue: data.pnl.usd,
            ogHeld,
          };
        } catch {
          return {
            name,
            link,
            wallet: shortenWallet(wallet),
            pnl: "—",
            percent: "—",
            pnlValue: Number.NEGATIVE_INFINITY,
            ogHeld,
          };
        }
      }),
    );

    return rows.sort((a, b) => b.pnlValue - a.pnlValue);
  },
);
