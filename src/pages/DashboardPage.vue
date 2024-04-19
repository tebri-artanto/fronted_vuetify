<template>
  <div>
    <Toast />
    <ConfirmDialog group="headless">
      <template #container="{ message, acceptCallback, rejectCallback }">
        <div class="flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md">
          <div
            class="rounded-full bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[3rem]">
            <i class="pi pi-question text-5xl"></i>
          </div>
          <span class="font-bold text-2xl block mb-2 mt-4">{{
        message.header
      }}</span>
          <p class="mb-0">{{ message.message }}</p>
          <div class="flex items-center gap-2 mt-4">
            <Button label="Iya" severity="danger" @click="acceptCallback"></Button>
            <Button label="Batal" outlined @click="rejectCallback"></Button>
          </div>
        </div>
      </template>
    </ConfirmDialog>
    <div class="relative bg-blueGray-100">
      <div class="relative bg-blue-500 md:pt-32 pb-20 pt-10">
        <div class="px-4 md:px-10 mx-auto w-full pb-32">
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
              <!-- semua aktivitas -->
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4" v-if="username === 'admin'">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h6 class="text-green-500 font-bold text-2xl">
                          Semua Aktivitas
                        </h6>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-800"
                          @click="$router.push('/home/allActivity')">
                          <i class="pi pi-folder" @click="$router.push('/home/allActivity')"></i>
                        </div>
                      </div>
                    </div>
                    <button class="text-black font-semibold mt-2" @click="$router.push('/home/allActivity')">
                      Lihat Data
                    </button>
                  </div>
                </div>
              </div>
              <!-- menu lain-->
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4" v-for="menuItem in menuItems" :key="menuItem.id">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h6 class="text-green-500 font-bold text-2xl">
                          {{ menuItem.title }}
                        </h6>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div
                          class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
                          :class="menuItem.iconColor"
                          @click="$router.push(menuItem.route)">
                          <i :class="menuItem.icon"  @click="$router.push(menuItem.route)"></i>
                        </div>
                      </div>
                    </div>
                    <button class="text-black font-semibold mt-2" @click="$router.push(menuItem.route)">
                      {{ menuItem.buttonText }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <div class="flex flex-wrap"></div>
        <footer class="block py-4 pt-5 mt-5">
          <div class="container mx-auto px-4">
            <hr class="mb-4 border-b-1 border-blueGray-200" />
            <div class="flex justify-center">
              <div class="w-full px-4 pt-10">
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

const username = localStorage.getItem('username')

onMounted(() => {
  fetchDataUser()
  updateTime()
  timerID = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timerID)
})

const menuItems = [
  {
    id: 1,
    title: 'Aktivitas',
    icon: 'pi pi-folder',
    iconColor: 'bg-blue-500',
    route: '/home/activity',
    buttonText: 'Lihat Data'
  },
  {
    id: 2,
    title: 'Data Karyawan',
    icon: 'pi pi-folder',
    iconColor: 'bg-blue-500',
    route: '/home/dataKaryawan',
    buttonText: 'Lihat Data'
  },
  {
    id: 3,
    title: 'DPA',
    icon: 'pi pi-folder',
    iconColor: 'bg-blue-500',
    route: '/home/dpa',
    buttonText: 'Lihat Data'
  },
  {
    id: 4,
    title: 'RKA',
    icon: 'pi pi-folder',
    iconColor: 'bg-blue-500',
    route: '/home/rka',
    buttonText: 'Lihat Data'
  },
  {
    id: 5,
    title: 'Data Kegiatan Sekretariat',
    icon: 'pi pi-folder',
    iconColor: 'bg-blue-500',
    route: '/home/kegiatanSekretariat',
    buttonText: 'Lihat Data'
  },
  {
    id: 6,
    title: 'Data Aset',
    icon: 'pi pi-folder',
    iconColor: 'bg-blue-500',
    route: '/home/dataaset',
    buttonText: 'Lihat Data'
  },
  {
    id: 7,
    title: 'Data Kegiatan Kepegawaian',
    icon: 'pi pi-folder',
    iconColor: 'bg-blue-500',
    route: '/home/dkk',
    buttonText: 'Lihat Data'
  },
  {
    id: 8,
    title: 'DPHCHT',
    icon: 'pi pi-folder',
    iconColor: 'bg-blue-500',
    route: '/home/dbhcht',
    buttonText: 'Lihat Data'
  }
]

const token = localStorage.getItem('token')
const api = axios.create({
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

const fetchDataUser = async () => {
  try {
    const usersLogin = localStorage.getItem('userLogin')
    const response = await api.get(
      `${import.meta.env.VITE_APP_API_URL}/${usersLogin}`
    )
    loggedInUser.value = response.data.data

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
