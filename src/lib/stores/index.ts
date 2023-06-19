import type { PixelsEntry, Tags } from "$lib/types";
import localStore from "./localStore";

import * as defaults from "$lib/defaults";

const pixels = localStore<PixelsEntry[]>("pixels", []);

const tagsCategories = localStore<Tags[]>("tags-categories", defaults.tags);
const colors = localStore<string[]>("colors", defaults.colors);

export { pixels, tagsCategories, colors };
