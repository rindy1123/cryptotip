import { CSSProperties } from "react";

export const cssAttributesToString = (css: CSSProperties): string =>
  Object.entries(css)
    .reduce((acc, [key, value]) => {
      key = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      return `${acc}${key}: ${value}; `;
    }, "")
    .trim();
