export const reviews = [
  {
    slug: "bybit",
    name: "Bybit",
    rating: 9.2,
    bestFor: "Derivatives & Futures Trading",
    description: "Industry's best derivatives exchange with 100x leverage, copy trading, and the lowest futures fees in the market.",
    pros: ["Lowest futures fees (0.01% maker)", "200+ perpetual contracts", "Copy trading for beginners", "$500M+ insurance fund", "Fast withdrawals", "Proof of Reserves"],
    cons: ["Not available in some US states", "Spot selection smaller than Binance", "Less beginner-friendly than Coinbase"],
    fees: "0.01% maker / 0.06% taker (futures)",
    coins: 400,
    regulation: "CySEC, Dubai VARA, Estonia",
    affiliateUrl: "https://www.bybit.com/invite?ref=LJXQEA&medium=referral&utm_campaign=evergreen",
    bonus: "Up to $4,230 in deposit bonus"
  },
  {
    slug: "binance",
    name: "Binance",
    rating: 8.5,
    bestFor: "Overall Trading & Selection",
    description: "World's largest exchange with 600+ coins, spot and futures, staking, and comprehensive earn products.",
    pros: ["600+ cryptocurrencies listed", "Low spot fees (0.1%, 0.075% with BNB)", "Binance Earn (staking up to 25% APY)", "BNB Chain ecosystem", "Binance Academy education"],
    cons: ["Regulatory issues in some countries", "Complex interface for beginners", "Customer support response times"],
    fees: "0.1% spot (0.075% with BNB)",
    coins: 600,
    regulation: "Multiple jurisdictions (varies by region)",
    affiliateUrl: "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00QK8KOD3O",
    bonus: "Up to $600 in bonuses"
  },
  {
    slug: "kraken",
    name: "Kraken",
    rating: 8.8,
    bestFor: "Security & Trust",
    description: "The most secure major exchange. Founded 2011, never hacked. Bank-grade security with full regulatory compliance.",
    pros: ["Never been hacked (15+ years)", "95% cold storage", "Proof of Reserves", "Strong regulation (US, UK, EU)", "Excellent customer support"],
    cons: ["Higher spot fees (0.16%/0.26%)", "Fewer coins than Binance", "Less advanced futures features"],
    fees: "0.16% maker / 0.26% taker (spot)",
    coins: 200,
    regulation: "FinCEN, FCA, VARA, 40+ US states",
    affiliateUrl: "https://invite.kraken.com/JDNW/jb8279xo",
    bonus: "No sign-up bonus"
  },
  {
    slug: "etoro",
    name: "eToro",
    rating: 7.5,
    bestFor: "Social Copy Trading & Beginners",
    description: "World's leading social trading platform. Copy top traders automatically. Best for beginners who want passive crypto exposure.",
    pros: ["CopyTrader (auto-copy top investors)", "30M+ user community", "Strong regulation (FCA, CySEC, ASIC)", "User-friendly mobile app", "Crypto wallet included"],
    cons: ["1% spread (high compared to exchanges)", "Only 100+ coins", "No futures trading", "Higher fees for active traders"],
    fees: "~1% spread on crypto",
    coins: 100,
    regulation: "FCA, CySEC, ASIC, FinCEN",
    affiliateUrl: "https://etoro.com",
    bonus: "N/A"
  },
  {
    slug: "coinbase",
    name: "Coinbase",
    rating: 7.8,
    bestFor: "US Users & Beginners",
    description: "The most trusted US-based exchange. Publicly traded, fully regulated in all 50 states. Best for first-time crypto buyers.",
    pros: ["Publicly traded company (NASDAQ: COIN)", "Licensed in all 50 US states", "Excellent UI/UX", "Coinbase Earn (learn and earn)", "Institutional custody via Coinbase Custody"],
    cons: ["Highest trading fees (0.5-0.6%)", "No futures trading", "Smaller coin selection", "Advanced features limited"],
    fees: "0.5-0.6% spot (maker/taker)",
    coins: 250,
    regulation: "NYDFS, FinCEN, 50 US states",
    affiliateUrl: "https://coinbase.com/join/3VNEB5H?src=referral-link",
    bonus: "Up to $10 in free BTC"
  }
];

export const faqData = [
  {
    q: "What's the best crypto exchange for beginners?",
    a: "For beginners, we recommend eToro (simplest UI, copy trading) or Bybit (low fees, easy to use). Beginners should start with spot trading before attempting leverage."
  },
  {
    q: "Is leverage trading safe for beginners?",
    a: "No. Beginners should avoid leverage until they understand market mechanics. Start with 2-3x maximum on small positions. The risk of liquidation is very real."
  },
  {
    q: "Which exchange has the lowest fees?",
    a: "Bybit has the lowest fees overall — 0.01% maker fee on futures. For spot trading, Binance with BNB discount (0.075%) is cheapest."
  },
  {
    q: "Can I trade crypto without KYC?",
    a: "KYC is required on most centralized exchanges (Bybit, Binance, Coinbase). For no-KYC trading, use decentralized exchanges (DEX) like Uniswap or Jupiter."
  },
  {
    q: "How much money do I need to start crypto trading?",
    a: "You can start with as little as $10-50 on most exchanges. For serious trading, $500-1,000 is recommended so you can properly diversify and use stop-losses."
  },
  {
    q: "What's the best strategy for crypto trading in 2026?",
    a: "Swing trading (2-7 day holds) on major pairs like BTC and ETH has been the most profitable strategy in 2026. Use trend following on 4H and daily charts."
  }
];
