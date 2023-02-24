<script>
  import About from "../components/About.vue"
  import NewsLetter from "../components/NewsLetter.vue"
  import ContactInfo from "../components/ContactInfo.vue"

  export default {
    components: {
      About,
      NewsLetter,
      ContactInfo,
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
    <NewsLetter :title="'About Us'">
      <p>
        Find us Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident necessitatibus omnis deserunt, vero nostrum velit sapiente
        quod repellat! Commodi tempore eius ea sint! Quibusdam at sapiente
        maxime assumenda. Quia, sint.
      </p>
    </NewsLetter>

    <About
      :title="'Find Us'"
      :source="'../../assets/about-img/find-us.jpg'"
      :description="'Find Us'"
      :reverse="'flex border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white'"
    >
      <p>
        Find us Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident necessitatibus omnis deserunt, vero nostrum velit sapiente
        quod repellat! Commodi tempore eius ea sint! Quibusdam at sapiente
        maxime assumenda. Quia, sint.
      </p>
    </About>

    <About
      :title="'Our History'"
      :source="'../../assets/about-img/history.jpg'"
      :description="'Our History'"
    >
      <p>
        History - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident necessitatibus omnis deserunt, vero nostrum velit sapiente
        quod repellat! Commodi tempore eius ea sint! Quibusdam at sapiente
        maxime assumenda. Quia, sint.
      </p>
    </About>

    <About
      :title="'Career'"
      :source="'../../assets/about-img/career-options.png'"
      :description="'Work with us'"
      :reverse="'flex border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white'"
    >
      <p>
        Career - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident necessitatibus omnis deserunt, vero nostrum velit sapiente
        quod repellat! Commodi tempore eius ea sint! Quibusdam at sapiente
        maxime assumenda. Quia, sint.
      </p>
    </About>

    <About
      :title="'Sustainability'"
      :source="'../../assets/about-img/sustainability-resources.jpg'"
      :description="'A Sustainable workplace'"
    >
      <p class="mt-4">
        As a sustainable web shop, our company strives to reduce our
        environmental impact while also providing high-quality products and
        services to our customers. We believe that sustainability is not just an
        important goal, but also an essential part of our business strategy.
      </p>
      <p class="mt-4">
        To achieve our sustainability goals, we focus on several key areas.
        First, we source our products from suppliers who meet strict
        environmental and social responsibility criteria. This means that our
        products are made using sustainable materials, and that the workers who
        produce them are treated fairly and paid a living wage.
      </p>
      <p class="mt-4">
        Second, we use eco-friendly packaging materials wherever possible. This
        includes biodegradable or compostable packaging, as well as recycled
        materials. By minimizing waste and using sustainable packaging, we aim
        to reduce our impact on the environment.
      </p>
      <p class="mt-4">
        Third, we prioritize energy efficiency in our operations. We use
        renewable energy sources whenever possible, and we work to reduce our
        overall energy consumption through measures like energy-efficient
        lighting and equipment.
      </p>
      <p class="mt-4">
        Finally, we strive to educate our customers about sustainability and
        encourage them to make environmentally conscious choices. This includes
        providing information about our products and their environmental impact,
        as well as offering tips and resources for living a more sustainable
        lifestyle.
      </p>
      <p class="mt-4">
        Overall, our sustainability work is a key part of our commitment to
        creating a better future for ourselves, our customers, and the planet.
        We believe that by prioritizing sustainability in our operations, we can
        make a meaningful contribution to a more sustainable and equitable
        world.
      </p>
      <!-- TO-DO - Skapa funktion för att dölja/Visa mer -->
    </About>
    <ContactInfo
      :title="'Contact'"
      :source="'../../assets/about-img/contact-us.jpg'"
      :description="'Contact Us here'"
    >
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </ContactInfo>
  </main>
</template>
