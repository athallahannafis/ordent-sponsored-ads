<script setup lang="ts">
import { ShareIcon, BookmarkIcon, HeartIcon } from '@heroicons/vue/24/outline';

import { BookmarkIcon as BookmarkIconFilled, HeartIcon as HeartIconFilled } from "@heroicons/vue/24/solid";
import { ref } from 'vue';

defineProps<{
    id: number;
    title: string;
    cover: string;
    summary: string;
    link: string;
    likes: number;
    sponsored: boolean;
    bookmarked: boolean;
}>()

const emit = defineEmits<{
  click: [];
  bookmark: [];
  like: [liked: boolean];
}>();

const liked = ref(false);
</script>

<template>
    <div
      
      class="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-lg duration-200 max-w-sm h-[579px] hover:scale-103 trasition-all cursor-pointer "
    >
    <section @click="emit('click')">
        <img :src="cover" alt="Ad Cover" class="w-full min-h-66.5 object-cover rounded-md mb-4" />
        <div>
          <h3 class="text-lg font-semibold text-black">{{ title }}</h3>
          <p class="mt-2 text-sm text-black line-clamp-5">{{ summary }}</p>
        </div>
      </section>
      <section class="flex flex-row justify-between">
        <template v-if="sponsored">
          <span class="text-xs font-bold text-ordent-blue">Sponsored</span>
        </template>
        <div class="w-full flex flex-row-reverse items-center gap-3">
          <!-- share -->
          <button class="text-black hover:text-ordent-blue transition-colors">
            <ShareIcon class="w-5 h-5" />
          </button>
          <!-- bookmark -->
          <button @click.stop="emit('bookmark')" class="text-black hover:text-ordent-blue transition-colors">
              <BookmarkIconFilled v-if="bookmarked" class="w-5 h-5" />
              <BookmarkIcon v-else class="w-5 h-5" />
          </button>
          <!-- like -->
          <button @click.stop="() => { 
            liked = !liked; 
            emit('like', liked); 
          }" class="text-black flex flex-row gap-2 items-center hover:text-red-600 transition-colors" :class="{ 'text-red-600': liked }">
            <p class="text-sm text-black">{{ likes }}</p>
            <HeartIconFilled v-if="liked" class="w-5 h-5" />
            <HeartIcon v-else class="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  
</template>

