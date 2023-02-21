<script>
  import About from "../components/About.vue"

  export default {
    components: {
      About,
    },
    data() {
      return {
        emailProvided: false,
      }
    },
    methods: {
      signUp() {
        this.emailProvided = true
      },
    },
  }
</script>

<style>
  section:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: 1s ease;
  }
</style>

<template>
  <main class="flex flex-col items-center my-12 max-w-6xl mx-auto">
    <About>
      <section
        class="border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white"
      >
        <div class="">
          <h2 class="text-2xl font-bold">About us</h2>
          <p class="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            perferendis harum voluptatum consequatur nesciunt eligendi nobis
            repellat, maxime aspernatur molestias dolore dolorem tempora ipsam
            laboriosam odio totam eveniet assumenda enim!
          </p>
          <p class="justify-end">Learn more >>></p>
        </div>
        <form class="flex flex-col">
          <label for="newsletter">Sign up to get the latest news:</label>
          <input
            class="w-72 mt-4"
            type="email"
            name="newsletter"
            placeholder="your@email.here"
          />
          <input
            class="w-24 mt-4 bg-indigo-500 hover:bg-indigo-700"
            type="button"
            value="Sign up"
            @click="signUp"
          />
        </form>
        <p v-if="emailProvided">Thank you!</p>
        <p v-else>Please provide a valid e-mail</p>
      </section>
    </About>

    <About>
      <section
        class="flex flex-row-reverse border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white"
      >
        <div class="w-1/2 order-first">
          <h2 class="text-2xl font-bold ml-4">Find us</h2>
          <p class="mt-4 ml-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            praesentium exercitationem quam eaque quae ullam neque earum
            asperiores labore illum dicta voluptatem temporibus sunt nemo hic
            ab, distinctio nihil cumque.
          </p>
        </div>
        <div class="w-1/2">
          <img
            class="object-cover h-full"
            src="../../assets/find-us.jpg"
            alt="Our History"
          />
        </div>
      </section>
    </About>

    <About>
      <section
        class="flex flex-row border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white"
      >
        <div class="w-1/2 order-first">
          <h2 class="text-2xl font-bold">Our History</h2>
          <p class="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            praesentium exercitationem quam eaque quae ullam neque earum
            asperiores labore illum dicta voluptatem temporibus sunt nemo hic
            ab, distinctio nihil cumque.
          </p>
        </div>
        <div class="w-1/2">
          <img
            class="object-cover h-full"
            src="../../assets/history.jpg"
            alt="Our History"
          />
        </div>
      </section>
    </About>

    <About>
      <section
        class="flex flex-row border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white"
      >
        <div class="w-1/2 order-first">
          <h2 class="text-2xl font-bold ml-4">Career</h2>
          <p class="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, et
            quas quasi eaque ducimus labore adipisci optio perferendis
            reiciendis at omnis a!
          </p>
          <p class="mt-8">
            <RouterLink class="text-2xl font-bold mt-4" to="/career"
              >Meet the crew >>></RouterLink
            >
          </p>
        </div>
        <div class="w-1/2">
          <img src="../../assets/career-options.png" alt="Working at company" />
        </div>
      </section>
    </About>
    <About>
      <section
        class="flex flex-row-reverse border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white"
      >
        <div class="w-1/2 order-first">
          <h2 class="text-2xl font-bold ml-4">Sustainability</h2>
          <p class="mt-4 ml-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            numquam, quidem eos alias fugit rem placeat eius officiis error
            debitis repellendus blanditiis architecto, repudiandae labore
            perspiciatis. Fugiat distinctio aliquam harum.
          </p>
        </div>
        <div class="w-1/2">
          <img
            class="object-cover h-full"
            src="../../assets/sustainability-resources.jpg"
            alt="Sustainability"
          />
        </div>
      </section>
    </About>
    <About>
      <section
        class="border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white"
      >
        <h2 class="text-2xl font-bold ml-4">Contact</h2>
        <p class="my-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <img src="../../assets/contact-us.jpg" alt="Contact" />
      </section>
    </About>
  </main>
</template>
