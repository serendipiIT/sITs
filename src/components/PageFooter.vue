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
  <footer
    class="flex flex-col justify-evenly items-center bg-[#262626] pt-4 pb-4 font-semibold text-neutral-300 gap-4"
  >
    <ul class="text-center flex flex-row gap-x-6 basis-1/5">
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
    <ul class="text-center flex flex-row gap-x-6 basis-1/5">
      <li class="hover:text-sky-700 cursor-pointer mb-2">About Us</li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">Career</li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">Our History</li>
      <li class="hover:text-sky-700 cursor-pointer mb-2">Sustainability</li>
    </ul>
    <p class="font-light flex items-end basis-1/5">
      &copy; 2023 serendipIT, Inc. All rights reserved
    </p>
  </footer>
</template>
