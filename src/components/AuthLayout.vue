<template>
  <div>
    <v-app-bar :elevation="2">
      <v-app-bar-title class="pl-5">
        <v-btn class="text-h5 font-weight-bold" style="color: white; background-color: #3F51B5; padding: 5px 10px;"
          @click="movePage('/')">
          <span>Grand Atma Hotel</span>
        </v-btn>
      </v-app-bar-title>
      <div class="pr-6">
        <v-btn class="text-h6 mx-2" variant="tonal" color="indigo" size="large" @click="movePage('/login')">Login</v-btn>
        <v-btn class="text-h6" color="indigo" variant="flat" size="large" @click="movePage('/register')">Register</v-btn>
      </div>
    </v-app-bar>
    <router-view></router-view>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
  font-family: 'Inter', sans-serif;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import router from '@/router';

const lang = ref(0)
const lng = ref(0)
const map = ref()
const mapContainer = ref()

onMounted(() => {
  // get User Location
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lang.value = position.coords.latitude
      lng.value = position.coords.longitude
    })
  }

  map.value = L.map(mapContainer.value).setView([-7.7879118, 110.3667021], 15)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map.value);

  const locationMarker = L.marker([-7.7879118, 110.3667021]).addTo(map.value);
  locationMarker.bindPopup('Grand Atma Hotel').openPopup()
})

const movePage = path => {
  router.push(path)
}

</script>
