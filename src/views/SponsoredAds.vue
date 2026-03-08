<script lang="ts" setup>
import AdCard from '@/components/AdCard.vue';
import Ads from "@/data/ads.json";
import Articles from "@/data/articles.json";

const ads = Ads;
const articles = Articles;
</script>

<template>
    <div class=" py-12 px-4 flex flex-wrap  gap-5 ">

        <AdCard
        v-for="(ad, index) in ads" 
            :key="index"
            :id="index"
            :title="ad.title"
            :cover="ad.cover"
            :summary="ad.summary"
            :link="`#${ad.title}`"
            :likes="Math.floor(Math.random() * 100)"
            :sponsored="true"
        />
    </div>
</template>