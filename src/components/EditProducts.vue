<script>
  import axios from "axios"

  export default {
    created() {
      this.getAxios()
    },
    data() {
      return {
        products: null,
        title: null,
        price: null,
        id: null,
      }
    },
    methods: {
      getAxios() {
        axios({
          method: "get",
          url: `http://localhost:3000/products`,
          /*           headers: {
            Authorization: ``
          } */
        })
          .then((response) => {
            console.log(response.data.data)
            this.products = response.data.data
          })
          .catch((error) => {
            console.log(error)
          })
      },
      async postAxios() {
        await axios({
          method: "post",
          url: "http://localhost:3000/products",
          data: {
            title: `"${this.title}"`,
            price: this.price,
          },
        })
        console.log("post")
        this.getAxios()
      },
      async delAxios() {
        await axios({
          method: "delete",
          url: `http://localhost:3000/products/${this.id}`,
        })
        console.log("delete")
        this.getAxios()
      },
    },
  }
</script>

<template>
  <h1>Products</h1>

  <h2>Add new product</h2>
  <input type="text" v-model="title" placeholder="title" />
  <input type="number" v-model="price" placeholder="price" />
  <input type="submit" @click="postAxios" value="Add product" />

  <h2>Remove product</h2>

  <input type="number" v-model="id" placeholder="id" />
  <input type="submit" @click="delAxios" value="Remove product" />

  <h2>All products</h2>

  <table style="width: 70%; text-align: center">
    <th>id</th>
    <th>title</th>
    <th>price</th>
    <th>description</th>
    <th>category</th>
    <th>image</th>

    <tr :key="product.id" v-for="product in products">
      <td style="width: 5%">{{ product.id }}</td>
      <td style="width: 25%">{{ product.title }}</td>
      <td style="width: 5%">{{ product.price }}</td>
      <td style="width: 25%">{{ product.description }}</td>
      <td style="width: 15%">{{ product.category }}</td>
      <td style="width: 15%">
        <img :src="product.image" style="max-width: 200px" />
      </td>
    </tr>
  </table>
</template>
