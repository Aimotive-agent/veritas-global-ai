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
      "### Where Veritas AI fits",
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
      "At Veritas AI, every engagement follows the same structure:",
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
      "Veritas AI was founded on the principle that AI must be truthful. Our name isn't a branding exercise — it's an operational commitment. Every model we build, every pipeline we deploy, every engagement we deliver is governed by the same question: can we explain exactly how this works to a regulator, an auditor, or a skeptical executive?",
      "If the answer is no, we haven't finished building it.",
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
