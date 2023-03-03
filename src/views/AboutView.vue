<script>
  import About from '../components/About.vue'
  import NewsLetter from '../components/NewsLetter.vue'
  import ContactInfo from '../components/ContactInfo.vue'
  import FindUs from '../components/FindUs.vue'
  import GetAbout from '../components/GetAbout.vue'

  export default {
    components: {
      About,
      NewsLetter,
      ContactInfo,
      FindUs,
      GetAbout,
    },
    data() {
      return {
        emailProvided: false,
        urlApi: 'http://SITsApi.us-east-1.elasticbeanstalk.com/',
        history: null,
        find: null,
        carrer: null,
        sustainability: null,
      }
    },
    methods: {
      signUp() {
        this.emailProvided = true
      },
      async getAboutContent() {
        const response = await fetch(`${this.urlApi}pages`)
        const data = await response.json()
        const result = data.data
        console.log('data', data.data)
        this.history = result[0]
        this.find = result[1]
        this.carrer = result[2]
        this.sustainability = result[3]
        console.log(
          this.history.h1,
          this.find,
          this.carrer,
          this.sustainability,
        )
      },
    },
    created() {
      this.getAboutContent()
    },
  }
</script>

<style scoped>
  section:hover {
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
    transition: 1s ease;
  }
</style>

