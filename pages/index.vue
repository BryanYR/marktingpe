<script setup lang="ts">
import HeroSection from '~/sections/HeroSection.vue';
import AboutSection from '~/sections/AboutSection.vue';
import ServicesSection from '~/sections/ServicesSection.vue';
import CTASection from '~/sections/CTASection.vue';
import PortfolioSection from '~/sections/PortfolioSection.vue';
import MethodologySection from '~/sections/MethodologySection.vue';
import ContactSection from '~/sections/ContactSection.vue';

useHead({
  htmlAttrs: {
    lang: 'es',
  },
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />
    
    <main>
      <HeroSection />
      <AboutSection v-animate />
      <ServicesSection v-animate />
      <CTASection v-animate />
      <PortfolioSection v-animate />
      <MethodologySection v-animate />
      <ContactSection v-animate />
    </main>

    <SiteFooter />
    <WhatsAppButton />
  </div>
</template>
