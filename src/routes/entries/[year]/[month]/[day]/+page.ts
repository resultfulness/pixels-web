import { get } from "svelte/store";
import type { PageLoad } from "./$types";
import { pixelsData } from "$lib/stores";

export const load: PageLoad = async ({ params }) => {
  const date = `${+params.year}-${+params.month}-${+params.day}`;
  const entry = get(pixelsData).find((v) => v.date === date);

  return {
    entry,
  };
};
