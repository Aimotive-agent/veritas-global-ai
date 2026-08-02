export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  summary: string;
  body: string[];
}

const articles: Article[] = [
  {
    slug: "mid-market-ai-gap",
    title: "The Mid-Market AI Gap: Why $100M–$1B Companies Are Underserved — and How to Win",
    category: "Strategy",
    date: "August 2026",
    readingTime: "5 min read",
    summary:
      "Palantir targets the Fortune 100. SaaS AI tools target SMBs. The mid-market — where real AI ROI lives — is wide open. Here's how to seize it.",
    body: [
      "The enterprise AI market is booming. Global spending on AI services is projected to exceed $150 billion in 2026, growing at a 35–40% compound annual rate. But if you're a company with $100 million to $1 billion in revenue, you've probably noticed something: nobody is building for you.",
      "Palantir's Foundry platform is priced for the Fortune 50 — seven-figure annual licenses, multi-year implementation timelines, and an army of forward-deployed engineers. On the other end, dozens of SaaS AI tools promise \"AI in 5 minutes\" for SMBs — plug-and-play chatbots, simple automation workflows, one-size-fits-all models. The mid-market gets squeezed from both sides.",
      "This is more than an inconvenience. It's a structural gap with real economic consequences. Mid-market companies — roughly 20,000 firms in the U.S. alone — represent the engine of the economy. They have real AI use cases, real budgets, and real pressure to compete with larger rivals who are moving faster. What they don't have is a viable path to adoption.",
      "### What makes the mid-market different",
      "Mid-market AI isn't just \"smaller enterprise AI.\" The requirements are fundamentally different:",
      "1. **Budget reality:** $100K–$1M per engagement, not $5M–$50M. These companies can't write blank checks for AI transformation.",
      "2. **Speed expectations:** 4–8 weeks to first value, not 12–18 months. Mid-market CEOs don't have the runway for multi-year digital transformation programs.",
      "3. **Lean teams:** No 50-person data science department. Often the \"AI team\" is the CTO plus two engineers.",
      "4. **Integration complexity:** These companies run the same ERP, CRM, and industry-specific systems as large enterprises — SAP, Salesforce, Guidewire, Epic — but without the in-house integration teams.",
      "5. **Risk sensitivity:** A failed AI project at a $300M company hurts a lot more than at a $30B one. They need outcomes, not experiments.",
      "### The services gap",
      "The consulting landscape mirrors the software gap. The big four (Accenture, Deloitte, etc.) optimize for Fortune 500 engagements. Boutique AI firms either chase the same whales or pivot to low-touch SaaS. Mid-market companies end up with no good options: overpay for a big firm that treats them as a second-tier client, or cobble something together from freelancers and hope it works.",
      "### Where Veritas Global AI fits",
      "The mid-market gap is where we live. Fixed-price, outcome-based engagements from $50K to $1M. Four to eight weeks to first production deployment. Platform-agnostic, so we work with your existing stack — not our preferred vendor. And every engagement starts with a concrete AI readiness assessment, not a sales pitch.",
      "The opportunity is enormous: $15–25 billion in serviceable market, growing fast, with no clear incumbent. The companies that serve this gap well over the next three years will define the next generation of enterprise AI consulting.",
    ],
  },
  {
    slug: "fixed-price-ai",
    title: "Fixed-Price AI: Why Outcome-Based Pricing Is the Future of Enterprise Consulting",
    category: "Industry",
    date: "August 2026",
    readingTime: "5 min read",
    summary:
      "Time-and-materials billing incentivizes the wrong behaviors. Fixed-price, outcome-based engagements align incentives and de-risk the buyer. Here's our model.",
    body: [
      "The enterprise consulting industry has a dirty secret: its pricing model is broken. Time-and-materials billing — charging by the hour, the day, or the sprint — has been the default for decades. And it creates perverse incentives at every level.",
      "When a consulting firm bills by the hour, every hour of delay is revenue. Scope creep is profit. A project that takes 12 months instead of 6 generates twice the billings. The client carries all the risk: if the project fails, they've still paid for every hour. The consultant carries none.",
      "This isn't a theoretical problem. McKinsey's own research finds that 70% of digital transformation projects fail to meet their stated goals. When you're paying by the hour, failure is highly profitable for someone. It's just not the client.",
      "### The alternative: outcome-based pricing",
      "Fixed-price, outcome-based engagements flip this dynamic entirely. The price is scoped upfront based on the value delivered, not the hours consumed. The consultant carries the execution risk. If the project takes longer than estimated, that's the consultant's problem — not the client's. If it delivers early, both parties win.",
      "This model is standard in construction, manufacturing, and software product development. It's oddly rare in consulting. The reason is simple: outcome-based pricing requires the consultant to be genuinely good at estimation, scope management, and delivery. It exposes firms that have been coasting on billable hours for years.",
      "### What this looks like in practice",
      "At Veritas Global AI, every engagement follows the same structure:",
      "1. **Fixed-scope discovery (2 weeks, fixed price):** AI readiness assessment, use case prioritization, technical feasibility analysis. At the end, the client has a clear picture of what's worth building — and we've earned the right to propose the build phase.",
      "2. **Fixed-price build (4–12 weeks, outcome-gated):** The implementation phase has a clear scope, clear KPIs, and a fixed price. Partial payment milestones are tied to delivered outcomes — a working model in staging, a successful UAT sign-off, a production deployment — not to hours logged.",
      "3. **Optional managed operations (monthly retainer):** For clients who want us to run the ML infrastructure post-launch, we offer a flat monthly rate with SLA-backed uptime guarantees.",
      "### Why this wins",
      "For the client: zero financial risk on delivery. Predictable budgeting. Aligned incentives — we only succeed when they get value.",
      "For Veritas: we're incentivized to be fast and efficient. Every week we save is margin we keep. Our interests and the client's interests point in exactly the same direction.",
      "The firms that figure out fixed-price AI delivery over the next 2–3 years will eat the lunch of every T&M shop still billing by the hour. The math is that simple.",
    ],
  },
  {
    slug: "truth-first-ai-governance",
    title: "Why \"Truth-First\" AI Matters: Governance, Explainability, and Enterprise Trust",
    category: "Governance",
    date: "August 2026",
    readingTime: "5 min read",
    summary:
      "As AI regulation tightens globally, enterprises need more than accurate models — they need auditable, explainable ones. How Veritas builds trust into every engagement.",
    body: [
      "In 2026, AI governance is no longer optional. The EU AI Act is in force. The White House Executive Order on AI is shaping federal procurement. Individual U.S. states are passing their own AI regulations. And enterprise boards — spurred by high-profile AI failures, biased model outputs, and shareholder pressure — are asking harder questions than ever about what their AI systems actually do.",
      "The problem: most AI governance frameworks were bolted on after the fact. They're compliance checklists — did we document the model? Did we run a bias test? — rather than genuine operational principles. They treat governance as an audit problem, not a design problem.",
      "\"Truth-first\" AI is a different approach. It means building auditable, explainable, and transparent systems from the first line of code — not retrofitting compliance after deployment.",
      "### What truth-first means in practice",
      "1. **Data lineage that doesn't lie.** Every model should be traceable to its training data, and every training dataset should be traceable to its source. If a model makes a decision, you should be able to answer \"what data was this based on?\" in under five seconds — not five days of forensic archeology.",
      "2. **Explainability as a feature, not a checkbox.** SHAP values, LIME explanations, and attention visualizations are useful — but they're tools, not answers. Truth-first means building models where explainability is designed into the architecture: interpretable models where possible, well-documented ensembling where not, and a clear \"explainability contract\" for every model in production.",
      "3. **Bias auditing that's continuous, not point-in-time.** A bias test at deployment time tells you almost nothing. Data drifts. Populations shift. Models learn bad habits. Truth-first means continuous monitoring with automated retraining triggers — and a human-in-the-loop review when those triggers fire.",
      "4. **Human accountability, not algorithmic laundering.** An AI system that makes a consequential decision — deny a claim, flag a transaction, recommend a sentence — must have a named human accountable for that decision pathway. \"The algorithm decided\" is never an acceptable answer.",
      "### The business case for governance",
      "Governance isn't just risk management — it's a competitive advantage. Enterprise buyers are increasingly demanding auditable AI. RFPs now include governance requirements as standard. And the companies that can demonstrate rigorous, transparent AI practices win deals that their black-box competitors can't even bid on.",
      "In regulated industries — insurance, banking, healthcare — governance is a table-stakes requirement. In every industry, it's becoming one.",
      "Veritas Global AI was founded on the principle that AI must be truthful. Our name isn't a branding exercise — it's an operational commitment. Every model we build, every pipeline we deploy, every engagement we deliver is governed by the same question: can we explain exactly how this works to a regulator, an auditor, or a skeptical executive?",
      "If the answer is no, we haven't finished building it.",
    ],
  },
  {
    slug: "insurance-ai-2026",
    title: "Insurance AI in 2026: Claims, Underwriting, and the $7T Opportunity",
    category: "Industry",
    date: "August 2026",
    readingTime: "5 min read",
    summary:
      "The global insurance industry is ripe for AI transformation. From automated claims processing to AI-powered underwriting — where the biggest wins are hiding.",
    body: [
      "The global insurance industry manages over $7 trillion in premiums annually. It is also one of the last major industries still running on paper, spreadsheets, and mainframe-era claims systems. The gap between what's possible with modern AI and what most insurers actually deploy is enormous — and it's closing fast.",
      "At Veritas Global AI, insurance is our Phase 1 vertical for a reason: it's regulated (trust matters), it's data-rich (claims histories, actuarial tables, policy documents), and the ROI on AI is immediate and measurable. Here's where the biggest opportunities lie in 2026.",
      "### Claims: the $200 billion inefficiency",
      "Insurance claims processing remains shockingly manual. Adjusters spend 30–50% of their time on tasks that AI can handle today: document classification, data extraction from scanned forms, coverage verification, damage estimation from photos. McKinsey estimates that AI can reduce claims processing costs by 25–35%, which translates to roughly $200 billion globally.",
      "The technology is ready. Computer vision models can assess auto damage from smartphone photos with accuracy rivaling human adjusters. RAG pipelines can ingest policy documents and answer coverage questions in seconds. And anomaly detection models can flag potentially fraudulent claims before adjusters invest hours in investigation.",
      "The blockers aren't technical — they're organizational. Legacy claims systems (Guidewire, Duck Creek) weren't built for AI integration. Compliance teams are cautious. And there's a justified concern about algorithmic decision-making in a regulated industry. This is exactly where a truth-first, governance-forward approach wins deals.",
      "### Underwriting: from actuarial tables to real-time risk",
      "Commercial underwriting today relies heavily on historical loss data and actuarial models that update quarterly or annually. In a world where supply chains shift, climate risk changes, and cyber threats evolve daily, this lag is increasingly expensive.",
      "Modern ML models can ingest real-time data — satellite imagery, IoT sensor feeds, news sentiment, shipping data — and produce risk scores that update continuously. Some early adopters are already seeing results: commercial property insurers using satellite imagery + climate models to reprice flood and fire risk dynamically; cyber insurers ingesting real-time vulnerability scans and breach data to adjust premiums; life insurers using wearable data (with consent) to offer dynamic pricing based on actual health metrics.",
      "The regulatory line is clear: underwriting decisions must be explainable and non-discriminatory. But \"explainable\" doesn't mean \"simple\" — it means auditable. A gradient-boosted tree ensemble with SHAP explanations is more transparent than a human underwriter's gut feeling, and it's defensible in court.",
      "### The Veritas insurance play",
      "Our insurance strategy is focused:",
      "1. **Claims intelligence** — document processing, fraud detection, intelligent triage. 4–8 week engagements, fixed price. This is where we lead with case studies and demonstrable ROI.",
      "2. **Underwriting augmentation** — risk modeling, alternative data integration, portfolio optimization. Longer engagements (8–16 weeks), but higher contract values.",
      "3. **Compliance AI** — regulatory change monitoring, automated filing, audit trail generation. A differentiator that nobody else is leading with.",
      "Insurance is a $7 trillion industry that spends roughly $250 billion annually on technology. AI-native services will capture an increasing share of that spend. The firms that establish credibility in 2026–2027 will own the category for the next decade.",
    ],
  },
  {
    slug: "platform-agnostic-ai-architecture",
    title: "Platform-Agnostic AI Architecture: Avoiding Vendor Lock-In in the LLM Era",
    category: "Technical",
    date: "August 2026",
    readingTime: "5 min read",
    summary:
      "The lesson of cloud computing applies to AI: don't bet on a single vendor. How to build multi-model, portable AI architectures that survive platform shifts.",
    body: [
      "Remember the cloud lock-in debates of 2015–2020? Every enterprise spent years debating whether to go all-in on AWS, multi-cloud, or hybrid. The smart money eventually landed on portable architectures — containerized workloads, infrastructure-as-code, cloud-agnostic abstractions. The companies that bet on single-vendor lock-in are now paying the price in negotiating leverage and migration costs.",
      "The same pattern is playing out in AI, compressed into months instead of years. The LLM landscape in 2026 is dominated by a handful of providers — OpenAI, Anthropic, Google, Meta (open-source) — each with proprietary APIs, incompatible model formats, and rapidly evolving pricing. Choosing one is easy. Switching later is hard. And the cost of being wrong is enormous.",
      "### The lock-in vectors",
      "AI vendor lock-in takes several forms, each more subtle than raw API dependency:",
      "1. **Prompt engineering lock-in.** Every model has quirks — the prompt that works perfectly on GPT-4o produces gibberish on Claude. If your entire pipeline is fine-tuned to one model's behavior, switching means re-prompting everything.",
      "2. **Embedding incompatibility.** Your vector database is populated with OpenAI embeddings at 1536 dimensions. Switching to a different embedding model means re-embedding your entire corpus — and the nearest-neighbor results will shift.",
      "3. **Eval pipeline calibration.** Your eval harness is tuned to one model's output distribution. A new model with different characteristics will trigger a storm of false-positive eval failures, masking the real regressions.",
      "4. **Agent framework coupling.** LangChain, LlamaIndex, and similar frameworks have deep integrations with specific providers. Switching means rewriting agent orchestration logic.",
      "5. **Cost model dependency.** You've optimized your architecture around OpenAI's pricing tiers. Switching to a provider with different rate limits, context window pricing, or throughput characteristics breaks your cost model.",
      "### The platform-agnostic pattern",
      "A platform-agnostic AI architecture doesn't mean \"use the lowest common denominator.\" It means designing abstraction layers at the right boundaries.",
      "**The model router pattern.** Deploy a thin routing layer that accepts a standard request format and dispatches to the appropriate provider based on task type, cost, latency requirements, and fallback logic. This gives you provider flexibility without sacrificing optimization per task.",
      "**Embedding abstraction.** Standardize on a single embedding dimension across providers (e.g., 1536 or 768) and maintain a versioned embedding store. When you switch embedding models, re-embed in the background and A/B test retrieval quality before cutting over.",
      "**Eval-driven migration.** Before switching models, run your full eval suite against the new model and compare pass rates against the current baseline. Don't trust benchmarks — trust your actual use cases.",
      "**Multi-model governance.** Your audit trail should record which model made which decision, with which prompt, at what confidence threshold. This is both good governance and good engineering — when a model update changes behavior, you can trace exactly which decisions are affected.",
      "### The open-source hedge",
      "Meta's Llama 4, Mistral, and other open-weight models are closing the gap with proprietary models. Self-hosting isn't right for everyone — it requires GPU infrastructure, MLOps maturity, and ongoing maintenance — but having it as an option changes your negotiating position. When your architecture can swap in a self-hosted model without disruption, your cloud AI provider's pricing becomes more flexible.",
      "### Where Veritas fits",
      "Platform-agnostic architecture isn't a theoretical position for us — it's how we build. Every engagement starts with the client's existing stack and works outward. We don't have a preferred AI vendor. We don't collect partnership revenue from model providers. We recommend what works for your infrastructure, your budget, and your risk tolerance — and we build in portability from day one.",
      "In the LLM era, the most expensive decision you'll make isn't which model to use. It's designing your architecture so you can't change your mind.",
    ],
  },
];

export function getAllArticleSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export default articles;
