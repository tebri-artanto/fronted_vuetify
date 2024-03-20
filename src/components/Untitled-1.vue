<template>

    <!-- <fwb-navbar>
      <template #logo>
        <fwb-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
          Flowbite
        </fwb-navbar-logo>
      </template>
      <template #default="{isShowMenu}">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link is-active link="#">
            Home
          </fwb-navbar-link>
          <fwb-navbar-link link="#">
            Services
          </fwb-navbar-link>
          <fwb-navbar-link link="#">
            Pricing
          </fwb-navbar-link>
          <fwb-navbar-link link="#">
            Contact
          </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
      <template #right-side>
        <fwb-button>
          Get started
        </fwb-button>
      </template>
    </fwb-navbar> -->

    <!-- <div class="bg-gray-900 py-1 text-white md:flex items-center justify-between px-4" >
      <div class="logo flex items-center cursor-pointer">
        <h1 class="text-2xl font-semibold ml-3">Application Bar</h1>
      </div>
      <span class="text-white absolute right-6 top-1 cursor-pointer text-2xl md:hidden" @click="menuOpen">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
      </span>
      <ul class="md:flex gap-5 items-center absolute md:static bg-gray-900 md:w-auto w-full md:pb-0 md:px-0 px-6 top-10 duration-500 "
        :class="[open ? 'left-0' : 'left-[-100%]']">
            <li v-for="tag in tags" :key="tag.name" class="my-6 md:my-0 text-xl hover:text-green-400 duration-500">
            <a :href="tag.path">{{ tag.name }}</a>

          </li>


        </ul>
      </div>



<t-dropdown
  tag-name="nav"
  :classes="{}"
  :fixed-classes="{}"
  class="bg-blue-800"
>
  <div

    class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
  >
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex items-center mr-2 -ml-2 sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 text-blue-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
            aria-label="Main menu"
            aria-expanded="false"
            @mousedown="mousedownHandler"
            @blur="blurHandler"
            @keydown="keydownHandler"
          >
            <svg
              :class="{ 'hidden': isShown, 'block': !isShown}"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              :class="{ 'hidden': !isShown, 'block': isShown}"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex items-center flex-shrink-0 text-white">
          MYAPP
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          <a href="#" class="px-3 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-900 rounded-md focus:outline-none focus:text-white focus:bg-blue-700">Users</a>
          <a href="#" class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Companies</a>
          <a href="#" class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Settings</a>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden">
    <div class="px-2 pt-2 pb-3 sm:px-3">
      <a href="#" class="block px-3 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-blue-900 rounded-md focus:outline-none focus:text-white focus:bg-blue-700">Users</a>
      <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Companies</a>
      <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700">Settings</a>
    </div>
  </div>
</t-dropdown> -->

<Menubar :model="items">
    <template #start>
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." class="fill-primary-500 dark:fill-primary-400" />
            <path d="..." class="fill-surface-700 dark:fill-surface-0/80" />
        </svg>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
            <span v-if="item.shortcut" class="ml-auto border border-surface-200 dark:border-surface-500 rounded-md bg-surface-100 dark:bg-surface-800 text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" :class="['pi pi-angle-down text-primary-500 dark:text-primary-400-500 dark:text-primary-400', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </a>
    </template>
    <template #end>
        <div class="flex items-center gap-2">
            <InputText placeholder="Search" type="text" class="w-[8rem] sm:w-auto" />
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
        </div>
    </template>
</Menubar>
      <!-- <div>

    <v-app>
      <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application Bar</v-toolbar-title>
        <v-spacer></v-spacer>
        </v-app-bar>
        </v-app>
        <router-view></router-view>
  </div> -->
</template>

<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar';

const open = ref(false)
const tags = [
  {name: 'Home', path: '/'},
  {name: 'About', path: '/about'},
  {name: 'Contact', path: '/contact'},
  {name: 'Services', path: '/services'},
  {name: 'Portfolio', path: '/portfolio'},
]

const menuOpen = () => {
  open.value = !open.value
}
</script>

<style scoped>
/* Your component styles here */
</style>


<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
  <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form class="space-y-6" @submit="onSubmit">
      <div>
        <label
          for="email"
          class="block text-sm font-medium text-gray-700"
        >
          Email address for good
        </label>
        <div class="mt-1">
          <input
            id="email"
            v-bind="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <p class="my-2 text-red-800">
          {{ errors.email }}
        </p>
      </div>

      <div>
        <label
          for="password"
          class="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div class="mt-1">
          <input
            id="password"
            v-bind="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <p class="my-2 text-red-800">
          {{ errors.password }}
        </p>
      </div>

      <div>
        <Button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign in
        </Button>
      </div>

      <div>
        <p class="mt-2 text-center text-sm text-gray-600">
          Don't have an account?
          <router-link
            to="/register"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Register
          </router-link>
        </p>
      </div>
    </form>
  </div>
</div>
