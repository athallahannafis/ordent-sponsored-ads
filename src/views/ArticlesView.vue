<script lang="ts" setup>
import { ref } from 'vue';
import AdCard from '@/components/AdCard.vue';
import ContentModal from '@/components/ContentModal.vue';
import Articles from "@/data/articles.json";
import cover1 from '@/assets/images/cover_1.webp'


const articles = ref(Articles);

const isModalOpen = ref(false);
const selectedArticle = ref<{
  title: string;
  cover: string;
  summary: string;
  likes: number;
} | null>(null);

const openModal = (article: any, likes: number) => {
  selectedArticle.value = {
    title: article.title,
    cover: cover1,
    summary: article.summary,
    likes: likes
  };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  setTimeout(() => { selectedArticle.value = null; }, 200);
};
</script>

<template>
    <div class=" py-12 px-12 flex flex-wrap justify-center gap-5 ">

        <AdCard
        v-for="(item, index) in articles" 
            :key="index"
            :id="index"
            :title="item.title"
            :cover="cover1"
            :summary="item.summary"
            :link="`#${item.title}`"
            :likes="item.likes"
            :sponsored="true"
            :bookmarked="item.bookmarked"
            @click="openModal(item, item.likes)"
            @bookmark="item.bookmarked = !item.bookmarked"
            @like="(isLiked: boolean) => item.likes += isLiked ? 1 : -1"
        />
    </div>

    <ContentModal
      :is-open="isModalOpen"
      :title="selectedArticle?.title || ''"
      :cover="selectedArticle?.cover || ''"
      :content="selectedArticle?.summary || ''"
      :likes="selectedArticle?.likes || 0"
      :sponsored="false"
      @close="closeModal"
    />
</template>