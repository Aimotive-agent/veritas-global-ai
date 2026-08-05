import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Demos — Veritas Global AI",
  description:
    "Live demonstrations of Veritas Global AI products — including the AI Wise Health Companion, the AI Horizon Ecosystem, MindVault, and AI Vector Base. Explore the demos.",
};

const demos = [
  {
    title: "AI Wise Health Companion",
    category: "Neural Chatbot · AI Assistant",
    description:
      "A full AI-powered medical companion: personalized health management, medication tracking, case management, and document analysis — all through an intelligent neural chatbot grounded in medical knowledge.",
    features: [
      "Neural AI doctor for second opinions",
      "Health dashboard, tasks & medications",
      "Medical case management",
      "Document & image analysis",
    ],
    href: "https://ai-wise-health-companion-v2.netlify.app",
    repo: "https://github.com/Aimotive-agent/ai-wise-health-companion",
    tag: "Live Demo",
    terminal: "ai-wise-health",
    q: "What does my latest blood panel suggest?",
    a: "Your panel is largely within normal ranges. I\u2019d note your LDL slightly above target \u2014 worth a conversation with your provider.",
    metric1: "24/7",
    metric1Label: "Availability",
    metric2: "+12",
    metric2Label: "Health Features",
  },
  {
    title: "NeuroNest AI",
    category: "AI Social Platform",
    description:
      "A social network for developers and tech professionals with AI-powered features — code assistance, AI lab, content generation, and image creation. Built on React and DeepSeek.",
    features: [
      "AI code assistant & pair programming",
      "AI image generation lab",
      "Developer social network & feed",
      "Code explanation & optimization",
    ],
    href: "https://neuronest-ai-401.netlify.app",
    repo: "https://github.com/Aimotive-agent/synth-social-space",
    tag: "Live Demo",
    terminal: "neuronest-ai",
    q: "How does NeuroNest help developers?",
    a: "NeuroNest provides AI-powered code analysis, explanations, optimization, and a social feed — all in a developer-focused community platform.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "Social",
    metric2Label: "Platform",
  },
  {
    title: "MindVault",
    category: "Neural Knowledge Platform",
    description:
      "A personal digital brain that travels with you — AI-powered knowledge management with secure, encrypted storage for notes, research, and ideas, available anywhere.",
    features: [
      "AI-powered knowledge management",
      "Secure encrypted storage",
      "Biometric authentication",
      "Synced anywhere, on any device",
    ],
    href: "https://ai-mindvault-538.netlify.app",
    repo: "https://github.com/Aimotive-agent/mindvault-digital-nexus",
    tag: "Live Demo",
    terminal: "mindvault",
    q: "Never lose your knowledge again?",
    a: "Exactly. MindVault combines advanced AI with secure storage \u2014 your personal digital brain, available anywhere.",
    metric1: "AI",
    metric1Label: "Powered",
    metric2: "24/7",
    metric2Label: "Synced",
  },
  {
    title: "AI Vector Base",
    category: "AI Vector Database",
    description:
      "A real vector knowledge base — upload documents and ask questions through an AI assistant that searches and answers across your stored content. Built on React, Supabase, and DeepSeek.",
    features: [
      "Document upload & vectorization",
      "Semantic search across chunks",
      "DeepSeek-powered Q&A chat",
      "Vector base management",
    ],
    href: "https://ai-vector-base-v2.netlify.app",
    repo: "https://github.com/Aimotive-agent/vector-garden-ai",
    tag: "Live Demo",
    terminal: "ai-vector-base",
    q: "What's in my knowledge base?",
    a: "Ask about any uploaded document — the assistant retrieves the most relevant chunks and answers from your stored content.",
    metric1: "100%",
    metric1Label: "DeepSeek AI",
    metric2: "24/7",
    metric2Label: "Vector Search",
  },
  {
    title: "AI Pawsitive Care",
    category: "Neural Chatbot · Veterinary AI",
    description:
      "An AI-powered veterinary assistant platform for pet health management — medication tracking, appointment scheduling, health records, and AI-driven veterinary chat. Built on React and DeepSeek.",
    features: [
      "AI veterinary chat assistant",
      "Pet health & medication tracking",
      "Photo library & document analysis",
      "Emergency vet finder",
    ],
    href: "https://ai-pawsitive-care-v2.netlify.app",
    repo: "https://github.com/Aimotive-agent/ai-pawsitive-care",
    tag: "Live Demo",
    terminal: "ai-pawsitive-care",
    q: "Is my dog's lethargy something to worry about?",
    a: "Lethargy can range from mild to serious. I'll help assess urgency — but always consult your real veterinarian for medical decisions.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "24/7",
    metric2Label: "Pet Care",
  },
  {
    title: "Smart Case AI (AILA Lawyers)",
    category: "AI Legal Platform",
    description:
      "An AI-powered legal assistant platform — AILA Lawyers provides intelligent case management, legal research tools, and an AI assistant for legal professionals. Built on React.",
    features: [
      "AI legal case management",
      "Document & case tracking",
      "Legal professional dashboard",
      "Multi-platform support",
    ],
    href: "https://aila-lawyers.netlify.app",
    repo: "https://github.com/Aimotive-agent/smart-case-ai",
    tag: "Live Demo",
    terminal: "smart-case-ai",
    q: "How does AILA assist with legal work?",
    a: "AILA provides structured case management, legal research assistance, and document intelligence — built for the modern legal professional.",
    metric1: "24/7",
    metric1Label: "Availability",
    metric2: "AI",
    metric2Label: "Powered",
  },
  {
    title: "AI Lawyer Assistant",
    category: "AI Legal Platform",
    description:
      "A comprehensive AI-powered legal assistant — full case management with templates, legal research, email composer, document review, and AI chat. Built on React and DeepSeek.",
    features: [
      "AI legal research & case management",
      "Document review & templates",
      "Email composition & chat",
      "DeepSeek-powered AI assistant",
    ],
    href: "https://ai-lawyer-assistant.netlify.app",
    repo: "https://github.com/Aimotive-agent/smart-law-workbench",
    tag: "Live Demo",
    terminal: "ai-lawyer-assistant",
    q: "How does the AI Lawyer Assistant help with case management?",
    a: "The AI Lawyer Assistant provides case management, legal templates, research tools, and AI-powered drafting — all in one platform.",
    metric1: "100+",
    metric1Label: "Templates",
    metric2: "DeepSeek",
    metric2Label: "AI Powered",
  },
  {
    title: "NeuroNest AI",
    category: "AI Social Platform",
    description:
      "A social network for developers and tech professionals with AI-powered features — code assistance, AI lab, content generation, and image creation. Built on React and DeepSeek.",
    features: [
      "AI code assistant & pair programming",
      "AI image generation lab",
      "Developer social network & feed",
      "Code explanation & optimization",
    ],
    href: "https://neuronest-ai-401.netlify.app",
    repo: "https://github.com/Aimotive-agent/synth-social-space",
    tag: "Live Demo",
    terminal: "neuronest-ai",
    q: "How does NeuroNest help developers?",
    a: "NeuroNest provides AI-powered code analysis, explanations, optimization, and a social feed — all in a developer-focused community platform.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "Social",
    metric2Label: "Platform",
  },
  {
    title: "AI Horizon Ecosystem",
    category: "AI Platform Ecosystem",
    description:
      "AI Production Pro's ecosystem of AI-powered second opinion platforms — spanning healthcare, veterinary care, legal, and financial expertise, with twelve more professional sectors in the pipeline.",
    features: [
      "Live AI consultation platforms",
      "Healthcare, legal & financial AI",
      "Veterinary & goal-coaching AI",
      "12+ coming-soon sectors",
    ],
    href: "https://ai-horizon-ecosystem.netlify.app",
    repo: "https://github.com/Aimotive-agent/ais2nd-opinion-main",
    tag: "Live Demo",
    terminal: "ai-horizon",
    q: "Which second-opinion platforms are live?",
    a: "Four are live today — healthcare, veterinary, legal and financial — with 12+ more professional sectors coming.",
    metric1: "4",
    metric1Label: "Live Platforms",
    metric2: "12+",
    metric2Label: "Coming Soon",
  },
  {
    title: "LifeQuest AI",
    category: "AI Goal Achievement Platform",
    description:
      "An AI-powered goal-setting and life coaching platform — create goals, get AI-generated step-by-step plans, track progress on a calendar, and chat with an AI life coach. Built on React and DeepSeek.",
    features: [
      "AI goal planning assistant",
      "Step-by-step achievement plans",
      "Progress calendar & tracking",
      "AI life coach chat",
    ],
    href: "https://lifequest-ai-253.netlify.app",
    repo: "https://github.com/Aimotive-agent/achieve-it-ai-power",
    tag: "Live Demo",
    terminal: "lifequest-ai",
    q: "How does LifeQuest help me achieve my goals?",
    a: "LifeQuest generates personalized step-by-step plans, tracks your progress, and provides an AI coach to keep you motivated and on track — all in one platform.",
    metric1: "AI",
    metric1Label: "Coach",
    metric2: "5-Step",
    metric2Label: "Plans",
  },
  {
    title: "Global Tax AI Assist",
    category: "AI Tax & Finance Platform",
    description:
      "An AI-powered tax assistant for global tax management — company filing, AI tax advice, invoice tracking, tax form management, and multi-country support. Built on React and DeepSeek.",
    features: [
      "AI tax advice & Q&A",
      "Company tax management",
      "Invoice & form tracking",
      "Multi-country support",
    ],
    href: "https://global-tax-ai.netlify.app",
    repo: "https://github.com/Aimotive-agent/global-tax-ai-assist",
    tag: "Live Demo",
    terminal: "global-tax-ai",
    q: "What deductions can I claim for my small business?",
    a: "Common small business deductions include home office expenses, equipment, travel, and professional services — always verify with a tax professional for your specific jurisdiction.",
    metric1: "AI",
    metric1Label: "Tax Advisor",
    metric2: "Global",
    metric2Label: "Coverage",
  },
  {
    title: "Nexis Core Engine",
    category: "AI Research Platform",
    description:
      "An AI-powered research hub with deep research queries, text analysis, studio content generation (slides/podcasts/images), and voice oracle — all powered by DeepSeek. Built on React 19.",
    features: [
      "Deep research queries",
      "Text analysis & summarization",
      "Slide deck & podcast generation",
      "Voice oracle interface",
    ],
    href: "https://nexis-core.netlify.app",
    repo: "https://github.com/Aimotive-agent/Veritas-AI-Research-hub",
    tag: "Live Demo",
    terminal: "nexis-core",
    q: "Research the latest AI trends in enterprise software",
    a: "Researching... Enterprise AI is trending toward sovereign deployment, agentic workflows, and multimodal models — with a focus on security and compliance.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "Research",
    metric2Label: "Powered",
  },
  {
    title: "Master Mild Wizard",
    category: "Fantasy Idle-RPG Game",
    description:
      "A stunning fantasy idle-RPG adventure — battle monsters in real-time, collect powerful equipment, master magical skills, and journey through an epic world. Play on web and mobile.",
    features: [
      "Real-time action combat",
      "14 character classes",
      "Equipment & inventory system",
      "Quest-driven progression",
    ],
    href: "https://www.mastermildwizard.com",
    repo: null,
    tag: "Live Game",
    terminal: "master-mild-wizard",
    q: "What class should I pick as a beginner?",
    a: "Start as a Warrior for balanced stats, or Wizard if you love magic — progress through Knight → Crusader → Lord Knight, or Wizard → Sorcerer → Archmage!",
    metric1: "14",
    metric1Label: "Classes",
    metric2: "RPG",
    metric2Label: "Idle Game",
  },
  {
    title: "VectorVault SynapseCore",
    category: "AI MCP Platform",
    description:
      "An advanced AI workbench with Model Context Protocol (MCP) support — vector-based knowledge retrieval, multi-model AI chat, file uploads, and tool orchestration. Built on React and DeepSeek.",
    features: [
      "MCP tool orchestration",
      "Multi-model AI chat",
      "Vector knowledge retrieval",
      "File & document processing",
    ],
    href: "https://vectorvault-synapse.netlify.app",
    repo: "https://github.com/Aimotive-agent/vectorvault-synapsacore02",
    tag: "Live Demo",
    terminal: "vectorvault-synapse",
    q: "How does the MCP workbench help with AI tools?",
    a: "The MCP workbench lets you connect multiple AI models, retrieve knowledge from vector bases, and orchestrate tools — all through a unified chat interface.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "MCP",
    metric2Label: "Protocol",
  },
  {
    title: "AI Project Assistant",
    category: "AI Knowledge & MCP Platform",
    description:
      "An intelligent AI knowledge assistant with MCP tool integration — manage projects, chat with AI, upload files, and orchestrate tools through a powerful workspace. Built on React and DeepSeek.",
    features: [
      "AI-powered project assistant",
      "MCP tool orchestration",
      "File & knowledge management",
      "Live session collaboration",
    ],
    href: "https://ai-project-assistant.netlify.app",
    repo: "https://github.com/Aimotive-agent/AI-Knowledge-assistant",
    tag: "Live Demo",
    terminal: "ai-project-assistant",
    q: "How can the AI assistant help manage my project?",
    a: "The AI assistant can analyze project data, generate insights, manage tasks, and help you navigate your knowledge base — all through natural conversation.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "MCP",
    metric2Label: "Tools",
  },
  {
    title: "AI Life Empower",
    category: "AI Platform · Marketing Site",
    description:
      "An AI-powered life empowerment platform — featuring an AI Agent assistant page, myth-buster quiz, and comprehensive contact system. Built on React.",
    features: [
      "AI agent assistant page",
      "Interactive AI myth buster quiz",
      "Life empowerment resources",
      "Contact & consultation system",
    ],
    href: "https://ai-life-empower.netlify.app",
    repo: "https://github.com/Aimotive-agent/ai-life-empower",
    tag: "Live Demo",
    terminal: "ai-life-empower",
    q: "How does AI Life Empower help me?",
    a: "AI Life Empower provides tools and resources to help you leverage AI for personal growth, productivity, and life transformation — with an interactive quiz and AI assistant guidance.",
    metric1: "AI",
    metric1Label: "Powered",
    metric2: "Life",
    metric2Label: "Empowerment",
  },
  {
    title: "Intelligent Flow CRM",
    category: "AI CRM Platform",
    description:
      "An intelligent CRM platform with email integration, task management, calendar, contacts, and MCP-powered workflows — designed for modern business automation. Built on React.",
    features: [
      "Email client & integration",
      "Task & calendar management",
      "Contact & lead tracking",
      "MCP workflow automation",
    ],
    href: "https://intelligent-flow-crm.netlify.app",
    repo: "https://github.com/Aimotive-agent/intellegent-flow-crm-app",
    tag: "Live Demo",
    terminal: "intelligent-flow-crm",
    q: "How does the CRM help manage my business?",
    a: "Intelligent Flow CRM centralizes your email, tasks, calendar, and contacts in one platform — with MCP-powered automation for repetitive workflows.",
    metric1: "CRM",
    metric1Label: "Platform",
    metric2: "MCP",
    metric2Label: "Automation",
  },
  {
    title: "Chartopia Palette Verse",
    category: "AI Creative Platform",
    description:
      "A creative palette and chart visualization platform — explore color palettes, generate charts, and create visual data stories. Built on React with an artistic interface.",
    features: [
      "Color palette explorer",
      "Chart generation & visualization",
      "Creative data storytelling",
      "Artistic interface design",
    ],
    href: "https://chartopia-palette.netlify.app",
    repo: "https://github.com/Aimotive-agent/chartopia-palette-verse",
    tag: "Live Demo",
    terminal: "chartopia-palette",
    q: "What kind of charts can I create?",
    a: "Chartopia lets you explore color palettes and generate beautiful data visualizations — from bar charts to creative infographics, all with an artistic touch.",
    metric1: "Visual",
    metric1Label: "Platform",
    metric2: "Creative",
    metric2Label: "Tools",
  },
  {
    title: "Marketing Nexus",
    category: "AI Marketing Platform",
    description:
      "An omnipresent marketing automation platform with AI-powered chat, campaign management, workflow automation, and calendar/email integration. Built on React and DeepSeek.",
    features: [
      "AI marketing chat assistant",
      "Campaign management",
      "Workflow automation",
      "Email & calendar integration",
    ],
    href: "https://marketing-nexus-245.netlify.app",
    repo: "https://github.com/Aimotive-agent/omnipresent-marketing-nexus",
    tag: "Live Demo",
    terminal: "marketing-nexus",
    q: "How can the AI help with my marketing campaigns?",
    a: "The AI marketing assistant helps you brainstorm campaign ideas, draft content, analyze performance, and automate repetitive marketing tasks — all through natural conversation.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "Marketing",
    metric2Label: "Automation",
  },
  {
    title: "SynapseCore Tools",
    category: "AI MCP Orchestration",
    description:
      "A powerful MCP tool orchestrator with AI-powered chat, file uploads, multi-server management, and intelligent tool chaining. Built on React and DeepSeek.",
    features: [
      "MCP tool orchestration",
      "Multi-provider AI chat",
      "File processing & upload",
      "Server & tool management",
    ],
    href: "https://synapsecore-tools.netlify.app",
    repo: "https://github.com/Aimotive-agent/pipedream-tool-orchestrator",
    tag: "Live Demo",
    terminal: "synapsecore-tools",
    q: "How does the tool orchestrator work?",
    a: "SynapseCore connects multiple MCP servers and tools, letting you orchestrate complex AI workflows through a unified chat interface — all powered by DeepSeek.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "MCP",
    metric2Label: "Orchestration",
  },
  {
    title: "AI Research Assistant",
    category: "AI Research Platform",
    description:
      "An AI-powered research assistant with intelligent chat, deep research capabilities, and knowledge synthesis. Built on React 19 and DeepSeek.",
    features: [
      "AI research & analysis",
      "Intelligent chat assistant",
      "Knowledge synthesis",
      "Research workflow tools",
    ],
    href: "https://ai-research-assistant-558.netlify.app",
    repo: "https://github.com/Aimotive-agent/AI-Assistant-research",
    tag: "Live Demo",
    terminal: "ai-research",
    q: "How can this AI help with my research?",
    a: "The AI Research Assistant can analyze topics, synthesize information from conversations, and help you explore complex subjects through natural dialogue — all powered by DeepSeek.",
    metric1: "DeepSeek",
    metric1Label: "AI Engine",
    metric2: "Research",
    metric2Label: "Powered",
  },
];

