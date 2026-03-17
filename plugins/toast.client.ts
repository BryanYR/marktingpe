import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: "bottom-left",
    hideProgressBar: true,
    // timeout: false,
    icon: false,
    closeButton: false,
    toastClassName: "!p-0 z-[150]",
  });
});
