"use client";

import { useState } from "react";

interface TabPanel {
  id: string;
  label: string;
  intro: string;
  stats: { value: string; text: string }[];
}

export default function IndustryTabs({ tabs }: { tabs: TabPanel[] }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex flex-wrap gap-8 mb-10 border-b border-line">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn pb-3 text-sm font-medium ${
              active === tab.id ? "active" : ""
            }`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="border border-line bg-paper p-8 lg:p-12">
        {tabs.map((tab) => (
          <div key={tab.id} className={active === tab.id ? "" : "hidden"}>
            <p className="text-slate mb-8 leading-relaxed text-[15px]">{tab.intro}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {tab.stats.map((stat) => (
                <div key={stat.value}>
                  <div className="metric-num text-2xl mb-2">{stat.value}</div>
                  <p className="text-sm text-slate leading-relaxed">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
