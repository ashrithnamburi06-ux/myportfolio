"use client";

import React from "react";
import { Award } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { CertificationCard } from "./CertificationCard";

export const CertificationsSection: React.FC = () => {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
          VERIFIED CERTIFICATIONS
        </h2>
      </div>

      <div className="space-y-4">
        {portfolioConfig.certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};
