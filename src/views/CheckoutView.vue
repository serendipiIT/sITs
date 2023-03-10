<template>
  <div
    class="flex flex-col flex-wrap px-4 sm:px-0 bg-neutral-100 justify-start min-h-screen"
  >
    <h1 class="text-4xl text-center my-8 w-full">Checkout</h1>
    <div class="flex flex-col sm:flex-row flex-wrap w-full justify-around">
      <div>
        <section class="w-full">
          <ul class="flex flex-col" v-if="itemList.length > 0">
            <li
              class="mb-8 h-min w-full"
              :key="item.id"
              v-for="item in itemList"
            >
              <CheckoutItemCard :item="item" />
            </li>
          </ul>
        </section>
      </div>
      <div>
        <form
          @submit.prevent="handleSubmit"
          class="checkout-form"
          autocomplete="on"
        >
          <div class="address__field">
            <label for="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              required
            />
          </div>
          <div class="address__field">
            <label for="lastName">Last name</label>
            <input type="text" id="lastName" v-model="form.lastName" required />
          </div>
          <div class="address__field">
            <label for="tel">Tel</label>
            <input type="tel" id="tel" v-model="form.tel" required />
          </div>
          <div class="address__field">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <AddressFieldGroup
            label="Billing Address"
            v-model:streetName="form.billingAddress.streetName"
            v-model:city="form.billingAddress.city"
            v-model:postcode="form.billingAddress.postcode"
          />
          <div class="address__field">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import AddressFieldGroup from '../components/AddressFieldGroup.vue'
  import CheckoutItemCard from '../components/CheckoutItemCard.vue'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        urlApi: 'http://localhost:3000/',
        form: {
          firstName: '',
          lastName: '',
          email: '',
          tel: '',
          billingAddress: {
            streetName: '',
            city: '',
            postcode: '',
          },
        },
      }
    },
    components: {
      AddressFieldGroup,
      CheckoutItemCard,
    },

    computed: {
      itemList() {
        return this.$store.state.cart.items
      },
      ...mapGetters({
        amount: 'cart/totalAmount',
        total: 'cart/total',
        totalProductCost: 'cart/totalPriceTimesAmount',
      }),
    },
    methods: {
      async handleSubmit() {
        {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              products: `'${this.itemList}'`,
              name: `'${this.form.firstName}'`,
              surname: `'${this.form.lastName}'`,
              email: `'${this.form.email}'`,
              phone: `${this.form.tel}`,
              street: `'${this.form.billingAddress.streetName}'`,
              postal_code: `${this.form.billingAddress.postcode}`,
              city: `'${this.form.billingAddress.city}'`,
            }),
          }
          const response = await fetch(`${this.urlApi}orders`, requestOptions)
          const data = await response.json()
          console.log(data)
        }
      },
    },
  }
</script>

<style scoped>
  .checkout-form {
    margin: 5px auto;
    padding: 10px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .address__field {
    padding-bottom: 10px;
    width: 250px;
    text-align: left;
  }
  label {
    display: block;
    font-weight: bold;
  }

  input {
    padding: 10px;
    width: 230px;
    border: 1px solid #fff;
    border-radius: 5px;
    outline: 0;
    background: #ffffff;
  }

  button {
    margin-top: 30px;
    padding: 10px;
    width: 250px;
    color: #ffffff;
    border: 1px solid #fff;
    border-radius: 5px;
    outline: 0;
    background: #434141;
  }
</style>
