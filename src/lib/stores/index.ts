import { writable } from "svelte/store";
import type { PixelsEntry } from "../types";

import exampleData from "./example_data.json";

const data = writable(exampleData as PixelsEntry[]);

export { data as pixelsData };
