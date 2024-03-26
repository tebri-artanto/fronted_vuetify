<template>
  <div class="card flex items-center justify-center m-5">
    <Card>
      <template #title>
        <h2 class="mt-6 text-center text-3xl font-extrabold">
          Register a new Account
        </h2>
      </template>
      <template #content>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div>
            <form class="space-y-6" @submit="onSubmit">
              <div>
                <label for="name" class="block text-sm font-medium">
                  Nama Lengkap
                </label>
                <div class="mt-1">
                  <InputText
                    v-model="name"
                    id="name"
                    v-bind="name"
                    name="name"
                    placeholder="Enter Full Name"
                    class="appearance-none block w-full px-3 py-2 border sm:text-sm"
                  />
                </div>
                <p class="my-2 text-sm font-normal text-red-800">
                  {{ errors.name }}
                </p>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium">
                  Email address
                </label>
                <div class="mt-1">
                  <InputText
                    v-model="email"
                    id="email"
                    v-bind="email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    class="appearance-none block w-full px-3 py-2 border sm:text-sm"
                  />
                </div>
                <p class="my-2 text-sm font-normal text-red-800">
                  {{ errors.email }}
                </p>
              </div>

              <div>
                <label for="username" class="block text-sm font-medium">
                  Username(untuk Login)
                </label>
                <div class="mt-1">
                  <InputText
                    v-model="username"
                    id="username"
                    v-bind="username"
                    name="username"
                    placeholder="Enter username"
                    class="appearance-none block w-full px-3 py-2 border sm:text-sm"
                  />
                </div>
                <p class="my-2 text-sm font-normal text-red-800">
                  {{ errors.username }}
                </p>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium">
                  Password
                </label>
                <div class="mt-1">
                  <InputText
                    v-model="password"
                    type="password"
                    :feedback="false"
                    toggleMask
                    id="password"
                    v-bind="password"
                    name="password"
                    placeholder="Enter Password"
                    class="appearance-none block w-full px-3 py-2 sm:text-sm"
                  />
                </div>

                <p class="my-2 text-sm font-normal text-red-800">
                  {{ errors.password }}
                </p>
              </div>

              <div>
                <Button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </Button>
              </div>

              <div>
                <p class="mt-2 text-center text-sm">
                  Already have an account?
                  <router-link
                    to="/login"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Login
                  </router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </template>
    </Card>
  </div>
  <FooterComponent />
</template>

<script setup>
import { computed } from 'vue'
// import { useAuth } from '../store/auth';
import { useForm } from 'vee-validate'
import router from '../router/index'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import axios from 'axios';

// import FooterComponent from '../components/FooterComponent.vue';

// const auth = useAuth();
// const authData = computed(() => auth.getAuthData);

// if (authData.value) {
//   router.push({ name: 'Expense' });
// }

// Validation, or use `yup` or `zod`

function nameRequired (value) {
  return value ? true : 'Name field is required'
}
function required (value) {
  return value ? true : 'Email field is required'
}

function usernameRequired (value) {
  return value ? true : 'Username field is required'
}



function passwordRequired (value) {
  if (!value) {
    return 'Password is a required field'
  }
  if (value.length < 8) {
    return 'Password is too short'
  }
  return true
}

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    name: nameRequired,
    email: required,
    username: usernameRequired,
    password: passwordRequired
  }
})

// Define fields
const name = defineInputBinds('name')
const username = defineInputBinds('username')
const email = defineInputBinds('email')
const password = defineInputBinds('password')
// const api = process.env.VUE_APP_API_URL
const onSubmit = handleSubmit(async (values) => {
  try {
    // Submit to API using Axios
    const response = await axios.post( `${import.meta.env.VITE_APP_API_URL}/register`, values)
    // Handle the response
    console.log(response.data)
    // Redirect to another page
    router.push('/login');
  } catch (error) {
    // Handle the error
    console.error(error)
  }
})
// Submit handler
// const onSubmit = handleSubmit(async (values) => {
// // Submit to API
// await auth.loginAction(values);
// router.push({ name: 'Expense' });
// });
</script>

<script>
export default {
  data() {
    return {
      iconClass: 'pi-moon'
    }
  },
  methods: {
    onThemeToggler () {
      const root = document.getElementsByTagName('html')[0]
      root.classList.toggle('dark')
      this.iconClass = this.iconClass === 'pi-moon' ? 'pi-sun' : 'pi-moon'
    },
    navigate (route) {
      router.push(route)
    }
  }
}
</script>
