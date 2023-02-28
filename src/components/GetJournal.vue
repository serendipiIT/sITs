<template />

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        journals: null,
        urlApi: 'http://SITsApi.us-east-1.elasticbeanstalk.com/',
      }
    },
    created() {
      this.getJournal()
    },
    methods: {
      async getJournal() {
        console.log('kör get Journal')
        if (JSON.parse(localStorage.getItem('vuex')).journal.journal === null) {
          await axios({
            method: 'get',
            url: `${this.urlApi}journal`,
          })
            .then((response) => {
              this.journals = response.data.data
              this.$store.commit('journal/updateJournal', response.data.data)
              console.log(this.$store.state.journal.journal)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      },
    },
  }
</script>

<style lang="scss" scoped></style>
