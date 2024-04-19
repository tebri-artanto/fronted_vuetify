/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

// window.HSStaticMethods = {};

const routes = [
  {
    path: '/',
    component: () => import('@/components/LandingLayout.vue'),

    children: [
      {
        path: '/',
        component: () => import('@/pages/LandingPage.vue'),
        meta: { title: 'Sekretariat Diskominfo' },
      },
      {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: { title: 'Login' },
      },
      {
        path: '/register',
        component: () => import('../pages/RegisterPage.vue'),
        meta: { title: 'Register' },
      },
      {
        path: '/visimisi',
        component: () => import('@/pages/profil/VisiMisiPage.vue'),
        meta: { title: 'Visi Misi' },
      },
      {
        path: '/strukturOrganisasi',
        component: () => import('@/pages/profil/StrukturOrganisasiPage.vue'),
        meta: { title: 'Struktur Organisasi' },
      },
      {
        path: '/profil/kepalaDinas',
        component: () => import('@/pages/profil/KepalaDinasPage.vue'),
        meta: { title: 'Kepala Dinas' },
      },
      {
        path: '/profil/pejabatStruktural',
        component: () => import('@/pages/profil/PejabatStrukturalPage.vue'),
        meta: { title: 'Pejabat Struktural' },
      },
      {
        path: '/bidang/sekretariat',
        component: () => import('@/pages/Bidang/SekretariatPage.vue'),
        meta: { title: 'Bidang Sekretariat' },
        slug: 'sekretariat',
      },
      {
        path: '/bidang/informatika',
        component: () => import('@/pages/Bidang/InformatikaPage.vue'),
        meta: { title: 'Bidang Informatika' },
        slug: 'informatika',
      },
      {
        path: '/bidang/komunikasi',
        component: () => import('@/pages/Bidang/KomunikasiPage.vue'),
        meta: { title: 'Bidang Komunikasi' },
      }
    ],

  },

  {
    path: '/home',
    component: () => import('@/components/SidebarHome.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/pages/DashboardPage.vue'),
        meta: { title: 'Dashboard Page' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      },
      {
        path: '/home/allActivity',
        component: () => import('@/pages/AllActivityPage.vue'),
        meta: { title: ' Semua Aktivitas' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      },
      {
        path: '/home/activity',
        component: () => import('@/pages/ActivityPage.vue'),
        meta: { title: 'Aktivitas' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      },
      {
        path: '/home/dataKaryawan',
        component: () => import('@/pages/Data/DataKaryawanPage.vue'),
        meta: { title: 'Data Karyawan' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      },
      {
        path: '/home/dpa',
        component: () => import('@/pages/DPAPage.vue'),
        meta: { title: 'DPA' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      },
      {
        path: '/home/rka',
        component: () => import('@/pages/Data/RKAPage.vue'),
        meta: { title: 'RKA' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      },
      {
        path: '/home/kegiatanSekretariat',
        component: () => import('@/pages/Data/KegiatanSekretariatPage.vue'),
        meta: { title: 'Kegiatan Sekretariat' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      },
      {
        path: '/home/dataaset',
        component: () => import('@/pages/Data/DataAsetPage.vue'),
        meta: { title: 'Data Aset' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      },
      {
        path: '/home/dkk',
        component: () => import('@/pages/Data/DKKPage.vue'),
        meta: { title: 'DKK' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }

      },
      {
        path: '/home/dbhcht',
        component: () => import('@/pages/Data/DBHCHTPage.vue'),
        meta: { title: 'DPHCHT' },
        beforeEnter: (to, from, next) => {
          const token = getCookie('token');
          if (token) {
            next();
          } else {
            next('/login');
          }
        }
      }

    ],


  },
]

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.afterEach((to, from, failure) => {
//   // Checking if the route change was successful
//   if (!failure) {
//     // Delaying the execution of window.HSStaticMethods.autoInit() by 100 milliseconds
//     setTimeout(() => {
//       window.HSStaticMethods.autoInit();
//     }, 100);
//   }
// });
router.beforeEach((to, from, next) => {
  if(to.meta.title) {

    document.title = to.meta.title
    next()
  }

  if(to.matched.length === 0) {
    next()
  }
})

export default router
