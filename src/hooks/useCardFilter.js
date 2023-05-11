import {ref, computed } from 'vue'

export default function useCardsFilter (cards){
    const cardsOnly = ref([])
    cardsOnly = computed(() => {
        return cards.value.filter(card => card.type === '"InfoWithImagesCard"')
    })

    return cardsOnly
}