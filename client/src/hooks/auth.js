import {reactive, ref, toRef} from "vue";
import {AuthUser} from "../models/auth-user.js";

const authUser = ref({
    name: '',
    email: '',
})

const isUserAuth = ref(false);

export const useAuth = () => {

    const login = ({email, password}) => {

    }

    return {

    }
}