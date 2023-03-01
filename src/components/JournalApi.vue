<template>
  <h1>journals</h1>

  <button @click="getJournal()">Get journals</button>

  <h2>Add new journal</h2>

  <input type="text" v-model="title" placeholder="title" />

  <input type="text" v-model="subtitle" placeholder="subtitle" />

  <input type="textarea" v-model="content" placeholder="content" />

  <input type="text" v-model="tags" placeholder="tags" />

  <input type="text" v-model="image" placeholder="image url" />
  <button @click="postJournal">Add journal</button>

  <h2>Remove journal</h2>

  <input type="number" v-model="id" placeholder="id" />
  <input type="submit" @click="delJournal" value="Remove journal" />

  <h2>All journals</h2>

  <table style="text-align: center">
    <th>id</th>
    <th>title</th>
    <th>subtitle</th>
    <th>content</th>
    <th>tags</th>
    <th>created at</th>
    <th>image</th>

    <tr v-for="journal in journals" :key="journal.id">
      <td style="width: 5%">{{ journal.id }}</td>
      <td style="width: 25%">{{ journal.title }}</td>
      <td style="width: 25%">{{ journal.subtitle }}</td>
      <td style="width: 15%">{{ journal.content }}</td>
      <td style="width: 15%">{{ journal.tags }}</td>
      <td style="width: 15%">{{ journal.created_at }}</td>
      <td style="width: 15%">
        <img :src="journal.image" style="max-width: 200px" />
      </td>
    </tr>
  </table>
</template>

<script>
  import axios from 'axios'
  export default {
    created() {
      console.log('hejsansverjasfhkjs')
    },
    data() {
      return {
        journals: null,
        title: null,
        subtitle: null,
        id: null,
        content: null,
        tags: null,
        image: null,
        urlApi: 'http://SITsApi.us-east-1.elasticbeanstalk.com/',
      }
    },
    methods: {
      async getJournal() {
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
      },

      async postJournal() {
        await axios({
          method: 'post',
          url: `${this.urlApi}journal`,
          data: {
            title: `"${this.title}"`,
            subtitle: `"${this.subtitle}"`,
            content: `"${this.content}"`,
            image: `"${this.image}"`,
            tags: `"${this.tags}"`,
          },
        })
        console.log('post')
        this.getJournal()
      },
      async delJournal() {
        await axios({
          method: 'delete',
          url: `${this.urlApi}journal/${this.id}`,
        })
        console.log('delete')
        this.getJournal()
      },
    },
  }
</script>

<style lang="scss" scoped></style>
