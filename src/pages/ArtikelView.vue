<template>
  <div v-if="artikel">
    <h1>{{ artikel.title }}</h1>
    <div v-html="artikel.content"></div>
    <img :src="artikel.imageUrl" :alt="artikel.title" />
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSanityClient } from 'vue-sanity'
import { useRoute } from 'vue-router'


const client = useSanityClient({
  projectId: 'idk7ucjw',
  dataset: 'production',
  useCdn: true,
})

const artikel = ref(null)
const route = useRoute()

onMounted(async () => {
  try {
    const artikelData = await client.fetch(`*[_type == "artikel" && slug.current == $slug][0]`, { slug: route.params.slug })
    artikel.value = artikelData
  } catch (error) {
    console.error('Error fetching artikel:', error)
  }
})
</script>
