<template>
  <div>
    <div class="card">
      <Menubar :model="items">
        <template #start>
          <img src="../assets/logo_5edc9be17c880.png" alt="Image" width="100px" />
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
          <a v-ripple class="mt-0" v-bind="props.action" @click="navigate(item.route)">

            <span class="ml-2">{{ item.label }}</span>

            <span v-if="item.shortcut" class="ml-auto border border-surface-200 dark:border-surface-500 rounded-md bg-surface-100 dark:bg-surface-800 text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" :class="['pi pi-angle-down text-primary-500 dark:text-primary-400-500 dark:text-primary-400', { 'pi-angle-down pl-2': root, 'pi-angle-right ml-auto': !root }]"></i>
          </a>
        </template>
        <template #end>
          <div class="flex items-center gap-2">
            <Button label="Login" href="/login" raised>
              <a href="/login" class="text-white">Login</a>
            </Button>
            <Button label="Register" href="/register" severity="secondary" raised>
              <a href="/register" class="text-white">Register</a>
            </Button>
            <ul class="flex list-none m-0 p-0 gap-2 items-center">
              <li>
                <button
                  type="button"
                  class="inline-flex w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-surface-200 dark:border-surface-600 rounded"
                  @click="onThemeToggler"
                >
                  <i :class="`dark:text-white pi ${iconClass}`" />
                </button>
              </li>
            </ul>

          </div>
        </template>
      </Menubar>
    </div>
    <router-view></router-view>
    <ScrollTop />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import ScrollTop from 'primevue/scrolltop';



const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Profil',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Struktur Organisasi',
        icon: 'pi pi-star',
        route: '/strukturOrganisasi'
      },
      {
        label: 'Profil Kepala Dinas',
        icon: 'pi pi-server',
        route: '/profil/kepalaDinas'
      },
      {
        label: 'Profil Pejabat Struktural',
        icon: 'pi pi-pencil',
        route: '/profil/pejabatStruktural'
      },

    ]

  },
  {
    label: 'Bidang',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Sekretariat',
        icon: 'pi pi-bolt',
        route: '/bidang/sekretariat'
      },
      {
        label: 'Informatika & Persandian',
        icon: 'pi pi-server',
        route: '/bidang/informatika'
      },
      {
        label: 'Komunikadi & Statistik',
        icon: 'pi pi-pencil',
        route: '/bidang/komunikasi'
      },

    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    badge: 3,
    route: '/contact'
  }
]);
</script>

<script>
export default {
  data() {
    return {
      iconClass: 'pi-moon'
    }
  },
  methods: {
    onThemeToggler() {
      const root = document.getElementsByTagName('html')[0];
      root.classList.toggle('dark');
      this.iconClass = this.iconClass === 'pi-moon' ? 'pi-sun' : 'pi-moon';
    },
    navigate(route) {
      this.$router.push(route);
    }
  },
};
</script>

<style>
/* Add your styles here */
</style>
