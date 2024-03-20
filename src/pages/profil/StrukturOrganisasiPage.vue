<template>
  <StructureSection
    title="Struktur Organisasi Diskominfo Kabupaten Klaten"
    imageUrl="https://diskominfo.klaten.go.id/uploads/images/image_750x415_649903ea726f2.jpg"
    :breadcrumbItems="breadcrumbItems"
  >
  </StructureSection>
</template>

<script setup>
import StructureSection from '../../components/StructureSection.vue'

const breadcrumbItems = [
  { label: 'Home', url: '/' },
  { label: 'StrukturOrgananisasi', url: '/strukturOrgansisasi' },
];
</script>
