<template>
  <div class="flex justify-between p-2 mt-4">
    <button class="btn btn-invert" @click="isOpen = !isOpen">Filter</button>
    <button class="btn btn-invert">Sort By</button>
  </div>

  <transition
    enter-from-class="translate-x-[-100%] opacity-0"
    leave-to-class="translate-x-[-100%] opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
  >
    <div
      class="select-none md:flex-col absolute top-16 left-0 h-screen bg-neutral-50 px-10"
      v-if="isOpen"
    >
      <div class="flex flex-col justify-between mt-8 h-[88vh]">
        <div>
          <h2
            class="text-xl block mb-2 font-semibold text-gray-800 py-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Categories
          </h2>
          <div
            v-for="(value, key) in categories"
            :key="key"
            @click="setFilterCategories(key)"
            :class="value ? 'font-bold' : 'font-regular'"
          >
            {{ key }}
          </div>
          <h2
            class="text-xl block mb-2 font-semibold text-gray-800 py-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Size
          </h2>
          <div
            v-for="(valueSize, keySize) in size"
            :key="keySize"
            @click="setFilterSize(keySize)"
            :class="valueSize ? 'font-bold' : 'font-regular'"
          >
            {{ keySize }}
          </div>
          <h2
            class="text-xl block mb-2 font-semibold text-gray-800 py-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Color
          </h2>
          <div class="grid grid-cols-6">
            <div v-for="(value, key) in color" :key="key">
              <div
                class="rounded-full border border-gray-200 w-4 h-4 m-1"
                :style="{ backgroundColor: key }"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            class="btn btn-invert"
            @click="resetFilter, (isOpen = !isOpen)"
          >
            Reset Filter
          </button>
          <button class="btn btn-invert" @click="isOpen = !isOpen">
            Save Filter
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SortFilter',
    data() {
      return {
        isOpen: false,
        columns: null,
        categories: this.$store.state.products.categories,
        color: this.$store.state.products.color,
        size: this.$store.state.products.size,
        hej: false,
        White: '#FFFFFF',
        Gray: '#713f12',
        Black: '#52525b',
        Brown: '#27272a',
        Green: '#000000',
        Red: '#',
        Yellow: '#',
        Blue: '#',
        filterCategories: this.$store.state.products.categories,
        filterSize: this.$store.state.products.size,
        filterColor: this.$store.state.products.color,
      }
    },
    props: {
      toggle: {
        required: true,
        type: [Function, Boolean],
      },
    },
    emits: ['reset'],
    computed: {
      products() {
        return this.$store.state.products.productList
      },
      productCategories() {
        return [...new Set(this.products.map(({ category }) => category))]
      },
      productSize() {
        return [...new Set(this.products.map(({ size }) => size))]
      },
    },
    watch: {
      isOpen() {
        if (this.isOpen) {
          document.documentElement.style.overflow = 'hidden'
          return
        } else {
          document.documentElement.style.overflow = 'auto'
        }
      },
      toggle() {
        if (this.isOpen) {
          this.isOpen = false
        }
      },
      $route() {
        this.isOpen = false
      },
      filtersCategories() {
        this.setFilterCategories()
      },
      filtersSize() {
        this.setFilterSize()
      },
    },

    methods: {
      testing() {
        console.log(this.$store.state.products.categories)
      },
      setFilterCategories(x) {
        this.$store.commit('products/setFilterCategories', x)
      },
      setFilterSize(x) {
        this.$store.commit('products/setFilterSize', x)
      },

      resetFilter() {
        this.$emit('reset')
      },

      /*  async getColumns() {
        const response = await fetch(
          'http://SITsApi.us-east-1.elasticbeanstalk.com/products/columns',
        )
        const result = await response.json()
        this.columns = await result.data
        for (let index = 0; index < this.columns.length; index++) {
          const element = this.columns[index]
          if (element.Field === 'category2') {
            let test = element.Type
            this.categories = test.slice(4, -1).replaceAll("'", '').split(',')
          }
          if (element.Field === 'color') {
            let test = element.Type
            this.color = test.slice(4, -1).replaceAll("'", '').split(',')
          }
          if (element.Field === 'size') {
            let test = element.Type
            this.size = test.slice(4, -1).replaceAll("'", '').split(',')
          }
        }
      },*/
    },
  }
</script>

<style scoped>
  .btn-invert {
    background-color: rgb(255, 255, 255);
    color: black;
  }
  .btn-invert:hover {
    background-color: #ebebeb;
  }
</style>
