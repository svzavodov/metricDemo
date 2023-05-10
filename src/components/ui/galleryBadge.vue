<template>
    <div class="gallery__tags--badge" v-for="card in props.images" :key="card.id">
        <img src="/assets/img/badge/badge-exclusive.png" alt="">
    </div>
</template>

<script setup>
import { ref } from 'vue'

let props = defineProps({
    images: {
        type: Array,
        required: true
    }
})

</script>

<style lang="scss" >
.gallery__tags--badge{
  z-index: 99;
  position: absolute;
  padding: 5px;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  img{
    margin-bottom: 5px;
  }
  img:not(:last-child){
    margin-right: 5px;
  }
}
</style>