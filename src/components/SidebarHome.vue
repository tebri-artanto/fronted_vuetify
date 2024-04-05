<template>
  <div class="card">
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
              label="Keluar"
              severity="danger"
              @click="acceptCallback"
            ></Button>
            <Button
              label=""
              outlined
              @click="rejectCallback"
            ></Button>
          </div>
        </div>
      </template>
    </ConfirmDialog>
    <div class="card flex">
      <Sidebar v-model:visible="visible" class="w-10">
        <template #container="{ closeCallback }">
          <div class="flex flex-col h-full w-auto">
            <div class="flex items-center justify-between px-4 pt-4 shrink-0">
              <span class="inline-flex items-center gap-2">
                <a href="/home">
                  <img
                    src="../assets/logo_5edc9be17c880.png"
                    alt="Image"
                    width="200px"
                  />
                </a>
              </span>
              <span>
                <Button
                  type="button"
                  @click="closeCallback"
                  icon="pi pi-times"
                  rounded
                  outlined
                  class="h-8 w-8"
                ></Button>

              </span>
            </div>
            <div class="overflow-y-auto mt-4">
              <ul class="list-none px-4 m-0">
                <li>
                  <ul class="list-none p-0 m-0 overflow-hidden">
                    <li>
                      <a
                        href="/home/activity"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-chart-bar mr-2"></i>
                        <span class="font-medium">Aktivitas</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/dataKaryawan"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-folder mr-2"></i>
                        <span class="font-medium">Data Karyawan</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/dpa"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-folder mr-2"></i>
                        <span class="font-medium">DPA</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/rka"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-folder mr-2"></i>
                        <span class="font-medium">RKA</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/kegiatanSekretariat"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-folder mr-2"></i>
                        <span class="font-medium">Kegiatan Sekretariat</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/dataaset"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-folder mr-2"></i>
                        <span class="font-medium">Data Aset</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/dkk"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-folder mr-2"></i>
                        <span class="font-medium"
                          >Data Kegiatan Kepegawaian</span
                        >
                      </a>
                    </li>
                    <li>
                      <a
                        href="/home/dbhcht"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-folder mr-2"></i>
                        <span class="font-medium">DPHCHT</span>
                      </a>
                    </li>
                    <li>
                      <a
                        @click="requireConfirmation"
                        v-ripple
                        class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors"
                      >
                        <i class="pi pi-cog mr-2"></i>
                        <span class="font-medium">Logout</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </Sidebar>
      <div >
        <Button icon="pi pi-bars" @click="visible = true" />
      </div>

    </div>
    <div class="">
      <router-view></router-view>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import router from '../router/index'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import { useConfirm } from 'primevue/useconfirm'

const visible = ref(false)
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
