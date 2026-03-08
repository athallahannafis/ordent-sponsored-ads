<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

const features = [
  {
    icon: '📈',
    title: 'Boost Visibility',
    description: 'Put your products in front of the right customers at the right time.',
  },
  {
    icon: '🎯',
    title: 'Precise Targeting',
    description: 'Reach shoppers based on keywords, categories, and browsing behavior.',
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    description: 'Monitor impressions, clicks, and conversions with live dashboards.',
  },
  {
    icon: '💰',
    title: 'Cost Efficient',
    description: 'Only pay when customers click. Full budget control, no surprises.',
  },
];

</script>

<template>
  <main>
    <!-- Hero -->
    <section class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6 pt-24 text-center">
      <span class="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
        Sponsored Ads Platform
      </span>
      <h1 class="mx-auto max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
        Grow Your Sales with <span class="text-indigo-600">Smarter Ads</span>
      </h1>
      <p class="mx-auto mt-6 max-w-xl text-lg text-gray-500">
        Ordent Sponsored Ads helps sellers reach millions of buyers with targeted, performance-based advertising — right inside the marketplace.
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a
          id="get-started"
          href="/articles"
          class="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all duration-100"
        >
          Articles
        </a>
        <a
          href="/sponsored-ads"
          class="rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:scale-110 transition-all duration-100"
        >
          Sponsored Ads
        </a>
      </div>
      <div class="mt-16 w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl  ring-gray-200">
        
      </div>
    </section>
  </main>
</template>
