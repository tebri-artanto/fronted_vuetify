 <template>
  <div v-if="artikel">
    <StructureSection
      :title="artikel?.title"
      :imageUrl="artikel?.imageUrl"
      :breadcrumbItems="artikel?.breadcrumbItems"
    >
      <div v-html="artikel?.content"></div>
    </StructureSection>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import StructureSection from '../../components/StructureSection.vue';
import {  onMounted } from 'vue';
import { useSanityFetcher } from 'vue-sanity'

onMounted(async () => {

});

const currentURL = window.location.href;
const pathname = new URL(currentURL).pathname;
const segments = pathname.split('/');
const slug = segments[segments.length - 1];
console.log(slug);
const { data: artikel } = slug
  ? useSanityFetcher(() => `*[_type == "artikel" && slug.current == "${slug}"][0]`, { slug })
  : { data: null };

</script>
