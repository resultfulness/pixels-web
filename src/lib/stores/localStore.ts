import { get, writable } from "svelte/store";
import { browser } from "$app/environment";

const str = (val: any) => JSON.stringify(val, null, 2);
const obj = JSON.parse;

export type LocalStore<T> = {
  subscribe: (subscription: (value: T) => void) => () => void;
  set: (value: T) => void;
  update: (callback: (currentValue: T) => T) => void;
};

const localStore = <T>(key: string, initialData: T): LocalStore<T> => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, str(initialData));
  }

  const saved = obj(localStorage.getItem(key)!);

  const store = writable(saved);
  const { subscribe, set, update } = store;

  return {
    subscribe,
    set: (value) => {
      if (browser) {
        localStorage.setItem(key, str(value));
      }
      return set(value);
    },
    update: (callback) => {
      const updatedStore = callback(get(store));

      if (browser) {
        localStorage.setItem(key, str(updatedStore));
      }
      return set(updatedStore);
    },
  };
};

export default localStore;
