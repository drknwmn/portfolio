import type { Presentation } from "../types";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const presentationYear = (presentation: Presentation) => Number(presentation.date.match(/20\d{2}/)?.[0] ?? 0);

export const presentationSortKey = (presentation: Presentation) => {
  const month = months.findIndex((name) => presentation.date.startsWith(name));
  const day = month < 0 ? 0 : Number(presentation.date.match(/\d{1,2}/)?.[0] ?? 0);
  return presentationYear(presentation) * 10000 + (month + 1) * 100 + day;
};

export const isPoster = (presentation: Presentation) => /poster/i.test(presentation.format);
