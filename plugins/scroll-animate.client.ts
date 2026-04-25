export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animate', {
    mounted(el: HTMLElement) {
      el.classList.add('scroll-fade')

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('scroll-fade--visible')
            observer.unobserve(el)
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(el)
    },
  })
})
