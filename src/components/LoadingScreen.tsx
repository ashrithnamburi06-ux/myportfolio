"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export const LoadingScreen: React.FC = () => {
  const isMounted = useIsMounted();
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const hasLoaded = sessionStorage.getItem("ak_portfolio_loaded");

      if (hasLoaded || prefersReducedMotion) {
        const t = setTimeout(() => setLoading(false), 0);
        return () => clearTimeout(t);
      } else {
        // Step 1: AK mark
        const t1 = setTimeout(() => setStep(2), 250); // Reveal ASHRIT KRISHNA
        const t2 = setTimeout(() => setStep(3), 500); // Draw horizontal line
        const t3 = setTimeout(() => setStep(4), 750); // Reveal FULL STACK DEVELOPER
        const t4 = setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("ak_portfolio_loaded", "true");
        }, 1100); // Complete transition under 1.2 seconds

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
          clearTimeout(t4);
        };
      }
    }
  }, []);

  if (!isMounted || !loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020805] text-white transition-opacity duration-400 animate-fade-in select-none">
      <div className="flex flex-col items-center space-y-3 text-center px-4 max-w-sm">
        {/* STEP 1: PERSONAL MARK (AK) */}
        <div
          className={`w-16 h-16 rounded-2xl bg-[#03120A] border-2 border-emerald-500/80 flex items-center justify-center text-emerald-400 font-black text-2xl shadow-[0_0_35px_rgba(0,200,83,0.4)] transition-all duration-300 ${
            step >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          AK
        </div>

        {/* STEP 2: NAME REVEAL (ASHRIT KRISHNA) */}
        <h1
          className={`text-xl sm:text-2xl font-black tracking-wider text-white pt-1 transition-all duration-300 ${
            step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          ASHRIT KRISHNA
        </h1>

        {/* STEP 3: HORIZONTAL EMERALD LINE DRAW */}
        <div className="w-48 h-[2px] bg-emerald-950 rounded-full overflow-hidden my-1">
          <div
            className={`h-full bg-emerald-500 rounded-full transition-all duration-300 ease-out ${
              step >= 3 ? "w-full" : "w-0"
            }`}
          />
        </div>

        {/* STEP 4: TITLE REVEAL (FULL STACK DEVELOPER) */}
        <h2
          className={`text-xs font-mono tracking-[0.25em] text-emerald-400 font-bold uppercase transition-all duration-300 ${
            step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          FULL STACK DEVELOPER
        </h2>
      </div>
    </div>
  );
};
