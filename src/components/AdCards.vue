<script setup lang="ts">
defineProps<{
    id: number;
    title: string;
    cover: string;
    summary: string;
    link: string;
    likes: number;
    sponsored: boolean;
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div
      class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
      <p class="mt-2 text-sm text-gray-500">{{ summary }}</p>
      
    </div>
  </div>
</template>

