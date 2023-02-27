<script>
  import About from '../components/About.vue'
  import NewsLetter from '../components/NewsLetter.vue'
  import ContactInfo from '../components/ContactInfo.vue'

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

<style scoped>
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
        Our newly created web shop was founded in 2023 with a mission to provide
        high-quality products and services to customers around the world. Our
        founders SerendipIT Solutions recognized a need for a more sustainable
        and socially responsible approach to e-commerce, and they set out to
        create a company that would embody those values.
      </p>
    </NewsLetter>

    <About
      :title="'Find Us'"
      :source="'../../assets/about-img/find-us.jpg'"
      :description="'Find Us'"
      :reverse="'flex border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white'"
    >
      <template #content>
        <p>See our locations and opening hours.</p>
      </template>
      <template #allContent>
        <p class="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
          voluptatum aut possimus cupiditate, ipsa aperiam sapiente
          necessitatibus nostrum totam alias! Laborum, porro illo aliquam
          aperiam enim minus. Veritatis, consectetur tempore? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Enim mollitia earum quidem
          ratione voluptates tempora eveniet quod! Nisi aspernatur dolores ut
          dolore similique vero est, at inventore asperiores officia eius?
        </p>
      </template>
    </About>

    <About
      :title="'Our History'"
      :source="'../../assets/about-img/history.jpg'"
      :description="'Our History'"
    >
      <template #content>
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
        </p>
      </template>
    </About>

    <About
      :title="'Career'"
      :source="'../../assets/about-img/career-options.png'"
      :description="'Work with us'"
      :reverse="'flex border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white'"
    >
      <template #content>
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
      <!-- TO-DO - Skapa funktion för att dölja/Visa mer -->
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
        <div class="flex items-center space-x-24">
          <p class="m-12">
            <a href="mailto: abc@example.com">Send Email</a>
          </p>
          <p class="m-12">
            Phone: 0771-365 365 <a href="tel: 0771365365">Call Us</a>
          </p>
          <p class="m-12">
            <a href="https://github.com/serendipiIT"> Social Media</a>
          </p>
        </div>
      </template>
    </ContactInfo>
  </main>
</template>
