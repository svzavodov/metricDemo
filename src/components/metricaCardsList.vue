<template>
  <div class="cards-list flex flex-col gap-[20px]" >
      <metrica-card v-for="card in props.cards.value" :key="card.ssrKey" :card="card" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useCards} from '@/hooks/useCards'
import metricaCard from '@/components/metricaCard.vue';

const props = defineProps( {
  cards: Object,
})
console.log(props);
</script>

<style scoped>
 
</style>