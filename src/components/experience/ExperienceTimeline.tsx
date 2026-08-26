"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio";
import { ExperienceCard } from "./ExperienceCard";

export const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-2 mb-14">
      {portfolioConfig.experiences.map((exp, idx) => (
        <ExperienceCard
          key={exp.id}
          exp={exp}
          isLast={idx === portfolioConfig.experiences.length - 1}
        />
      ))}
    </div>
  );
};
