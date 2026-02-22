"use client";

import { getLanguageIconUrl, getIdeIconUrl, getFrameworkIconUrl } from "@/lib/devicon";

function getDeviconUrl(type, id) {
  if (type === "language") return getLanguageIconUrl(id);
  if (type === "framework") return getFrameworkIconUrl(id);
  if (type === "ide") return getIdeIconUrl(id);
  return null;
}

export function DeviconImg({ type, id, className = "w-10 h-10", alt = "" }) {
  const url = getDeviconUrl(type, id);
  if (!url) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local /icons/*.svg, dynamic per id
    <img src={url} alt={alt} className={className} loading="lazy" decoding="async" />
  );
}
