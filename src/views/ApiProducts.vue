<script>
  import EditProducts from '../components/EditProducts.vue'
  import GetJournal from '../components/GetJournal.vue'
  import JournalApi from '../components/JournalApi.vue'

  export default {
    created() {},
    components: {
      EditProducts,
      JournalApi,
      GetJournal,
    },
  }
</script>

<template>
  <GetJournal />
  <EditProducts />
  <JournalApi />
</template>
