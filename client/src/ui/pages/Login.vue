<script setup>
import {ref} from "vue";
import TextField from "../../ui/components/common/fields/TextField.vue"
import {useValidation} from "../../composable/validation.js";
import {useAuth} from "../../composable/auth.js";
import {useErrorsList} from "../../composable/errors-list.js";
import {router, routeNames} from "../../router";

const email = ref('');
const password = ref('');

const {login} = useAuth();
const {errors, setError, clearErrors} = useErrorsList()
const {validator, validate} = useValidation();

const loginValidation = () => {
  const schema = validator.object().shape({
    email: validator.string().required().email(),
    password: validator.string().required().min(4),
  });

  return validate(schema, {
    email: email.value,
    password: password.value,
  })
}

const onSubmit = async () => {
  clearErrors()

  const {success, message, field} = loginValidation()

  if(success) {
    const loginAttempt = await login(email.value, password.value)

    if(loginAttempt) {
      await router.push({name: routeNames.filesList})
      return null;
    }

    setError('email', 'Something went wrong');

    return null;
  }

  setError(field, message);
}
</script>
<template>
  <div class="card" :style="{width: '650px', marginTop: '225px'}">
    <div class="card-header">
      <h4 class="card-title">Login</h4>
    </div>

    <form>
      <div class="card-body">

        <div class="pt-3">
          <label class="form-label">Email address</label>

          <text-field
              type="email"
              v-model="email"
              :error-message="errors['email']"
              @input="clearErrors"
          />
        </div>

        <div class="mt-2">
          <label class="form-label">Password</label>

          <text-field
              type="password"
              v-model="password"
              :error-message="errors['password']"
              @input="clearErrors"
          />
        </div>

        <div class="my-4 float-right">
          <button @click.prevent="onSubmit" class="btn btn-info px-4">
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>