<template>
  <ThemeSwitcher />
  <div class="mx-10 my-10">
    <Toast />
    <Card>
      <template #title>
        <div class="flex justify-between">
          <h1 class="text-2xl font-bold">Tambah Aktivitas</h1>
          <Button
            class="ml-5"
            label="Tambah Aktivitas"
            icon="pi pi-plus"
            @click="visible = true"
          />
          <Dialog
            v-model:visible="visible"
            modal
            header="Header"
            :style="{ width: '50rem' }"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
          >
            <template #header>
              <div class="inline-flex items-center justify-center gap-2">
                <Avatar
                  image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                  shape="circle"
                />
                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
              </div>
            </template>
            <template #container>
              <Card>
                <template #title>
                  <h2 class="mt-1 text-left text-xl font-extrabold">
                    Tambah Aktivitas
                  </h2>
                </template>
                <template #content>
                  <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <div>
                      <form class="space-y-2" @submit="tambahActivity">
                        <div>
                          <label
                            for="activity"
                            class="block text-sm font-medium"
                          >
                            Aktivitas / Kegiatan
                          </label>
                          <div class="mt-1 flex w-full">
                            <Textarea
                              v-model="activity"
                              id="activity"
                              v-bind="activity"
                              name="activity"
                              placeholder="Enter activity"
                              rows="8"
                              class="w-full"
                            />
                          </div>

                          <p class="mt-2 text-red-800">
                            {{ errors.activity }}
                          </p>
                        </div>

                        <div>
                          <label for="date" class="block text-sm font-medium">
                            Tanggal
                          </label>
                          <div class="mt-1 flex w-full">
                            <Calendar
                              v-model="date"
                              v-bind="date"
                              showButtonBar
                            />
                          </div>

                          <p class="mt-2 text-red-800">
                            {{ errors.date }}
                          </p>
                        </div>

                        <div>
                          <label for="date" class="block text-sm font-medium">
                            Foto Kegiatan/Aktivitas
                          </label>
                          <div class="card w-full mt-1">
                            <input
                              v-bind="fileInput"
                              id="fileInput"
                              name="fileInput"
                              type="file"
                              @change="handleFileUpload"
                              class="rounded-md"
                            />
                          </div>

                          <p class="mt-2 text-red-800">
                            {{ errors.file }}
                          </p>
                        </div>
                        <div class="flex justify-end mt-4">
                          <Button
                          label="Cancel" @click="visible = false"
                            class="w-70 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                          </Button>
                          <Button
                            type="submit"
                            class="ml-5 w-70 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Tambah Aktivitas
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </template>
              </Card>
            </template>
          </Dialog>
        </div>
      </template>

    <template #content>
    <DataTable
      v-model:filters="filters"
      :value="activityData"
      paginator
      :rows="5"
      dataKey="id"
      scrollable scrollHeight="flex"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 50rem"
      paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first} to {last} of {totalRecords}"
      filterDisplay="row"
      :loading="loading"
      :globalFilterFields="[
        'activity',
        'date',
      ]"
    >
      <template #header>
        <div class="flex justify-end">
          <span class="relative">
            <i
              class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600"
            />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
              class="pl-10 font-normal"
            />
          </span>

        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" text />
      </template>

      <template #paginatorend>
        <Button type="button" icon="pi pi-download" text />
      </template>

      <Column header="No" style="width: 2%">
        <template #body="slotProps">
            {{ slotProps.index + 1 }}
        </template>
    </Column>
      <Column
        field="activity"
        header="Aktivitas"
        style="width: 40%"
        sortable
      ></Column>
      <Column
        field="date"
        header="Tanggal"
        style="width: 10%"
        sortable
      ></Column>
      <Column
        field="imgUrl"
        header="Bukti"
        style="width: 10%"
        sortable
      >
        <template #body="rowData">
          <Image :src="rowData.data.imgUrl" alt="Image" width="50" preview/>
        </template>
      </Column>
      <Column
        field="owner"
        header="Owner"
        style="width: 10%"
        sortable
      ></Column>


    </DataTable>
  </template>
  </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { FilterMatchMode } from 'primevue/api'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import { useForm } from 'vee-validate'
import Card from 'primevue/card'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import router from '../router/index'
import Calendar from 'primevue/calendar'
import axios from 'axios'
import Textarea from 'primevue/textarea'
import Avatar from 'primevue/avatar'
import Image from 'primevue/image'



const visible = ref(false)

const activityData = ref()
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  activity: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  date: { value: null, matchMode: FilterMatchMode.EQUALS }
})

const loading = ref(true) // optional

const formatDateTable = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${day}-${month}-${year}`;
};


onMounted(() => {
  const usersLogin = localStorage.getItem('userLogin')
  console.log(usersLogin)
  axios.get(`${import.meta.env.VITE_APP_API_URL}/user/${usersLogin}/activities`).then(response => {
    activityData.value = response.data
    activityData.value.forEach((data) => {
      data.date = formatDateTable(data.date)
    })
    loading.value = false
  })
  console.log(activityData)
})

function activityRequired (value) {
  return value ? true : 'Activity field is required'
}

function dateRequired (value) {
  return value ? true : 'Date field is required'
}

function fileRequired (value) {
  return value ? true : 'Photo field is required'
}
// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    activity: activityRequired,
    date: dateRequired,
    file: fileRequired
  }
})
const toast = useToast()
const file = ref(null)
const handleFileUpload = event => {
  file.value = event.target.files[0]
}
// Define fields
const activity = defineInputBinds('activity')
const Adate = defineInputBinds('date')
const fileInput = defineInputBinds('fileInput')

const tambahActivity = async () => {
  const userLogin = localStorage.getItem('userLogin')
  console.log(userLogin)
  try {
    const formData = new FormData()
    formData.append('activity', activity.value.value)
    formData.append('date', formatDate(date.value))
    formData.append('file', file.value)
    formData.append('owner', localStorage.getItem('userLogin'))
    console.log(formData)
    const response = await axios.post(
     `${import.meta.env.VITE_APP_API_URL}/activities/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    // Handle the response
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login successful'
    })
    console.log(response.data)
    router.push('/home/activity')
    // event.preventDefault()
    // Redirect to another page
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Invalid activity or date'
    })
    // Handle the error
    console.error(error)
    event.preventDefault()
  }
}

const formatDate = inputDate => {
  const year = inputDate.getFullYear()
  const month = String(inputDate.getMonth() + 1).padStart(2, '0')
  const day = String(inputDate.getDate()).padStart(2, '0')

  const hours = String(inputDate.getHours()).padStart(2, '0')
  const minutes = String(inputDate.getMinutes()).padStart(2, '0')
  const seconds = String(inputDate.getSeconds()).padStart(2, '0')
  const milliseconds = String(inputDate.getMilliseconds()).padStart(3, '0')

  const timezoneOffset = inputDate.getTimezoneOffset()
  const timezoneOffsetSign = timezoneOffset > 0 ? '-' : '+'
  const timezoneOffsetHours = String(
    Math.abs(Math.floor(timezoneOffset / 60))
  ).padStart(2, '0')
  const timezoneOffsetMinutes = String(Math.abs(timezoneOffset % 60)).padStart(
    2,
    '0'
  )
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneOffsetSign}${timezoneOffsetHours}:${timezoneOffsetMinutes}`

  return formattedDate
}
const date = ref()
</script>
