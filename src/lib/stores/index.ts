import type { PixelsEntry } from "$lib/types";
import localStore from "./localStore";

const pixels = localStore<PixelsEntry[]>("pixels", []);

export { pixels };
