"use client";

import { clsx } from "clsx";

export function OptionCard({ selected, onClick, children, iconStyle, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "w-full p-4 pl-[18px] rounded-[10px] border-[1.5px] bg-bg2 text-left relative overflow-hidden",
        "transition-all duration-150 cursor-pointer hover:border-border2 hover:-translate-y-0.5",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/5 before:to-transparent",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-150",
        selected
          ? "border-accent bg-accent/10 shadow-[0_0_0_1px_rgba(108,99,255,0.2)] before:opacity-100"
          : "border-border",
        className
      )}
    >
      {children}
    </button>
  );
}

export function OptionCardIcon({ children, selected, color, className }) {
  return (
    <div
      className={clsx(
        "w-8 h-8 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold text-ink2 mb-2.5 shrink-0",
        className
      )}
      style={
        selected && color ? { background: `${color}22`, color } : { background: "var(--surface2)" }
      }
    >
      {children}
    </div>
  );
}

export function OptionCardCheck({ selected }) {
  return (
    <div
      className={clsx(
        "w-[18px] h-[18px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-150",
        selected ? "bg-accent border-accent" : "border-border2"
      )}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-150 ${selected ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
