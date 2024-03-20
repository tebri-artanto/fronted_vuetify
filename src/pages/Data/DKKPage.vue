<template>
  <ThemeSwitcher />
  <div class="mx-10 my-10">
    <Toast />
    <Card>
      <template #title>
        <div class="flex justify-between">
          <h1 class="text-2xl font-bold">Data Kegiatan Kepegawaian</h1>
          <Button
            class="ml-5"
            label="Tambah DKK"
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
            <template #container>
              <Card>
                <template #title>
                  <h2 class="mt-1 text-left text-xl font-extrabold">
                    Tambah DKK
                  </h2>
                </template>
                <template #content>
                  <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <div>
                      <form class="space-y-2" @submit.prevent="tambahDKK">
                        <div>
                          <label for="namaKegiatan" class="block text-sm font-medium">
                            Nama Kegiatan
                          </label>
                          <div class="mt-1 flex w-full">
                            <InputText
                              v-model="namaKegiatan"
                              id="namaKegiatan"
                              v-bind="namaKegiatan"
                              name="namaKegiatan"
                              placeholder="Masukkan Nama DKK"
                              rows="8"
                              class="w-full"
                            />
                          </div>

                          <p class="mt-2 text-red-800">
                            {{ errors.namaKegiatan }}
                          </p>
                        </div>
                        <div>
                          <label for="kategori" class="block text-sm font-medium">
                            Katagori
                          </label>
                          <div class="mt-1 flex w-full">
                            <InputText
                              v-model="kategori"
                              id="kategori"
                              v-bind="kategori"
                              name="kategori"
                              placeholder="Enter kategori"
                              rows="8"
                              class="w-full"
                            />
                          </div>

                          <p class="mt-2 text-red-800">
                            {{ errors.kategori }}
                          </p>
                        </div>

                        <div>
                          <label
                            for="namaKegiatan"
                            class="block text-sm font-medium"
                          >
                            File/Berkas DKK
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
                            label="Cancel"
                            @click="visible = false"
                            class="w-70 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                          </Button>
                          <Button
                            type="submit"
                            class="ml-5 w-70 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Tambah DKK
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
                <div class="flex flex-col items-center p-5 bg-surface-0 dark:bg-surface-700 rounded-md">
                    <div class="rounded-full bg-primary-500 dark:bg-primary-400 text-surface-0 dark:text-surface-900 inline-flex justify-center items-center h-[6rem] w-[6rem] -mt-[3rem]">
                        <i class="pi pi-question text-5xl"></i>
                    </div>
                    <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
                    <p class="mb-0">{{ message.message }}</p>
                    <div class="flex items-center gap-2 mt-4">
                        <Button label="Hapus" severity="danger" @click="acceptCallback"></Button>
                        <Button label="Cancel" outlined @click="rejectCallback"></Button>
                    </div>
                </div>
            </template>
        </ConfirmDialog>
        </div>
      </template>

      <template #content>
        <DataTable
          v-model:filters="filters"
          :value="dpaData"
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
          :globalFilterFields="['judul', 'kategori', 'namaKegiatan']"
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
          <Column field="namaKegiatan" header="Nama DKK" sortable></Column>
          <Column field="kategori" header="Kategori" sortable></Column>
          <Column field="kategori" header="Deskripsi" sortable></Column>
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
          <Column header="Delete File">
            <template #body="slotProps">
              <a

              @click="requireConfirmation(slotProps.data._id)"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
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
import ConfirmDialog from 'primevue/confirmdialog';

const visible = ref(false)


const dpaData = ref()
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  judul: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  namaKegiatan: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  kategori: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})

const loading = ref(true) // optional

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
// Create the form
const { defineInputBinds, errors, validate } = useForm({
  validationSchema: {
    kategori: deskripsiRequired,
    namaKegiatan: kategoriRequired,
    file: fileRequired
  }
})

const toast = useToast()
const file = ref(null)
const handleFileUpload = event => {
  file.value = event.target.files[0]
}

const kategori = defineInputBinds('kategori')
const namaKegiatan = defineInputBinds('namaKegiatan')
const fileInput = defineInputBinds('fileInput')

const fetchData = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/dkk/getall`)
    dpaData.value = response.data.data
    dpaData.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    loading.value = false
  } catch (error) {
    console.error(error)
  }
}

const tambahDKK = async () => {
  try {
    const formData = new FormData()
    formData.append('kategori', kategori.value.value)
    formData.append('namaKegiatan', namaKegiatan.value.value)
    formData.append('file', file.value)

    const isFormValid = await validate()
    if (!isFormValid) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill in all required fields'
      })
      return
    }
    const response = await axios.post(
      'http://localhost:8000/dkk/upload',
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
      detail: 'Data berhasil ditambahkan'
    })
    console.log(response.data)
    console.log('Data berhasil ditambahkan')
    visible.value = false
    window.location.reload()
    fetchData()


    // Redirect to another page
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Invalid kategori or namaKegiatan'
    })
    // Handle the error
    console.error(error)
    event.preventDefault()
  }
}

import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

const requireConfirmation = (id) => {
    confirm.require({
        group: 'headless',
        header: 'Anda yakin menghapus Data ini?',
        message: 'Silahkan konfirmasi untuk menghapus.',
        accept: () => {
          deleteData(id);
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Data berhasil dihapus', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'Tidak jadi hapus Data', life: 3000 });
        }
    });
};


const deleteData = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8000/dkk/delete/${id}`);
    // Handle the response
    console.log(response.data);
    console.log('Data berhasil dihapus');
    window.location.reload();
    // Perform any additional actions after deleting the data
  } catch (error) {
    // Handle the error
    console.error(error);
  }
};

</script>
