<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">
      <h1>Auth</h1>

      <pre>{{ email }}</pre>
      <pre>{{ password }}</pre>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email.value">
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password.value">
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
          value: 'my@email.uz',
          validators: {required}
        },
        password: {
          value: 'myPassword',
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