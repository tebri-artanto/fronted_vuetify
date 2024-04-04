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
      <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
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
          <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
            >
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-blueGray-700">
                      Page visits
                    </h3>
                  </div>
                  <div
                    class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                  >
                    <button
                      class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease"
                    >
                      See all
                    </button>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead>
                    <tr>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Page name
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Visitors
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Unique users
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Bounce rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        /argon/
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        4,569
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        340
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        /argon/index.html
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        3,985
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        319
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
                        46,53%
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        /argon/charts.html
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        3,513
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        294
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
                        36,49%
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        /argon/tables.html
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        2,050
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        147
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                        50,87%
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        /argon/profile.html
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        1,795
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        190
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <i class="fas fa-arrow-down text-red-500 mr-4"></i>
                        46,53%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="w-full xl:w-4/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
            >
              <div class="rounded-t mb-0 px-4 py-3 border-0">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 class="font-semibold text-base text-blueGray-700">
                      Social traffic
                    </h3>
                  </div>
                  <div
                    class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                  >
                    <button
                      class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease"
                    >
                      See all
                    </button>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead class="thead-light">
                    <tr>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Referral
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                      >
                        Visitors
                      </th>
                      <th
                        class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                        style="min-width: 140px"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        Facebook
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        1,480
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <div class="flex items-center">
                          <span class="mr-2">60%</span>
                          <div class="relative w-full">
                            <div
                              class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                            >
                              <div
                                style="width: 60%"
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        Facebook
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        5,480
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <div class="flex items-center">
                          <span class="mr-2">70%</span>
                          <div class="relative w-full">
                            <div
                              class="overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
                            >
                              <div
                                style="width: 70%"
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        Google
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        4,807
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <div class="flex items-center">
                          <span class="mr-2">80%</span>
                          <div class="relative w-full">
                            <div
                              class="overflow-hidden h-2 text-xs flex rounded bg-purple-200"
                            >
                              <div
                                style="width: 80%"
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        Instagram
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        3,678
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <div class="flex items-center">
                          <span class="mr-2">75%</span>
                          <div class="relative w-full">
                            <div
                              class="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200"
                            >
                              <div
                                style="width: 75%"
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                      >
                        twitter
                      </th>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        2,645
                      </td>
                      <td
                        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        <div class="flex items-center">
                          <span class="mr-2">30%</span>
                          <div class="relative w-full">
                            <div
                              class="overflow-hidden h-2 text-xs flex rounded bg-orange-200"
                            >
                              <div
                                style="width: 30%"
                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
    //  const response = await axios.get(`http://localhost:8000/${usersLogin}`)
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
</script>
