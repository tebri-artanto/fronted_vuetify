<template>
  <v-app style="background-color: #f2f2f2;">
    <router-view />
  </v-app>
</template>

<script>

import { useSanityClient } from 'vue-sanity'

export default {
  name: 'App',
  setup() {
    useSanityClient({
      projectId: 'idk7ucjw',
      dataset: 'production',
      useCdn: 'false',
      apiVersion: '2024-03-21',
    })
  },
}


</script>
