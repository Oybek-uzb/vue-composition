<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>Auth</h1>

<!--      <pre>{{ email }}</pre>-->
<!--      <pre>{{ password }}</pre>-->

      <div class="form-control" :class="{invalid: email.touched && !email.valid}">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email.value" @blur="email.blur">
        <small v-if="email.touched && email.errors.required">Email is required</small>
      </div>

      <div class="form-control" :class="{invalid: password.touched && !password.valid}">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password.value" @blur="password.blur">
        <small v-if="password.touched && password.errors.required">Password is required</small>
        <small v-else-if="password.touched && password.errors.minLength">
          Password length can not be less than 8. Now it is {{ password.value.length }}
        </small>
      </div>

      <button class="btn primary" type="submit">Submit</button>
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

      console.log(form.password)

      function submit() {

      }

      return form
    }
  }
</script>