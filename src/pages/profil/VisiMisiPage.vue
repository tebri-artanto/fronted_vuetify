<template>
  <StructureSection
    title="Visi dan Misi Kabupaten Klaten"
    :breadcrumbItems="breadcrumbItems"
  >
    <p>
      <strong>VISI</strong><br />
      "TERWUJUDNYA KABUPATEN KLATEN YANG MAJU, MANDIRI DAN SEJAHTERA"
    </p>
    <p>
      <strong>MISI</strong>
    </p>
    <ol>
      <li>
        Mewujudkan tatanan Kehidupan Masyarakat yang Berakhlak dan Berkepribadian;
      </li>
      <li>
        Mewujudkan Tata Kelola Pemerintahan yang baik, profesional, jujur, bersih,
        transparan, bertanggungjawab, dan anti korupsi;
      </li>
      <li>
        Meningkatkan kemandirian ekonomi daerah berbasis sektor unggulan daerah
        berdasarkan ekonomi kerakyatan;
      </li>
      <li>
        Mewujudkan pemerataan sarana prasarana wilayah yang berkualitas sesuai
        rencana tata ruang wilayah;
      </li>
      <li>
        Mewujudkan kualitas sumber daya manusia yang cerdas, sehat, berbudaya, dan
        responsif gender;
      </li>
      <li>
        Mewujudkan kualitas pengelolaan lingkungan hidup yang berkelanjutan.
      </li>
    </ol>
  </StructureSection>
</template>

<script setup>
import StructureSection from '../../components/StructureSection.vue';

const breadcrumbItems = [
  { label: 'Home', url: '/' },
  { label: 'Visi &Misi', url: '/visimisi' },
]
</script>
