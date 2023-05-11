<template>
  <div class="cards_container w-full h-full bg-background" v-if="!isPostLoading">
    <metrica-cards-list 
    :cards="filteredCards"/>
  </div>
  <div class="post-loading" v-else>
    идет загрузка...
  </div>
</template>

<script setup>

import MetricaCard from "@/components/metricaCard.vue";
import MetricaCardsList from "@/components/metricaCardsList.vue";
import {useCards} from '@/hooks/useCards'
import {useFilterCards} from '@/hooks/useFilterCards'
import {ref} from 'vue'

const {cards, totalPage, isPostLoading } = useCards()
console.log(cards );

const {filteredCards} = useFilterCards(cards)



</script>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>
.cards_container{
padding: 84px 190px;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  
}
}
</style>