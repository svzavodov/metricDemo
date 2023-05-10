import {onMounted, ref} from 'vue'
export function useCards() {
    const cards = ref([])
    const totalPage = ref(0)
    const isPostLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await fetch('/data/data.json')
            cards.value = await response.json()
            cards.value = cards.value[1]
            totalPage.value = Math.ceil(cards.value.length/7)
         }catch (e){
            return e.message
        }finally {
            isPostLoading.value = false
        }
    }

    onMounted(fetching)


        return {
            cards, totalPage, isPostLoading
        }

}