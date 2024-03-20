<template>
  <div>
  <Card>
    <template #title>
      <h2 class="mt-1 text-left text-xl font-extrabold">Tambah Aktivitas</h2>
    </template>
    <template #content>
      <div class="card flex justify-center">
        <Toast />
      </div>
      <Toast />
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <form class="space-y-2" @submit="tambahActivity">
            <div>
              <label for="activity" class="block text-sm font-medium">
                Aktivitas / Kegiatan
              </label>
              <div class="mt-1 flex w-full">
                <Textarea
                  v-model="activity"
                  id="activity"
                  v-bind="activity"
                  name="activity"
                  placeholder="Enter activity"
                  autoResize
                  rows="3"
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
                <Calendar v-model="date" v-bind="date" showButtonBar />
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
                type="close"
                class="w-70 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
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
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'
import { useForm } from 'vee-validate'
import Card from 'primevue/card'
import { useToast } from 'primevue/usetoast'
import Toast from 'primevue/toast'
import router from '../router/index'
import Calendar from 'primevue/calendar'
import axios from 'axios'
import Textarea from 'primevue/textarea'


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
const img = ref()
const toast = useToast()
const file = ref(null)
const handleFileUpload = event => {
 file.value = event.target.files[0];
}
// Define fields
const activity = defineInputBinds('activity')
const Adate = defineInputBinds('date')
const fileInput = defineInputBinds('fileInput')



const tambahActivity = async () => {
  try {
    const formData = new FormData()
    formData.append('activity', activity.value.value)
    formData.append('date', formatDate(date.value))
    formData.append('file', file.value);
    event.preventDefault()
    const response = await axios.post(
      'http://localhost:8000/activities/upload',
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
    event.preventDefault()
    // Redirect to another page
    router.push('/home')
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

  // Get time components
  const hours = String(inputDate.getHours()).padStart(2, '0')
  const minutes = String(inputDate.getMinutes()).padStart(2, '0')
  const seconds = String(inputDate.getSeconds()).padStart(2, '0')
  const milliseconds = String(inputDate.getMilliseconds()).padStart(3, '0')

  // Get timezone offset
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

<!-- <template>
  <div>
    <h1>File Upload</h1>
    <input type="file" @change="onFileChange">
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const file = ref(null);

const uploadFile = async () => {
  try {
    const formData = new FormData();
    formData.append('file', file.value);


    await axios.post('http://localhost:8000/activities/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('File uploaded successfully');
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

const onFileChange = (event) => {
  file.value = event.target.files[0];
};

</script>

<style>
/* Add your styles here */
</style> -->
