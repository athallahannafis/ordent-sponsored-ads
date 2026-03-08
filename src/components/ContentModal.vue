<script setup lang="ts">
/**
 * ContentModal
 *
 * A full-screen overlay modal that renders the complete content of an ad or
 * article. Uses Headless UI `<Dialog>` with animated transitions for smooth
 * open / close behaviour.
 *
 * Emits:
 * - `close` — fired when the backdrop or the × button is clicked, signalling
 *             the parent to set `isOpen` to `false`.
 */
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { XMarkIcon, HeartIcon, BookmarkIcon, ShareIcon } from '@heroicons/vue/24/outline';

defineProps<{
  /** Controls whether the modal is visible. */
  isOpen: boolean;
  /** Title rendered inside the modal as the dialog heading. */
  title: string;
  /** URL of the hero image displayed at the top of the modal. */
  cover: string;
  /** Full body text of the article or ad, rendered with `whitespace-pre-wrap`. */
  content: string;
  /** Like count displayed next to the heart icon in the modal footer. */
  likes: number;
  /** When `true`, a "Sponsored" badge is overlaid on the cover image. */
  sponsored?: boolean;
}>();

const emit = defineEmits<{
  /** Emitted when the user requests the modal to close (backdrop click or × button). */
  close: [];
}>();
</script>

<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog @close="emit('close')" class="relative z-50">
      <!-- Backdrop -->
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/50" />
      </TransitionChild>

      <!-- Modal positioning -->
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <!-- Modal panel -->
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
              <!-- Close button -->
              <button
                @click="emit('close')"
                class="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon class="w-6 h-6 text-gray-700" />
              </button>

              <!-- Modal content -->
              <div class="overflow-y-auto max-h-[90vh]">
                <!-- Image -->
                <div class="relative">
                  <img :src="cover" :alt="title" class="w-full h-64 object-cover" />
                  <div
                    v-if="sponsored"
                    class="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    Sponsored
                  </div>
                </div>

                <!-- Content -->
                <div class="p-8">
                  <DialogTitle class="text-3xl font-bold text-gray-900 mb-4">
                    {{ title }}
                  </DialogTitle>
                  <div class="prose max-w-none">
                    <p class="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">{{ content }}</p>
                  </div>

                  <!-- Actions -->
                  <div class="mt-8 pt-6 border-t border-gray-200 flex flex-row-reverse items-center justify-between">
                    <div class="flex items-center gap-4">
                      <button class="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
                        <HeartIcon class="w-6 h-6" />
                        <span class="font-semibold">{{ likes }}</span>
                      </button>
                      <button class="text-gray-700 hover:text-indigo-600 transition-colors">
                        <BookmarkIcon class="w-6 h-6" />
                      </button>
                      <button class="text-gray-700 hover:text-indigo-600 transition-colors">
                        <ShareIcon class="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

