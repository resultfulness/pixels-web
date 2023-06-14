import { get, writable } from "svelte/store";

const toaster = (visible: boolean, message: string) => {
  const store = writable({ visible, message });
  const { subscribe, set, update } = store;

  return {
    subscribe,
    showWithMessage: (message: string, duration: number = 5000) => {
      set({
        message,
        visible: true,
      });
      setTimeout(() => {
        set({
          message,
          visible: false,
        });
      }, duration + 500);
    },
  };
};

const toast = toaster(false, "Toast message");
export { toast };
