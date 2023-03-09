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
            v-for="(value, key, index) in categories"
            :key="key"
            @click="trueFalse(value, key, index, categories)"
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
            v-for="(value, key, index) in size"
            :key="key"
            @click="trueFalse(value, key, index, size)"
            :class="value ? 'font-bold' : 'font-regular'"
          >
            {{ key }}
          </div>
          <h2
            class="text-xl block mb-2 font-semibold text-gray-800 py-3 hover:bg-gray-200 rounded cursor-pointer"
          >
            Color
          </h2>
          <div class="grid grid-cols-6">
            <div
              v-for="(value, key) in color"
              :key="key"
              @click="trueFalse(value, key, color)"
            >
              <div
                class="rounded-full border border-gray-200 w-4 h-4 m-1"
                :style="{ backgroundColor: key }"
              />
            </div>
          </div>
        </div>
        <div>
          <button class="btn btn-invert" @click="resetFilter">
            Reset Filter
          </button>
          <button class="btn btn-invert" @click="updateCategories">
            updateCategories
          </button>
          <button class="btn btn-invert" @click="updateSizes">
            updateSizes
          </button>
          <button class="btn btn-invert" @click="updateColors">
            updateColors
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

        categories: null,
        color: null,
        size: null,

        White: '#FFFFFF',
        Gray: '#713f12',
        Black: '#52525b',
        Brown: '#27272a',
        Green: '#000000',
        Red: '#',
        Yellow: '#',
        Blue: '#',
      }
    },
    created() {
      this.getColumns()
    },
    props: {
      toggle: {
        required: true,
        type: [Function, Boolean],
      },
    },
    emits: ['reset', 'categories', 'sizes', 'colors'],
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
    },

    methods: {
      async getColumns() {
        const response = await fetch(
          'http://SITsApi.us-east-1.elasticbeanstalk.com/products/columns',
        )
        const result = await response.json()
        const columns = await result.data
        for (let index = 0; index < columns.length; index++) {
          const element = columns[index]
          if (element.Field === 'category2') {
            let test = element.Type
            let categories = test
              .slice(4, -1)
              .replaceAll("'", '')
              .split(',')
              .reduce((acc, curr) => ((acc[curr] = false), acc), {})
            this.categories = categories
          }
          if (element.Field === 'color') {
            let test = element.Type
            let color = test
              .slice(4, -1)
              .replaceAll("'", '')
              .split(',')
              .reduce((acc, curr) => ((acc[curr] = false), acc), {})
            this.color = color
          }
          if (element.Field === 'size') {
            let test = element.Type
            let size = test
              .slice(4, -1)
              .replaceAll("'", '')
              .split(',')
              .reduce((acc, curr) => ((acc[curr] = false), acc), {})
            this.size = size
          }
        }
      },

      trueFalse(value, key, index, object) {
        object[key] = !value
        console.log(this.categories, this.size, this.color)
      },
      resetFilter() {
        for (const [key] of Object.entries(this.categories)) {
          this.categories[key] = false
        }
        for (const [key] of Object.entries(this.size)) {
          this.size[key] = false
        }
        for (const [key] of Object.entries(this.color)) {
          this.color[key] = false
        }
        this.$emit('reset')
      },

      updateCategories() {
        this.$emit('categories', this.categories)
      },
      updateSizes() {
        this.$emit('sizes', this.size)
      },
      updateColors() {
        this.$emit('colors', this.color)
      },
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
