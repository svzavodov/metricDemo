import { ref, computed } from 'vue'

export  function useFilterCards(cards) {
    let filteredCards = ref([])
    
    filteredCards.value = computed(() => {
        return cards.value.filter( card => card.type === "InfoWithImagesCard")
    })
    console.log(filteredCards.value);

    return { filteredCards }
}