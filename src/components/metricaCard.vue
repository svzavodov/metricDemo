<template>
    <div class="card bg-white rounded-5 p-[10px] md:p-[30px] ">
      <div class="card-content flex flex-col md:flex-row md:gap-x-[20px] gap-y-[10px]">
        <component :is="galleryComponent"></component>
        <div class="card-content__container flex flex-col">
            <div class="card-content_header flex flex-col gap-y-[10px]">
              <div class="card-header_badge flex self-start gap-x-[10px]">
                <component :is="cardBadge" :badge="['Без коммисии']"></component>
              </div>
              <div class="card-header_info__block flex flex-col md:flex-row justify-between mb-[10px]">
                <div class="card-header_info__block-info flex flex-col gap-y-[10px]">
                  <div class="block-info__title">
                    <a href="#" class="block-info__link md:order-1 order-1">
                      <h3>Студия, 54 м²</h3>
                    </a>
                  </div>
                  <div class="block-info__price md:hidden flex md:order-2 order-2"><h2>8 500 000 ₽</h2></div>

                  <div class="block-info__address md:order-3 order-4">
                    <span class="address">Тюменская область, Тюмень, Нефтяников </span>
                    <a href="#" class="link">Показать на карте</a>
                  </div>
                  <div class="block-info__district md:order-4 order-3">
                    <a href="#" class="district__link">ЖК Брусника</a>
                  </div>
                </div>
                <div class="card-header_info__block-price hidden md:flex flex-col">
                  <div class="block-info__price"><h2>8 500 000 ₽</h2></div>
                  <div class="block-info__per-metr">228 904 ₽/м²</div>
                </div>
              </div>
            </div>

            <hr class="mt-[10px] mb-[10px] md:block hidden">
              
            <div class="card-content_body gap-x-[10px]">
              <div class="card-body__content hidden md:flex flex-col gap-y-[20px] ">
                  <component :is="propertyList" :info="cards.info" class="md:flex md:flex-row hidden" ></component>
                <div class="card-body__text md:flex hidden ">
                  Площадь данной квартиры 30,1 м2 + площадь лоджии 3,7 м2. Один собственник, 
                  без обременений. Квартира свободна от проживания, после ремонта никто не жил, 
                  готовы к быстрому выходу на сделку. Два окна, что позволяет удобно зонировать 
                  пространство. Ниша под шкаф-купе в прихожей и комнате. В санузле место и выводы 
                  под стиральную машинку. Горизонтальная разводка отопления (эффект тёплого пола 
                  в жилой зоне и санузле). Западная сторона,…Площадь данной квартиры 30,1 м2 + 
                  площадь лоджии 3,7 м2. Один собственник, без обременений. Квартира свободна 
                  от проживания, после ремонта никто не жил, готовы к быстрому выходу на сделку. 
                  Два окна, что позволяет удобно зонировать пространство. Ниша под шкаф-купе в 
                  прихожей и комнате. В санузле место и выводы под стиральную машинку. Горизонтальная 
                  разводка отопления (эффект тёплого пола в жилой зоне и санузле). Западная сторона,…
                </div>
              </div>
              <div class="card-body__propeprty-list card-body__property-list_mob flex flex-row md:hidden">
                <div class="card-body__property-item card-body__property-item_mob">
                    <span class="property-name">Студия:</span>
                    <span class="property-value">68 м²</span>
                  </div>
              </div>
            </div>
            <div class="card-content_footer ">
              <div class="card-footer__button-block">

                <component :is="buttonComponent" 
                          :url="buttonUrl" 
                          :text="buttonText" 
                          :text_after_click="buttonTextAfterClick"/>
              </div>
              <div class="card-footer__object-code md:flex hidden">
                <span class="object-code__text">Код объекта:</span>
                <span class="object-code__value">12121221</span>
              </div>
            </div>  
        </div>
          
      </div>
    </div>
</template>

<script setup>
import {ref, defineProps, computed, onMounted} from 'vue'
import {useCards} from "@/hooks/useCards.js";
import useButtons from "@/hooks/useButtons.js";
import galleryComponent from "@/components/galleryComponent.vue";
import buttonComponent from '@/components/ui/buttonComponent.vue';
import propertyList from '@/components/ui/propertyList.vue';
import cardBadge from '@/components/ui/cardBadge.vue';

const {cards, totalPage, isPostLoading } = useCards()

let buttonUrl = '/object/12121221'
let buttonText = '+7 922 025 ...'
let buttonTextAfterClick = '+7 922 025 53 23'
let images = computed(() => {
  console.log(cards.images)
  return cards.value.images
})



</script>


<style lang="scss">
img{
max-width: 100%;
height: auto;
  object-fit: cover;
}
h2{
  @include daikonFont(28, 'normal', 500, 113%, $text );
}
h3{
  @include daikonFont(24, 'normal', 500, 113%, $primary );
}
hr{
  color: rgba( 0, 0, 0, 0.1);
}

.card{
  width: 100%;
  border-radius: 20px;
  gap: 20px;

  .card-content{
    width: 100%;
    height: 100%;
  }

  
}

.block-info__title{
  color: $primary;
  text-decoration: underline;
  text-underline-offset: 0.4rem;
}

.link{
  text-decoration: underline;
}
.block-info__address{
  .address{
    @include daikonFont(14, 'normal', 400, 140%, $greyText );
    &:after{
      content: "—";
      margin-left: 5px;
      margin-right: 5px;
    }
  }
  .link{
    @include daikonFont(14, 'normal', 500, 140%, $primary );
  } 
}
.block-info__district{ 
    .district__link{
    @include daikonFont(14, 'normal', 500, 140%, $primary );
    @media screen and (max-width: 768px) {
      text-decoration: underline;
      
    }
  }  
}
.card-header_info__block-price {
    .block-info__price {
      @include daikonFont(24, 'normal', 500, 113%, $primary );
    }
  .block-info__per-metr {
    @include daikonFont(12, 'normal', 400, 140%, $greyText );
  }
}

.card-body__text{
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @include daikonFont(12, normal, 400, 140%, $text );
}

.card-content_footer {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-end;
  margin-top: auto;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
  .card-footer__button-block {
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 40px;
    }
  }
  .card-footer__object-code {
    gap: 5px;
    align-items: flex-end;
    .object-code__text {
        @include daikonFont(12, 'normal', 400, 120%, $greyText );
    }
    .object-code__value {
        @include daikonFont(14, 'normal', 500, 120%, $text );
    }
  }  
}
.card-header_badge{
  
  
}

</style>