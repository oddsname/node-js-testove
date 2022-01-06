import {serialize} from "object-to-formdata";

export const formDataService = {
    objectToFormData(object) {
        return serialize(object);
    }
}