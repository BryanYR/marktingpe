// plugins/toast.client.ts
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: "bottom-left",
    hideProgressBar: true,
    icon: false,
    closeButton: false,
  });
});