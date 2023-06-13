import { writable, type Writable } from "svelte/store";
import type { PixelsEntry } from "../types";

import exampleData from "./example_data.json";

const data: Writable<PixelsEntry[]> = writable(exampleData);

export { data as pixelsData };
