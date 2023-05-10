<template>
  <div class="w-screen h-screen px-47 py-[40px] px-[20px] md:py-10 bg-background">
    <metrica-card/>
  </div>
</template>

<script setup>

import MetricaCard from "@/components/metricaCard.vue";
import {ref} from 'vue'
const data = async() => {
  const response = await fetch('/data/data.json')
  return await response.json()
}


</script>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

</style>