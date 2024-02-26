"use client";
export default function myIamgeLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pexels.com")) return src;
  return `https://nextJsportfolio.com/${src}?w=${width}&q=${quality || 75}`;
}
