<template>
  <p>
    Selected size
    <span class="font-semibold">{{ product.size[0] }}</span>
  </p>

  <ul>
    <li :key="size" v-for="size in product.size">
      <button @click="$emit('changeSize', size)">{{ size }}</button>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      // selectedSize: this.$store.state,
    },
    data() {
      return {
        selected: null,
      }
    },
    emits: ['changeSize'],
    mounted() {
      this.selected = this.sizes[0]
    },
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped></style>
