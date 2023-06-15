import { get } from "svelte/store";
import type { LayoutLoad } from "./$types";

export const ssr = false;

export const load: LayoutLoad = async ({ params }) => {
  const { pixels } = await import("$lib/stores");

  const dateString = `${+params.year}-${+params.month}-${+params.day}`;

  const entry = get(pixels).find((v) => v.date === dateString);

  const date = new Date(dateString);

  let previousDate = new Date(dateString);
  previousDate.setDate(previousDate.getDate() - 1);

  let nextDate = new Date(dateString);
  nextDate.setDate(nextDate.getDate() + 1);

  return {
    entry,
    date,
    previousDate,
    nextDate,
  };
};
