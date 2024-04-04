<template>
  <ThemeSwitcher />
  <div class="mx-10 my-10">
    <Toast />
    <Card>
      <template #title>
        <div class="flex justify-between">
          <h1 class="text-2xl font-bold">Data Kegiatan Sekretariat</h1>
          <Button
            class="ml-5"
            label="Tambah Kegiatan"
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
                    Tambah Kegiatan
                  </h2>
                </template>
                <template #content>
                  <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <div>
                      <form class="space-y-2" @submit.prevent="tambahKegSek">
                        <div>
                          <label
                            for="namaKegiatan"
                            class="block text-sm font-medium"
                          >
                            Nama Kegiatan
                          </label>
                          <div class="mt-1 flex w-full">
                            <InputText
                              v-model="namaKegiatan"
                              id="namaKegiatan"
                              v-bind="namaKegiatan"
                              name="namaKegiatan"
                              placeholder="Masukkan Nama Kegiatan"
                              rows="8"
                              class="w-full"
                            />
                          </div>

                          <p class="mt-2 text-red-800">
                            {{ errors.namaKegiatan }}
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
                          <label
                            for="deskripsi"
                            class="block text-sm font-medium"
                          >
                            Deskripsi
                          </label>
                          <div class="mt-1 flex w-full">
                            <Textarea
                              v-model="deskripsi"
                              id="deskripsi"
                              v-bind="deskripsi"
                              name="deskripsi"
                              placeholder="Masukkan deskripsi"
                              rows="8"
                              class="w-full"
                            />
                          </div>

                          <p class="mt-2 text-red-800">
                            {{ errors.deskripsi }}
                          </p>
                        </div>

                        <div>
                          <label
                            for="namaKegiatan"
                            class="block text-sm font-medium"
                          >
                            File/Berkas Kegiatan
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
                            label="Batal"
                            @click="visible = false"
                            class="w-70 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                          </Button>
                          <Button
                            type="submit"
                            class="ml-5 w-70 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Tambah Kegiatan
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </template>
              </Card>
            </template>
          </Dialog>
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
        </div>
      </template>

      <template #content>
        <DataTable
          v-model:filters="filters"
          :value="kegSekData"
          paginator
          :rows="10"
          dataKey="id"
          scrollable
          scrollHeight="flex"
          :rowsPerPageOptions="[10, 20, 50]"
          tableStyle="min-width: 50rem"
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          filterDisplay="row"
          :loading="loading"
          :globalFilterFields="['judul', 'deskripsi', 'namaKegiatan']"
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
          <template #empty> No datas found. </template>
          <template #loading> Loading data. Please wait. </template>
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
          <Column field="judul" header="Judul" sortable></Column>
          <Column field="namaKegiatan" header="Kategori" sortable></Column>
          <Column field="deskripsi" header="Deskripsi" sortable></Column>
          <Column header="Download File">
            <template #body="slotProps">
              <a
                :href="slotProps.data.fileUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download
              </a>
            </template>
          </Column>
          <Column header="Hapus File">
            <template #body="slotProps">
              <a
                @click="requireConfirmation(slotProps.data._id)"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Hapus
              </a>
            </template>
          </Column>
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
import axios from 'axios'
import Textarea from 'primevue/textarea'
import Avatar from 'primevue/avatar'
import ConfirmDialog from 'primevue/confirmdialog'
import Calendar from 'primevue/calendar'
import { useConfirm } from 'primevue/useconfirm'

const confirm = useConfirm()

const visible = ref(false)

const kegSekData = ref()
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  judul: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  namaKegiatan: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  deskripsi: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})

const loading = ref(true)

onMounted(() => {
  fetchData()
})

function deskripsiRequired (value) {
  return value ? true : 'Deskripsi tidak boleh kosong'
}

function kategoriRequired (value) {
  return value ? true : 'Kategori tidak boleh kosong'
}

function fileRequired (value) {
  return value ? true : ''
}
const { defineInputBinds, errors, validate } = useForm({
  validationSchema: {
    deskripsi: deskripsiRequired,
    namaKegiatan: kategoriRequired,
    file: fileRequired
  }
})

const toast = useToast()
const file = ref(null)
const handleFileUpload = event => {
  file.value = event.target.files[0]
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
const deskripsi = defineInputBinds('deskripsi')
const namaKegiatan = defineInputBinds('namaKegiatan')
const fileInput = defineInputBinds('fileInput')

const fetchData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/kegsek/getall`
    )
    kegSekData.value = response.data.data
    kegSekData.value.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    loading.value = false
  } catch (error) {
    console.error(error)
  }
}

const tambahKegSek = async () => {
  try {
    const formData = new FormData()
    formData.append('deskripsi', deskripsi.value.value)
    formData.append('namaKegiatan', namaKegiatan.value.value)
    formData.append('date', formatDate(date.value))
    formData.append('file', file.value)

    const isFormValid = await validate()
    if (!isFormValid) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Isian tidak boleh kosong'
      })
      return
    }
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/kegsek/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data berhasil ditambahkan'
    })
    console.log(response.data)
    console.log('Data berhasil ditambahkan')
    visible.value = false
    window.location.reload()
    fetchData()
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Data gagal ditambahkan'
    })
    console.error(error)
    event.preventDefault()
  }
}

const requireConfirmation = id => {
  confirm.require({
    group: 'headless',
    header: 'Anda yakin menghapus Data ini?',
    message: 'Silahkan konfirmasi untuk menghapus.',
    accept: () => {
      deleteData(id)
      toast.add({
        severity: 'info',
        summary: 'Confirmed',
        detail: 'Data berhasil dihapus',
        life: 3000
      })
    },
    reject: () => {
      toast.add({
        severity: 'error',
        summary: 'Rejected',
        detail: 'Tidak jadi hapus Data',
        life: 3000
      })
    }
  })
}

const deleteData = async id => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_URL}/kegsek/delete/${id}`
    )
    console.log(response.data)
    console.log('Data berhasil dihapus')
    window.location.reload()
  } catch (error) {
    console.error(error)
  }
}
</script>
