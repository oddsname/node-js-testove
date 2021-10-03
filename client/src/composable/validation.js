import * as yup from "yup"
import {ref} from "vue";

export const useValidation = () => {

    const validate = (schema, fields) => {
        try {
            schema.validateSync(fields)

            return {
                success: true,
                message: '',
                field: '',
            }
        } catch ({params, message}) {
            return {
                success: false,
                message,
                field: params.path,
            }
        }
    }

    return {
        validator: {
            string: () => yup.string(),
            object: (...arg) => yup.object(...arg),
        },
        validate,
    }
}

