import {computed, ref} from 'vue'

export default function useButtons(card) {
    console.log(card);
    const firstButtons = ref({})
    const secondButtons = ref({})
    const getButtons = computed(() => {
        firstButtons.value = card.buttons[0]
        secondButtons.value = card.buttons[1]      
    })
    return firstButtons, secondButtons
}