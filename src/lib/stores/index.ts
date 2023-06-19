import type { PixelsEntry, Tags } from "$lib/types";
import localStore from "./localStore";

import * as defaults from "$lib/defaults";

const pixels = localStore<PixelsEntry[]>("pixels", []);

const tagsCategories = localStore<Tags[]>("tags-categories", defaults.tags);

export { pixels, tagsCategories };
