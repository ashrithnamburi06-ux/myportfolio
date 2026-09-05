"use client";

import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "project">("default");
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check desktop & pointer fine & reduced motion
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isDesktop = window.innerWidth >= 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || !isDesktop || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, select, [role='button']");
      const projectCard = target.closest("[data-cursor='project'], .project-card, .group");

      if (projectCard && !interactive) {
        setCursorType("project");
      } else if (interactive) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    // Animation Loop: Unified positioning for Dot and Ring
    const render = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)"
      }}
    >
      {/* Secondary Interaction Ring (Centered) */}
      <div
        className={`absolute rounded-full border transition-all duration-200 ease-out ${
          cursorType === "pointer"
            ? "w-10 h-10 border-emerald-400/80 bg-emerald-500/10 scale-110"
            : cursorType === "project"
            ? "w-14 h-14 border-emerald-500/60 bg-emerald-500/5 scale-100"
            : clicked
            ? "w-7 h-7 border-emerald-400 scale-90"
            : "w-8 h-8 border-emerald-500/50"
        }`}
      />

      {/* Primary Emerald Dot Pointer (Centered) */}
      <div
        className={`absolute rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-transform duration-100 ease-out ${
          clicked ? "scale-75" : cursorType === "pointer" ? "scale-125 bg-emerald-400" : "w-2.5 h-2.5"
        }`}
        style={{ width: "10px", height: "10px" }}
      />
    </div>
  );
};

