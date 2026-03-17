import type { ToastInterface } from "vue-toastification";

type ToastType = "success" | "error" | "info" | "warning";

export const useToastNotification = () => {
  let toast: ToastInterface | null = null;

  if (import.meta.client) {
    const nuxtApp = useNuxtApp();
    toast = nuxtApp.vueApp.config.globalProperties.$toast as ToastInterface;
  }

  const show = (type: ToastType, message: string, options = {}) => {
    if (!toast) return;
    toast[type](message, options);
  };

  return {
    success: (msg: string, opts = {}) => show("success", msg, opts),
    error: (msg: string, opts = {}) => show("error", msg, opts),
    info: (msg: string, opts = {}) => show("info", msg, opts),
    warning: (msg: string, opts = {}) => show("warning", msg, opts),
  };
};