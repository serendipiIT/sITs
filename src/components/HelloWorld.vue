<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<style>
  p {
    font-weight: bold;
  }
</style>

<template>
  <img alt="" src="/assets/GAIS_logo.jpeg" />
  <p>{{ msg }}</p>
</template>
