<template>
    <div class="card-gallery flex flex-col relative">
        <div class="gallery-tags">
          <div class="gallery__tags--badge">
            <img src="/assets/img/badge/badge-exclusive.png" alt="">
          </div>
          <component :is="likeButton" @like="cardLiked" :like_button="card.like_button"></component>
          <component :is="galleryBadge"></component>
        </div>
       
        <div class="card-gallery_item first-image">
          <div class="gallery__arrow gallery__arrow--left arrow__disabled">
          <svg 
            class="arrow"
            width="10"
            height="18"
            viewBox="0 0 10 18" 
            fill-rule="evenodd"
            clip-rule="evenodd"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.55524 0.471936C10.1482 1.10118 10.1482 2.1214 9.55524 
            2.75064L3.66602 8.99992L9.55526 15.2494C10.1482 15.8786 10.1482 
            16.8988 9.55526 17.5281C8.96226 18.1573 8.00082 18.1573 7.40783 
            17.5281L0.444745 10.1393C-0.14825 9.51003 -0.148248 8.48981 0.444752 
            7.86057L7.40783 0.471925C8.00083 -0.157313 8.96226 -0.157307 9.55524 
            0.471936Z"/>
          </svg>

        </div>
        <div class="gallery__arrow gallery__arrow--right">
          <svg 
          class="arrow"
          width="10" 
          height="18" 
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 10 18" 
          xmlns="http://www.w3.org/2000/svg">
            <path d="M0.444755 17.5281C-0.148238 16.8988 -0.148238 15.8786 0.444755 
            15.2494L6.33398 9.00008L0.444735 2.75064C-0.148247 2.12139 -0.148245 
            1.10118 0.444744 0.471937C1.03774 -0.157312 1.99918 -0.157314 2.59217 
            0.471935L9.55526 7.86072C10.1482 8.48997 10.1482 9.51019 9.55525 
            10.1394L2.59216 17.5281C1.99917 18.1573 1.03774 18.1573 0.444755 
            17.5281Z"/>
          </svg>
        </div>
            <img src="/assets/img/0.jpg" alt="">
        </div>
        <div class="image-line flex flex-row gap-x-0.5 md:gap-x-1 text-xs">
            <div class="card-gallery_item basis-1/3 md:basis-1/4 w-full">
                <img src="/assets/img/0.jpg" alt="" >
            </div>
            <div class="card-gallery_item basis-1/3 md:basis-1/4 w-full">
                <img src="/assets/img/0.jpg" alt="" >
            </div>
            <div class="card-gallery_item basis-1/3 md:basis-1/4 w-full">
                <img src="/assets/img/0.jpg" alt="" >
                <div class="overlay overlay-visible">+18 фото</div>

            </div>
            <div class="card-gallery_item relative hidden md:block basis-1/3 md:basis-1/4 w-full">
                <img src="/assets/img/0.jpg" alt="" >
                <div class="overlay ">+18 фото</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import likeButton from '@/components/ui/likeButton.vue';
import galleryBadge from '@/components/ui/galleryBadge.vue';

// TEST TEST TEST 
let card = ref({
  like_button: {
    active: false
  }
})

let cardLiked = (isLiked, id) => {
  //set data in backend add like_button status to user 
}
</script>

<style lang="scss">
.card-gallery{
    max-width: 410px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
    .first-image{
        margin-bottom: 5px;
        img{
            border-radius: 10px;
            height: 290px;
            @media screen and (max-width: 768px) {
                height: 100%;
            }
        }
    }
    .image-line{
        @media screen and (max-width: 768px) {
          width: 100%;
          justify-content: space-around;
        }
        @media screen and (max-width: 360px) {
               
        }
        .card-gallery_item{
            @media screen and (max-width: 768px) {
                width: 100%;

              
            }
        img{
            border-radius: 10px;
            
        }
        .overlay{
            border-radius: 10px;
        }
}
    }

}

.gallery__arrow {
    z-index: 99;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    text-decoration: none;
    transition: background-color 0.3s ease;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    fill: white;
    cursor: pointer;
    &:hover {    
    background-color: rgb(255, 255, 255);
    fill: #0A143C;
    }
}
.gallery__arrow--left {
  left: 10px;
}

.gallery__arrow--right {
  right: 10px;
}
.arrow__disabled{
  cursor: not-allowed;
  background-color: #C4C4C4;
  fill: rgb(255, 255, 255);
  &:hover {
    background-color: #C4C4C4 !important;
  fill: rgb(255, 255, 255) !important;
  }
}
.image-line > .card-gallery_item {
    flex-basis: calc(25%);
  }
@media (max-width: 762px) {
  .image-line > .card-gallery_item {
    flex-basis: calc(33.33% - 1.5px);
  }
  .image-line > .card-gallery_item:nth-child(4) {
    display: none;
  }
}
.card-gallery_item{
    position: relative;
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(#0A143C, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
        @include daikonFont(12, normal, 400, 100%, $white);
    }
    .overlay-visible{
        display: flex;
        @media screen and (min-width: 768px) {
            display: none;
        }
    }
}

</style>