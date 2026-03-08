<script setup lang="ts">
/**
 * AdCard
 *
 * Displays a single ad or article as a card with a cover image, title, summary,
 * and interactive action buttons (like, bookmark, share).
 *
 * Emits:
 * - `click`    — fired when the card body (image / text area) is clicked,
 *                typically used to open a detail modal.
 * - `bookmark` — fired when the bookmark button is toggled.
 * - `like`     — fired when the like button is toggled; payload is a boolean
 *                indicating the new liked state.
 */
import { ShareIcon, BookmarkIcon, HeartIcon } from '@heroicons/vue/24/outline';

import { BookmarkIcon as BookmarkIconFilled, HeartIcon as HeartIconFilled } from "@heroicons/vue/24/solid";
import { ref } from 'vue';

defineProps<{
    /** Unique identifier for the ad / article. */
    id: number;
    /** Heading text displayed on the card. */
    title: string;
    /** URL of the cover image shown at the top of the card. */
    cover: string;
    /** Short description displayed below the title (clamped to 5 lines). */
    summary: string;
    /** External URL the ad or article links to. */
    link: string;
    /** Current like count shown next to the heart icon. */
    likes: number;
    /** When `true`, a "Sponsored" badge is rendered on the card. */
    sponsored: boolean;
    /** Reflects whether the card has been bookmarked by the current user. */
    bookmarked: boolean;
}>()

const emit = defineEmits<{
  /** Emitted when the card's main content area is clicked. */
  click: [];
  /** Emitted when the bookmark button is clicked. */
  bookmark: [];
  /**
   * Emitted when the like button is toggled.
   * @param liked - `true` if the user just liked the item, `false` if unliked.
   */
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
          <!-- share (no emits yet) -->
          <button class="text-black hover:text-ordent-blue transition-colors">
            <ShareIcon class="w-5 h-5" />
          </button>
          <!-- bookmark -->
          <button
          id="bookmark-button"
          @click.stop="emit('bookmark')" class="text-black hover:text-ordent-blue transition-colors">
              <BookmarkIconFilled v-if="bookmarked" class="w-5 h-5" />
              <BookmarkIcon v-else class="w-5 h-5" />
          </button>
          <!-- like -->
          <button
          id="like-button"
          @click.stop="() => { 
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

