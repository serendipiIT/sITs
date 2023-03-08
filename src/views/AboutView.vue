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
        console.log(this.history, this.find, this.carrer, this.sustainability)
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

  span > p {
    margin-top: 20px;
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
        <div class="w-full my-8 sm:flex mx-4">
          <div class="flex-grow m-4">
            <h2 class="m-2 text-center font-bold">Location1</h2>
            <iframe
              id="mapStore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.3042943332875!2d12.001477534393084!3d57.678788208131394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff369d0835015%3A0xba46082e9c214f49!2sIT-H%C3%B6gskolan!5e0!3m2!1sen!2sse!4v1663318464568!5m2!1sen!2sse"
              width="300"
              height="300"
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
              width="300"
              height="300"
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
              width="300"
              height="300"
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
        <p class="mt-4"><span v-html="history.content" /></p>
      </template>
      <template #allContent>
        <p class="mt-4"><span v-html="history.content_full" /></p>
      </template>
    </About>

    <About
      :title="carrer.section"
      :source="'../../assets/about-img/career-options.png'"
      :description="'Work with us'"
      :reverse="'flex border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white'"
    >
      <template #content>
        <p class="mt-4"><span v-html="carrer.content" /></p>
      </template>

      <template #allContent>
        <p class="mt-4"><span v-html="carrer.content_full" /></p>
      </template>
    </About>

    <About
      :title="'Sustainability'"
      :source="'../../assets/about-img/sustainability-resources.jpg'"
      :description="'A Sustainable workplace'"
    >
      <template #content>
        <p class="mt-4">
          <span v-html="sustainability.content" />
        </p>
      </template>

      <template #allContent>
        <p class="mt-4">
          <span v-html="sustainability.content_full" />
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
