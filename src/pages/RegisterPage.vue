<template>
  <div class="card flex items-center justify-center m-5">
    <Card>
      <template #title>
        <h2 class="mt-6 text-center text-3xl font-extrabold">
          Daftarkan Akun Baru
        </h2>
      </template>
      <template #content>
        <div class="card flex justify-center">
          <Toast />

      </div>
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
                    placeholder="Masukkan Nama Lengkap"
                    class="appearance-none block w-full px-3 py-2 border sm:text-sm"
                  />
                </div>
                <p class="my-2 text-sm font-normal text-red-800">
                  {{ errors.name }}
                </p>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium">
                  Alamat Email
                </label>
                <div class="mt-1">
                  <InputText
                    v-model="email"
                    id="email"
                    v-bind="email"
                    name="email"
                    type="email"
                    placeholder="Masukkan Alamat Email"
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
                    placeholder="Masukkan Username"
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
                    placeholder="Masukkan Password"
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
                  Daftar
                </Button>
              </div>

              <div>
                <p class="mt-2 text-center text-sm">
                  Sudah punya akun?
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
import { useForm } from 'vee-validate'
import router from '../router/index'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import axios from 'axios';
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

function nameRequired (value) {
  return value ? true : 'Nama tidak boleh kosong'
}
function required (value) {
  return value ? true : 'Email tidak boleh kosong'
}

function usernameRequired (value) {
  return value ? true : 'Username tidak boleh kosong'
}


function passwordRequired (value) {
  if (!value) {
    return 'Password tidak boleh kosong'
  }
  if (value.length < 8) {
    return 'Password terlalu pendek'
  }
  return true
}

const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    name: nameRequired,
    email: required,
    username: usernameRequired,
    password: passwordRequired
  }
})

const name = defineInputBinds('name')
const username = defineInputBinds('username')
const email = defineInputBinds('email')
const password = defineInputBinds('password')

const toast = useToast();

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/register`, values);
    console.log(response.data);
    router.push('/login');
    toast.add({ severity: 'success', summary: 'Success', detail: 'Akun berhasil didaftarkan' });

  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.error(error.response.data);
      toast.add({ severity: 'error', summary: 'Error', detail: "Username sudah ada" });
    } else {
      console.error(error);
    }
  }
})
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
