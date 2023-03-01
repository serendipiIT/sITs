<script>
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { BiInstagram, BiGithub, HiMail, BiLinkedin } from 'oh-vue-icons/icons'
  addIcons(BiInstagram, BiGithub, HiMail, BiLinkedin)
  export default {
    components: {
      'v-icon': OhVueIcon,
    },
    data() {
      return {}
    },
    props: {
      msg: {
        default: 'Hejsan!',
        type: String,
      },
    },
  }
</script>

<style></style>

<template>
  <footer class="flex justify-around bg-slate-300 pt-4 pb-4 font-semibold">
    <ul class="text-cente">
      <li class="hover:text-sky-700 cursor-pointer mb-2">
        <a href="https://instagram.com/" target="_blank">
          <v-icon name="bi-instagram" scale="1.4"
        /></a>
      </li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">
        <a href="https://github.com/serendipiIT" target="_blank" rel="noopener">
          <v-icon name="bi-github" scale="1.4" />
        </a>
      </li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">
        <a href="mailto:example@example.com" target="_blank">
          <v-icon name="hi-mail" scale="1.4"
        /></a>
      </li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">
        <a href="https://linkedin.com/" target="_blank" rel="noopener">
          <v-icon name="bi-linkedin" scale="1.4" />
        </a>
      </li>
    </ul>
    <ul class="text-center">
      <li class="hover:text-sky-700 cursor-pointer mb-2">About Us</li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">Career</li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">Our History</li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">Sustainability</li>
    </ul>
    <p class="font-light flex items-end">
      &copy; 2023 serendipIT, Inc. All rights reserved
    </p>
  </footer>
</template>
