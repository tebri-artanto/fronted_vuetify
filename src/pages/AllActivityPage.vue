<template>
  <ThemeSwitcher />
  <div class="mx-10 my-10">
    <Toast />
    <Card>
      <template #title>
        <div class="flex justify-between">
          <h1 class="text-2xl font-bold">Data Semua Aktivitas</h1>
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
          :value="allUserData"
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
          :globalFilterFields="['name', 'email', 'kategori']"
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
          <Column field="name" header="Nama" sortable></Column>
          <!-- <Column field="kategori" header="Kategori" sortable></Column> -->
          <Column field="email" header="Email" sortable></Column>
          <Column header="Aktivitas">
            <template #body="slotProps">
              <a
                @click="
                  getDataAktivitas(slotProps.data._id, slotProps.data.name)
                "
                target="_blank"
                rel="noopener noreferrer"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Lihat Aktivitas
              </a>
              <Dialog
                v-model:visible="visible"
                maximizable
                modal
                header="Header"
                class="min-w-80"
                :closable="true"
                :style="{ width: '50rem' }"
                :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
              >
                <template #header>
                  <h2 class="mt-1 text-left text-xl font-extrabold">
                    Data Aktivitas {{ namaUser }}
                  </h2>
                </template>

                <Card>
                  <template #content>
                    <DataTable
                      v-model:filters="filters"
                      :value="activityData"
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
                      :globalFilterFields="[
                        'judul',
                        'activity',
                        'namaaktivitas'
                      ]"
                    >
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
                      <Column
                        field="activity"
                        header="Aktivitas"
                        style="width: 40%"
                        sortable
                      ></Column>
                      <Column field="date" header="Tanggal" sortable></Column>
                      <Column field="imgUrl" header="Bukti" sortable>
                        <template #body="rowData">
                          <Image
                            :src="rowData.data.imgUrl"
                            alt="Image"
                            width="50"
                            preview
                          />
                        </template>
                      </Column>
                    </DataTable>
                  </template>
                </Card>
              </Dialog>
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
import Card from 'primevue/card'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import axios from 'axios'
import Image from 'primevue/image'
import ConfirmDialog from 'primevue/confirmdialog'

const visible = ref(false)

const allUserData = ref()
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  kategori: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  email: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})

const loading = ref(true)

onMounted(() => {
  fetchRkaData()
})

const activityData = ref()
const namaUser = ref()

const getDataAktivitas = async (id, name) => {
  try {
    console.log(id)
    namaUser.value = name
    console.log(namaUser)
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/user/${id}/activities`
    )
    activityData.value = response.data
    activityData.value.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    activityData.value.forEach(data => {
      data.date = formatDateTable(data.date)
    })
    loading.value = false
    visible.value = true
  } catch (error) {
    console.error(error)
  }
}

const fetchRkaData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/users`
    )
    allUserData.value = response.data.data
    allUserData.value.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    loading.value = false
  } catch (error) {
    console.error(error)
  }
}

const formatDateTable = date => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${day}-${month}-${year}`
}
</script>
