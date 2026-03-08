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

const emit = defineEmits<{
  click: [];
}>();
</script>

<template>
    <div
      @click="emit('click')"
      class="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-lg duration-200 max-w-sm h-[579px] hover:scale-103 trasition-all cursor-pointer "
    >
    <section>
        <img :src="cover" alt="Ad Cover" class="w-full min-h-66.5 object-cover rounded-md mb-4" />
        <div>
          <h3 class="text-lg font-semibold text-black">{{ title }}</h3>
          <p class="mt-2 text-sm text-black line-clamp-5">{{ summary }}</p>
        </div>
      </section>
      <section>
        <div class="w-full flex flex-row-reverse items-center gap-3">
          <!-- share -->
          <button class="text-black hover:text-indigo-600 transition-colors">
            <ShareIcon class="w-5 h-5" />
          </button>
          <!-- bookmark -->
          <button class="text-black hover:text-indigo-600 transition-colors">
            <BookmarkIcon class="w-5 h-5" />
          </button>
          <!-- like -->
          <button class="text-black flex flex-row gap-2 items-center hover:text-red-600 transition-colors">
            <p class="text-sm text-black">{{ likes }}</p>
            <HeartIcon class="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  
</template>

