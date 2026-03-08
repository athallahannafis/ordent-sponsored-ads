<script setup lang="ts">
import { ShareIcon, BookmarkIcon, HeartIcon } from '@heroicons/vue/24/outline';

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
    <div
      class="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 max-w-sm h-[479px]"
    >
      <img :src="cover" alt="Ad Cover" class="w-full h-48 object-cover rounded-md mb-4" />
      <section>
        <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
        <p class="mt-2 text-sm text-gray-500">{{ summary }}</p>
      </section>
      <section>
        <div class="w-full flex flex-row-reverse items-center gap-3">
          <button class="text-gray-400 flex flex-row gap-2 items-center hover:text-red-600 transition-colors">
            <p class="text-sm text-gray-500">{{ likes }}</p>
            <HeartIcon class="w-5 h-5" />
          </button>
          
            <button class="text-gray-400 hover:text-indigo-600 transition-colors">
              <ShareIcon class="w-5 h-5" />
            </button>
            <button class="text-gray-400 hover:text-indigo-600 transition-colors">
              <BookmarkIcon class="w-5 h-5" />
            </button>
          
        </div>
      </section>
    </div>
  
</template>

