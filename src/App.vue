<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>Auth</h1>

      <div class="form-control" :class="{invalid: form.email.touched && !form.email.valid}">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email.value" @blur="form.email.blur">
        <small v-if="form.email.touched && form.email.errors.required">Email is required</small>
      </div>

      <div class="form-control" :class="{invalid: form.password.touched && !form.password.valid}">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="form.password.value" @blur="form.password.blur">
        <small v-if="form.password.touched && form.password.errors.required">Password is required</small>
        <small v-else-if="form.password.touched && form.password.errors.minLength">
          Password length can not be less than 8. Now it is {{ form.password.value.length }}
        </small>
      </div>

      <button class="btn primary" type="submit" :disabled="!form.valid">Submit</button>
    </form>
  </div>
</template>

<script>
  import {useForm} from "@/use/form";

  const required = val => !!val
  const minLength = num => val => val.length >= num

  export default {
    setup() {
      const form = useForm({
        email: {
          value: '',
          validators: {required}
        },
        password: {
          value: '',
          validators: {required, minLength: minLength(8)}
        }
      })

      console.log(form)

      function submit() {

      }

      return {form, submit}
    }
  }
</script>