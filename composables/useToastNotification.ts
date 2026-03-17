import type { ToastInterface } from "vue-toastification";

type ToastType = "success" | "error" | "info" | "warning";

export const useToastNotification = () => {
  let toast: ToastInterface | null = null;

  const initToast = async () => {
    if (!import.meta.client) return;

    const module = await import("vue-toastification");
    toast = module.useToast();
  };

  const show = async (
    type: ToastType,
    message: string,
    options = {}
  ) => {
    if (!toast) {
      await initToast();
    }

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