<template>
  <div></div>
    <a :href="props.buttons[0].url" class="card-footer__button MN-btn flex justify-center" @click.prevent.once="click = false">
    {{ click? props.buttons[0].text : props.buttons[0].text_after_click }}
    </a>
</template>
<script setup>
import { ref } from 'vue'

let props = defineProps({
   buttons: Array
})
 
let click = ref(true)
console.log(props.buttons);

</script>

<style lang="scss">
.MN-btn{
    cursor: pointer;
  @include daikonFont(14, 'normal', 500, 113%, $white );
  background-color: $primary;
  padding: 10px 20px;
  border-radius: 8px;
  &:hover{
    background-color: rgba($primary, 0.8);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    background-color: $greyEl;
    color: $text;
  }
}


</style>