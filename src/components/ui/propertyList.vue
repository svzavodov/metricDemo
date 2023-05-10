<template>
<div class="card-body__propeprty-list" >
    <div class="card-body__property-item" v-for="property in props.info" :key="property.title">
        <span class="property-name">{{property.title}}:</span>
        <span class="property-value">{{property.value }}</span>
    </div>
 </div>
</template>

<script setup>  

const props = defineProps({
    info: Array
})

</script>

<style lang="scss">
.card-body__propeprty-list {
  width: 100%;
  justify-content: space-between;
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

}
</style>