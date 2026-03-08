<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { onMounted } from 'vue';

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

onMounted(async () => {
  const res = await fetch('https://gist.githubusercontent.com/shafhik/2066a4cc87807262d4823fb3bdb2e1d4/raw/d0c3c3612b40649b4869dd5d5adb39d819fd8db3/ads.json');
  console.log(res);
});
</script>

<template>
  <!-- Navbar -->
  <NavBar />

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
          href="#"
          class="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all duration-100"
        >
          Start Advertising
        </a>
        <a
          href="#how-it-works"
          class="rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:scale-110 transition-all duration-100"
        >
          Learn More
        </a>
      </div>
      <div class="mt-16 w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
        <div class="flex items-center gap-2 bg-gray-100 px-4 py-3">
          <span class="h-3 w-3 rounded-full bg-red-400"></span>
          <span class="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span class="h-3 w-3 rounded-full bg-green-400"></span>
        </div>
        <div class="grid grid-cols-3 gap-4 bg-white p-8">
          <div class="col-span-2 space-y-3">
            <div class="h-4 rounded bg-indigo-100"></div>
            <div class="h-4 w-4/5 rounded bg-gray-100"></div>
            <div class="h-4 w-3/5 rounded bg-gray-100"></div>
            <div class="mt-6 h-32 rounded-xl bg-indigo-50 flex items-center justify-center text-4xl">📊</div>
          </div>
          <div class="space-y-3">
            <div class="rounded-xl bg-indigo-600 p-4 text-white text-center">
              <p class="text-2xl font-bold">+142%</p>
              <p class="text-xs opacity-80">Conversion Rate</p>
            </div>
            <div class="rounded-xl bg-purple-100 p-4 text-center">
              <p class="text-2xl font-bold text-purple-700">3.8x</p>
              <p class="text-xs text-purple-500">Return on Ad Spend</p>
            </div>
            <div class="rounded-xl bg-green-100 p-4 text-center">
              <p class="text-2xl font-bold text-green-700">98%</p>
              <p class="text-xs text-green-500">Uptime SLA</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="bg-white py-24 px-6">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">Everything You Need to Win</h2>
          <p class="mt-4 text-gray-500">Built for sellers who want results, not complexity.</p>
        </div>
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:shadow-md transition-shadow"
          >
            <div class="mb-4 text-4xl">{{ feature.icon }}</div>
            <h3 class="mb-2 text-lg font-semibold text-gray-900">{{ feature.title }}</h3>
            <p class="text-sm text-gray-500">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="bg-indigo-50 py-24 px-6">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">How It Works</h2>
        <p class="mt-4 text-gray-500">Launch your first campaign in minutes.</p>
        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <div v-for="(step, i) in ['Create a Campaign', 'Set Your Budget', 'Watch Sales Grow']" :key="step" class="flex flex-col items-center">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white shadow-lg">
              {{ i + 1 }}
            </div>
            <h3 class="mt-4 text-lg font-semibold text-gray-900">{{ step }}</h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ ['Define your target audience, keywords, and ad creatives.', 'Set daily or total spend limits — adjust anytime.', 'Track performance and optimize with real-time data.'][i] }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="pricing" class="bg-indigo-600 py-24 px-6 text-center">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold text-white md:text-4xl">Ready to Scale Your Business?</h2>
        <p class="mt-4 text-indigo-200">Join thousands of sellers already growing with Ordent Sponsored Ads.</p>
        <a
          href="#"
          class="mt-8 inline-block rounded-full bg-white px-10 py-4 text-base font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-lg"
        >
          Get Started for Free
        </a>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-900 py-10 px-6 text-center text-sm text-gray-500">
    <p>© 2026 Ordent. All rights reserved.</p>
  </footer>
</template>
