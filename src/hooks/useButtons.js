import {computed, ref} from 'vue'

export default function useButtons(card) {
    console.log(card);
    const firstButtons = ref({})
    const secondButtons = ref({})
    const getButtons = computed(async () => {
        return await card.buttons[0]   
    })


    return getButtons
}