<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        journals: null,
        urlApi: 'http://SITsApi.us-east-1.elasticbeanstalk.com/',
      }
    },
    mounted() {
      this.getJournal()
    },
    methods: {
      async getJournal() {
        if (this.$store.state.journal.journal?.length === 0) {
          const response = await axios({
            method: 'get',
            url: `${this.urlApi}journal`,
          })
          this.$store.commit('journal/updateJournal', response.data.data)
        }
      },
    },
  }
</script>

<template>
  <div class="hidden">...</div>
</template>

<style lang="scss" scoped></style>
