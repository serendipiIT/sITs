<template>
  <div />
</template>

<script>
  export default {
    name: 'GetAbout',
    data() {
      return {
        urlApi: 'http://SITsApi.us-east-1.elasticbeanstalk.com/',
      }
    },
    methods: {
      async getAboutContent() {
        const response = await fetch(`${this.urlApi}pages`)
        const data = await response.json()
        console.log(data)
      },
    },
    created() {
      this.getAboutContent()
    },
  }
</script>

<style lang="scss" scoped></style>
