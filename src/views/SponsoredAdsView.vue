<script lang="ts" setup>
import { ref } from 'vue';
import AdCard from '@/components/AdCard.vue';
import ContentModal from '@/components/ContentModal.vue';
import Ads from "@/data/ads.json";
import cover1 from '@/assets/images/cover_1.webp'

const ads = Ads;

const isModalOpen = ref(false);
const selectedAd = ref<{
  title: string;
  cover: string;
  summary: string;
  likes: number;
} | null>(null);

const openModal = (ad: any, likes: number) => {
  selectedAd.value = {
    title: ad.title,
    cover: cover1,
    summary: ad.summary,
    likes: likes
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => { selectedAd.value = null; }, 200);
};

</script>

<template>
    <div class=" py-12 px-12 flex flex-wrap justify-center  gap-5 ">

        <AdCard
        v-for="(item, index) in ads" 
            :key="index"
            :id="index"
            :title="item.title"
            :cover="cover1"
            :summary="item.summary"
            :link="`#${item.title}`"
            :likes="Math.floor(Math.random() * 100)"
            :sponsored="true"
            @click="openModal(item, Math.floor(Math.random() * 100))"
        />
    </div>

    <ContentModal
      :is-open="isModalOpen"
      :title="selectedAd?.title || ''"
      :cover="selectedAd?.cover || ''"
      :content="selectedAd?.summary || ''"
      :likes="selectedAd?.likes || 0"
      :sponsored="true"
      @close="closeModal"
    />
</template>