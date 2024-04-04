<template>
  <div>
    <Toast />
    <ConfirmDialog group="headless">
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div
          class="flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md"
        >
          <div
            class="rounded-full bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[3rem]"
          >
            <i class="pi pi-question text-5xl"></i>
          </div>
          <span class="font-bold text-2xl block mb-2 mt-4">{{
            message.header
          }}</span>
          <p class="mb-0">{{ message.message }}</p>
          <div class="flex items-center gap-2 mt-4">
            <Button
              label="Iya"
              severity="danger"
              @click="acceptCallback"
            ></Button>
            <Button
              label="Batal"
              outlined
              @click="rejectCallback"
            ></Button>
          </div>
        </div>
      </template>
    </ConfirmDialog>
    <div class="relative bg-blueGray-100">
      <div class="relative bg-blue-500 md:pt-32 pb-32 pt-12">
        <div class="px-4 md:px-10 mx-auto w-full">
          <div class="relative bg-blueGray-100">
            <div class="px-4 md:px-10 mx-auto w-full">
              <h1 class="text-3xl text-white font-semibold mb-4">
                Selamat Datang, {{ loggedInUser.name }}
              </h1>
              <div>
                <p class="text-xl text-white font-semibold mb-4">{{ time }}</p>
                <p class="text-xl text-white font-semibold mb-4">{{ date }}</p>
              </div>
            </div>
          </div>
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                >
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div
                        class="relative w-full pr-4 max-w-full flex-grow flex-1"
                      >
                        <h5
                          class="text-blueGray-400 uppercase font-bold text-xs"
                        >
                          Traffic
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          350,897
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                        >
                          <i class="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap"> Since last month </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                >
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div
                        class="relative w-full pr-4 max-w-full flex-grow flex-1"
                      >
                        <h5
                          class="text-blueGray-400 uppercase font-bold text-xs"
                        >
                          New users
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          2,356
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
                        >
                          <i class="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-red-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap"> Since last week </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                >
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div
                        class="relative w-full pr-4 max-w-full flex-grow flex-1"
                      >
                        <h5
                          class="text-blueGray-400 uppercase font-bold text-xs"
                        >
                          Sales
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          924
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                        >
                          <i class="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-orange-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 1.10%
                      </span>
                      <span class="whitespace-nowrap"> Since yesterday </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                >
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div
                        class="relative w-full pr-4 max-w-full flex-grow flex-1"
                      >
                        <h5
                          class="text-blueGray-400 uppercase font-bold text-xs"
                        >
                          Performance
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          49,65%
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500"
                        >
                          <i class="fas fa-percent"></i>
                        </div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="whitespace-nowrap"> Since last month </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <div class="flex flex-wrap">
        </div>
        <div class="flex flex-wrap mt-4">

          <div class="w-full xl:w-4/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
            >

              <button @click="requireConfirmation" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            </div>
          </div>
        </div>
        <footer class="block py-4">
          <div class="container mx-auto px-4">
            <hr class="mb-4 border-b-1 border-blueGray-200" />
            <div
              class="flex  justify-center"
            >
              <div class="w-full px-4">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © 2024
                </div>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
// import NavbarComponent from "../components/dashboardComp/Navbar.vue";
// import LineChartComponent from "../components/dashboardComp/LineChart.vue";
// import BarChartComponent from "../components/dashboardComp/BarChart.vue";
export default {
  name: 'dashboard-page',
  components: {
    // NavbarComponent,
    // SidebarComponent,
    // LineChartComponent,
    // BarChartComponent
  },
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<script setup>
import axios from 'axios'
import { ref, onMounted, onUnmounted } from 'vue'
import ConfirmDialog from 'primevue/confirmdialog'
import Button from 'primevue/button'
import router from '../router/index'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import { useConfirm } from 'primevue/useconfirm'

const loggedInUser = ref([])

onMounted(() => {
  fetchDataUser()
  updateTime()
  timerID = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timerID)
})



const fetchDataUser = async () => {
  try {
    const usersLogin = localStorage.getItem('userLogin')

    console.log(usersLogin)
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/${usersLogin}`
    )
    console.log(response.data)
    loggedInUser.value = response.data.data
    console.log(loggedInUser.value)
  } catch (error) {
    console.error(error)
  }
}

const time = ref('')
const date = ref('')
const week = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const month = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
]
let timerID

const updateTime = () => {
  const cd = new Date()
  time.value =
    zeroPadding(cd.getHours(), 2) +
    ':' +
    zeroPadding(cd.getMinutes(), 2) +
    ':' +
    zeroPadding(cd.getSeconds(), 2)
  date.value =
    week[cd.getDay()] +
    ', ' +
    zeroPadding(cd.getDate(), 2) +
    ' ' +
    month[cd.getMonth()] +
    ' ' +
    zeroPadding(cd.getFullYear(), 4)
}

const zeroPadding = (num, digit) => {
  let zero = ''
  for (let i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}

const toast = useToast()
const confirm = useConfirm()

const logout = () => {
  document.cookie = 'userLogin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

  localStorage.removeItem('userLogin')
  localStorage.removeItem('token')

  router.push('/login')
  // window.location.reload()
}

const requireConfirmation = () => {
  confirm.require({
    group: 'headless',
    header: 'Anda yakin ingin keluar?',
    message: 'Silahkan konfirmasi untuk keluar',
    accept: () => {
      logout()
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Berhasil Keluar',
        life: 3000
      })
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Tidak jadi Keluar',
        life: 3000
      })
    }
  })
}
</script>
