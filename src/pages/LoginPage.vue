<template>
  <div class="card flex items-center justify-center m-5">

    <Card>
      <template #title>
        <h2 class="mt-6 text-center text-3xl font-extrabold">
          Masuk ke akun Anda
        </h2>
      </template>
      <template #content>
        <div class="card flex justify-center">
          <Toast />

      </div>
        <Toast/>
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div>
            <form class="space-y-6" @submit="onSubmit">
              <div>
                <label for="username" class="block text-sm font-medium">
                  Username
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

                <p class="my-2 text-red-800">
                  {{ errors.username }}
                </p>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium"
                >
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

                <p class="my-2 text-red-800">
                  {{ errors.password }}
                </p>
              </div>

              <div>
                <Button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Masuk
                </Button>
              </div>

              <div>
                <p class="mt-2 text-center text-sm ">
                  Belum punya akun?
                  <router-link
                    to="/register"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Register
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
import { useForm } from "vee-validate";
import router from "../router/index";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";
import axios from "axios";

function required(value) {
  return value ? true : "Username tidak boleh kosong";
}

function passwordRequired(value) {
  if (!value) {
    return "Password tidak boleh kosong";
  }
  if (value.length < 8) {
    return "Password terlalu pendek";
  }
  return true;
}

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    username: required,
    password: passwordRequired,
  },
});
const toast = useToast();
const username = defineInputBinds("username");
const password = defineInputBinds("password");
const onSubmit = handleSubmit(async (values) => {

  try {
    const response = await axios.post( `${import.meta.env.VITE_APP_API_URL}/login`, values)
    document.cookie = `token=${response.data.token}`;
    document.cookie = `userLogin=${response.data.userlogin}`;
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('userLogin', response.data.data.user._id);
    localStorage.setItem('username', response.data.data.user.username);
    toast.add({ severity: "success", summary: "Success", detail: "Berhasil Masuk" });
    // Redirect to another page
    router.push('/home');
  } catch (error) {
    toast.add({ severity: "error", summary: "Error", detail: "Username atau Password salah" });
    // Handle the error
    console.error(error)
  }
})




</script>

<script>
export default {
  data() {
    return {
      iconClass: "pi-moon",
    };
  },
  methods: {
    onThemeToggler() {
      const root = document.getElementsByTagName("html")[0];
      root.classList.toggle("dark");
      this.iconClass = this.iconClass === "pi-moon" ? "pi-sun" : "pi-moon";
    },
    navigate(route) {
      router.push(route);
    },
  },
};
</script>
