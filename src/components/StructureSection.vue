<template>
  <template>
    <div :class="containerClasses">
      <h1 :class="titleClasses">{{ title }}</h1>
      <div class="prose">
        <Image v-if="imageUrl" :src="imageUrl" alt="Article Image" width="100%" height="100%" />
        <slot></slot>
      </div>
    </div>
  </template>

  <script setup>
  import Image from 'primevue/image';
  import { ref, computed } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  });

  const containerClasses = computed(() => ['px-14', 'mx-20', 'pt-10s', 'mt-5']);
  const titleClasses = computed(() => ['text-3xl', 'font-bold', 'mb-4']);
  </script>

  <style>
  /* Add your styles here */
  </style>
    <Breadcrumb :home="home" :model="breadcrumbItems">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']"></span>
            <span class="text-primary-500 dark:text-primary-400 font-semibold">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0/80">{{ item.label }}</span>
        </a>
      </template>
    </Breadcrumb>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>
      <div class="prose">
        <Image v-if="imageUrl" :src="imageUrl" alt="Article Image" width="100%" height="100%" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from 'primevue/breadcrumb';
import Image from 'primevue/image';
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: '',
  },
  breadcrumbItems: {
    type: Array,
    required: true,
  },
});

const home = {
  icon: 'pi pi-home',
  to: '/',
};

const containerClasses = computed(() => ['px-14', 'mx-20', 'pt-10s', 'mt-5']);
  const titleClasses = computed(() => ['text-3xl', 'font-bold', 'mb-4']);
</script>

<style>
/* Add your styles here */
</style>
