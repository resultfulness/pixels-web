import type { PixelsEntry, Tags } from "$lib/types";
import localStore from "./localStore";

import defaultTags from "./default_tags.json";

const pixels = localStore<PixelsEntry[]>("pixels", []);

const tagsCategories = localStore<Tags[]>("tags-categories", defaultTags);

export { pixels, tagsCategories };
