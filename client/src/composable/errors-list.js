import {ref} from "vue";

export const useErrorsList = () => {
    const errors = ref({})

    const clearErrors = (key='') => {
        if(key) {
            errors.value[key] = '';
        } else {
            errors.value = {}
        }
    }

    const setError = (key, value) => errors.value[key] = value

    return {
        clearErrors,
        setError,
        errors,
    }
}