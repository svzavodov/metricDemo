<template>
<div class="card-body__propeprty-list" 
    :class="{'card-body__property-list_mob flex flex-row md:hidden': mobile}" v-if="!mobile">
    <div class="card-body__property-item" 
        :class="{'card-body__property-item_mob': mobile}" 
        v-for="property in props.info.slice(0,4)" 
        >
        <span class="property-name">{{property.title}}:</span>
        <span class="property-value">{{property.value }}</span>
    </div>
 </div>
 <div class="card-body__propeprty-list" 
    :class="{'card-body__property-list_mob flex flex-row md:hidden': mobile}" v-else>
    <div class="card-body__property-item" 
        :class="{'card-body__property-item_mob': mobile}" 
        v-for="property in props.info.slice(0,2)" 
        >
        <span class="property-name">{{property.title}}:</span>
        <span class="property-value">{{property.value }}</span>
    </div>
 </div>
</template>

<script setup>  
import { ref, computed } from 'vue'
const props = defineProps({
    info: Array,
    mobile: false
})



</script>

<style lang="scss">
.card-body__propeprty-list {
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    gap: 20px;
    
  }
  .card-body__property-item:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: $greyEl;
  }

  .card-body__property-item {
    width: calc(50% - 10px);
    position: relative;
    display: flex;
    justify-content: center;
    gap: 5px;

    .property-name {
      @include daikonFont(14, 'normal', 400, 120%, $greyText );
    }
    .property-value {
      @include daikonFont(14, 'normal', 500, 120%, $text );
    }   
  }
  .card-body__property-item:last-child {
    justify-content: flex-end;
    margin-right: 0;
  }
  .card-body__property-item:first-child {
    justify-content: flex-start;
    margin-left: 0;
  }
  .card-body__property-item_mob{
    justify-content: flex-start;
    width: auto;
    padding-right: 20px;
  }
  .card-body__property-item_mob:last-child {
    justify-content: flex-start;
  }
  .card-body__propeprty-list_mob:first-child {
    justify-content: flex-start;
  }

}
</style>