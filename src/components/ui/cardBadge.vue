<template>
<div class="card_badge 
            bg-greyEl 
            text-greyText 
            md:py-2 
            p-[6px] 
            md:px-[15px] 
            rounded-[6px]  
            md:rounded-[5px]"
            v-for="(badge, index) in props.badge" :key="badge.index">
                  {{badge}}
</div>
</template>
<script setup>
const props = defineProps({
    badge: Array
})
</script>

<style lang="scss">
.card_badge{
    @include daikonFont(12, 'normal', 400, 120%, $greyText );
    @media screen and (max-width: 768px) {
      @include daikonFont(10, 'normal', 400, 110%, $greyText );
    }
  }
</style>