import {reactive, ref, watch} from "vue";

export function useField(field) {
    const valid = ref(true)
    const value = ref(field.value)
    const errors = reactive({})

    const reassign = val => {
        Object.keys(field.validators ?? {}).map(name => {
            const isValid = field.validators[name](val)
            errors[name] = !isValid
        })
    }

    watch(value, reassign)
    reassign(field.value)

    return {value, valid, errors}
}