export default function DemosPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl">
            <div className="section-rule mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">Live Demonstrations</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              See the Intelligence, Working.
            </h1>
            <p className="text-slate text-lg leading-relaxed">
              Working products, deployed and running. Explore live demonstrations of the platforms
              Veritas Global AI builds — from neural chatbots to autonomous agent systems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-4 px-6 lg:px-10 bg-gold/10 border-b border-gold/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 text-sm text-navy">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="shrink-0 text-gold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <strong>Demo Mode:</strong> These are live demonstrations. Some features may be limited or unavailable — full functionality requires a production deployment with your own infrastructure and API keys.
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-white border-b border-line">
        <div className="max-w-6xl mx-auto">
          <Reveal className="grid md:grid-cols-1 gap-6">
            {demos.map((demo) => (
              <article key={demo.title} className="card p-8 md:p-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] bg-navy text-paper">
                        {demo.tag}
                      </span>
                      <span className="text-xs text-muted">{demo.category}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4 leading-tight">
                      {demo.title}
                    </h2>
                    <p className="text-slate text-lg leading-relaxed mb-6">{demo.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {demo.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate">
                          <svg width="16" height="16" fill="none" stroke="#B08D57" strokeWidth="2" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href={demo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
                      >
                        Launch the Demo
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                      {demo.repo && (
                        <Link
                          href={demo.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2"
                        >
                          View Source
                          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-2.85 17.54c.45.08.62-.2.62-.44v-1.72c-2.52.55-3.05-1.09-3.05-1.09-.41-1.05-1-1.33-1-1.33-.82-.56.06-.55.06-.55.91.06 1.39.94 1.39.94.81 1.38 2.12.98 2.64.75.08-.59.32-.98.57-1.21-1.99-.23-4.09-1-4.09-4.42 0-.98.35-1.78.92-2.4-.09-.23-.4-1.15.09-2.39 0 0 .75-.24 2.45.92a8.53 8.53 0 014.46 0c1.7-1.16 2.45-.92 2.45-.92.49 1.24.18 2.16.09 2.39.57.62.92 1.42.92 2.4 0 3.43-2.1 4.18-4.1 4.4.32.28.61.83.61 1.67v2.48c0 .24.17.52.62.44A9 9 0 0012 3z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="shrink-0 lg:max-w-xs w-full">
                    <div className="bg-navy-deep rounded-sm p-6 text-paper">
                      <div className="flex items-center gap-2 mb-5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                        <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-gray-400">{demo.terminal}</span>
                      </div>
                      <div className="space-y-3">
                        <div className="text-xs uppercase tracking-[0.15em] text-gray-400">AI Assistant</div>
                        <div className="text-sm leading-relaxed text-gray-200">
                          &ldquo;{demo.q}&rdquo;
                        </div>
                        <div className="text-sm leading-relaxed text-paper bg-white/5 border border-white/10 rounded-sm p-3">
                          {demo.a}
                        </div>
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                        <div className="border border-white/10 rounded-sm py-3">
                          <div className="metric-num text-gold text-2xl">{demo.metric1}</div>
                          <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400">{demo.metric1Label}</div>
                        </div>
                        <div className="border border-white/10 rounded-sm py-3">
                          <div className="metric-num text-gold text-2xl">{demo.metric2}</div>
                          <div className="text-[10px] uppercase tracking-[0.15em] text-gray-400">{demo.metric2Label}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 lg:px-10 bg-paper border-b border-line">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <div className="section-rule mx-auto mb-6" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">More to come</p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
              A growing portfolio of working products
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              New demonstrations are deployed continuously. Each one is a real, running product — not
              a mockup.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Want a product like this for your organization?
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto mb-10">
            Every Veritas engagement begins with a confidential architecture consultation.
          </p>
          <Link href="/contact" className="btn-primary font-medium px-7 py-3.5 text-sm tracking-wide inline-flex items-center gap-2">
            Request Private Consultation
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