<template>
  <GetAbout />
  <main class="flex flex-col items-center my-12 max-w-6xl mx-auto">
    <NewsLetter :title="'About Us'">
      <p>
        Our newly created web shop was founded in 2023 with a mission to provide
        high-quality products and services to customers around the world. Our
        founders<span class="font-bold"> SerendipIT Solutions </span>recognized
        a need for a more sustainable and socially responsible approach to
        e-commerce, and they set out to create a company that would embody those
        values.
      </p>
    </NewsLetter>

    <FindUs
      :title="'Find Us'"
      :source="'../../assets/about-img/find-us.jpg'"
      :description="'Find our locations'"
      :reverse="'flex border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white'"
    >
      <template #content>
        <p class="ml-4">See our locations and opening hours.</p>
      </template>
      <template #allContent>
        <div class="flex">
          <div class="flex-grow m-4">
            <h2 class="m-2 text-center font-bold">Location1</h2>
            <iframe
              id="mapStore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.3042943332875!2d12.001477534393084!3d57.678788208131394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff369d0835015%3A0xba46082e9c214f49!2sIT-H%C3%B6gskolan!5e0!3m2!1sen!2sse!4v1663318464568!5m2!1sen!2sse"
              width="250"
              height="250"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <table class="my-8">
              <tr class="text-center font-bold">
                Weekdays:
                <td>08:00</td>
                <td class="">-</td>
                <td>20:00</td>
              </tr>
              <tr class="text-center font-bold">
                Weekends:
                <td>08:00</td>
                <td>-</td>
                <td>20:00</td>
              </tr>
            </table>
          </div>
          <div class="flex-grow m-4">
            <h2 class="m-2 text-center font-bold">Location2</h2>
            <iframe
              id="mapStore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.3042943332875!2d12.001477534393084!3d57.678788208131394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff369d0835015%3A0xba46082e9c214f49!2sIT-H%C3%B6gskolan!5e0!3m2!1sen!2sse!4v1663318464568!5m2!1sen!2sse"
              width="250"
              height="250"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <table class="my-8">
              <tr class="text-center font-bold">
                Weekdays:
                <td>08:00</td>
                <td class="">-</td>
                <td>20:00</td>
              </tr>
              <tr class="text-center font-bold">
                Weekends:
                <td>08:00</td>
                <td>-</td>
                <td>20:00</td>
              </tr>
            </table>
          </div>
          <div class="flex-grow m-4">
            <h2 class="m-2 text-center font-bold">Location3</h2>
            <iframe
              id="mapStore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.3042943332875!2d12.001477534393084!3d57.678788208131394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff369d0835015%3A0xba46082e9c214f49!2sIT-H%C3%B6gskolan!5e0!3m2!1sen!2sse!4v1663318464568!5m2!1sen!2sse"
              width="250"
              height="250"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <table class="my-8">
              <tr class="text-center font-bold">
                Weekdays:
                <td>08:00</td>
                <td class="">-</td>
                <td>20:00</td>
              </tr>
              <tr class="text-center font-bold">
                Weekends:
                <td>08:00</td>
                <td>-</td>
                <td>20:00</td>
              </tr>
            </table>
          </div>
        </div>
      </template>
    </FindUs>

    <About
      :title="history.section"
      :source="'../../assets/about-img/history.jpg'"
      :description="'Our History'"
    >
      <template #content>
        <span v-html="history.content" />
        <!--
        <p>
          Our newly created web shop was founded in 2023 with a mission to
          provide high-quality products and services to customers around the
          world. Our founders SerendipIT Solutions recognized a need for a more
          sustainable and socially responsible approach to e-commerce, and they
          set out to create a company that would embody those values.
        </p>
      </template>
      <template #allContent>
        <p class="mt-4">
          In the early days, our team worked tirelessly to develop our products
          and build a customer base. We focused on sourcing sustainable and
          ethically produced materials, and we built partnerships with suppliers
          who shared our commitment to social and environmental responsibility.
        </p>
        <p class="mt-4">
          As our web shop began to grow, we expanded our product offerings and
          invested in innovative technology to improve the customer experience.
          We also expanded our team, hiring top talent from diverse backgrounds
          to help us achieve our goals.
        </p>
        <p class="mt-4">
          Today, our web shop is a leading provider of all items imaginable, and
          we are proud to have earned a reputation for quality, sustainability,
          and social responsibility. We remain committed to our founding mission
          and values, and we look forward to continuing to grow and serve our
          customers for many years to come.
        </p>-->
      </template>
    </About>

    <About
      :title="carrer.section"
      :source="'../../assets/about-img/career-options.png'"
      :description="'Work with us'"
      :reverse="'flex border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white'"
    >
      <template #content>
        <span v-html="carrer.content" />
        <span v-html="carrer.content_full" />
      </template>

      <!--
        <template>
        <p class="mt-4">
          Our web shop is committed to providing a positive and supportive work
          environment for all employees. We believe that our employees are our
          most valuable asset, and we strive to create a workplace culture that
          fosters growth, learning, and collaboration.
        </p>
        <p class="mt-4">
          As an innovative and rapidly growing company, we offer a range of
          exciting career opportunities for talented individuals who are
          passionate about our mission and values. We are committed to hiring
          and developing top talent from diverse backgrounds, and we offer
          competitive salaries, comprehensive benefits packages, and
          opportunities for career advancement.
        </p>
      </template>
      <template #allContent>
        <p class="mt-4">
          Our employees have the opportunity to work on cutting-edge projects
          and initiatives that are shaping the future of e-commerce. We
          encourage creativity and independent thinking, and we provide ongoing
          training and development programs to help our employees grow and
          succeed.
        </p>
        <p class="mt-4">
          At our web shop, we value work-life balance and believe that happy,
          healthy employees are essential to our success. We offer flexible
          scheduling options and generous vacation and leave policies to help
          employees maintain a healthy work-life balance.
        </p>
        <p class="mt-4">
          Overall, our web shop is an exciting and rewarding place to work, with
          opportunities for growth, learning, and collaboration. We are
          committed to creating a positive and supportive work environment where
          employees can thrive and make meaningful contributions to our mission
          of providing high-quality products and services to our customers.
        </p>
      </template>
      -->
    </About>

    <About
      :title="'Sustainability'"
      :source="'../../assets/about-img/sustainability-resources.jpg'"
      :description="'A Sustainable workplace'"
    >
      <template #content>
        <p class="mt-4">
          As a sustainable web shop, our company strives to reduce our
          environmental impact while also providing high-quality products and
          services to our customers. We believe that sustainability is not just
          an important goal, but also an essential part of our business
          strategy.
        </p>
        <p class="mt-4">
          To achieve our sustainability goals, we focus on several key areas.
          First, we source our products from suppliers who meet strict
          environmental and social responsibility criteria. This means that our
          products are made using sustainable materials, and that the workers
          who produce them are treated fairly and paid a living wage.
        </p>
      </template>

      <template #allContent>
        <p class="mt-4">
          Second, we use eco-friendly packaging materials wherever possible.
          This includes biodegradable or compostable packaging, as well as
          recycled materials. By minimizing waste and using sustainable
          packaging, we aim to reduce our impact on the environment.
        </p>
        <p class="mt-4">
          Third, we prioritize energy efficiency in our operations. We use
          renewable energy sources whenever possible, and we work to reduce our
          overall energy consumption through measures like energy-efficient
          lighting and equipment.
        </p>
        <p class="mt-4">
          Finally, we strive to educate our customers about sustainability and
          encourage them to make environmentally conscious choices. This
          includes providing information about our products and their
          environmental impact, as well as offering tips and resources for
          living a more sustainable lifestyle.
        </p>
        <p class="mt-4">
          Overall, our sustainability work is a key part of our commitment to
          creating a better future for ourselves, our customers, and the planet.
          We believe that by prioritizing sustainability in our operations, we
          can make a meaningful contribution to a more sustainable and equitable
          world.
        </p>
      </template>
    </About>
    <ContactInfo
      :title="'Contact'"
      :source="'../../assets/about-img/contact-us.jpg'"
      :description="'Contact Us here'"
    >
      <template #content>
        <p>How to reach us</p>
      </template>
      <template #contactDetails>
        <div class="my-8 flex items-center space-x-24">
          <p
            class="flex-1 border border-neutral-800 text-center ml-4 py-2 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
          >
            <a href="mailto: abc@example.com" target="_blank">Send Email</a>
          </p>
          <p
            class="flex-1 border border-neutral-800 text-center ml-4 py-2 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
          >
            Phone: 0771-365 365
            <a href="tel: 0771365365" target="_blank">Call Us</a>
          </p>
          <p
            class="flex-1 border border-neutral-800 text-center ml-4 py-2 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
          >
            <a href="https://github.com/serendipiIT" target="_blank">
              Social Media</a
            >
          </p>
        </div>
      </template>
    </ContactInfo>
  </main>
</template>
