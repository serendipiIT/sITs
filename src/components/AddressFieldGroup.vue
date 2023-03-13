<template>
  <section class="address">
    <h2>{{ label }}</h2>
    <div class="address__field">
      <label for="address">Address</label>
      <input
        type="text"
        id="streetName"
        :value="streetName"
        @input="$emit('update:streetName', $event.target.value)"
        required
      />
    </div>
    <div class="address__field">
      <label for="city">City</label>
      <input
        type="text"
        id="city"
        :value="city"
        @input="$emit('update:city', $event.target.value)"
        required
      />
    </div>
    <div class="address__field">
      <label for="postcode">Postcode</label>
      <input
        type="text"
        id="postcode"
        :value="postcode"
        @input="$emit('update:postcode', $event.target.value)"
        required
      />
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AddressFieldGroup',
    props: {
      label: {
        type: String,
        default: '',
      },
      streetName: {
        type: String,
        default: '',
      },
      city: {
        type: String,
        default: '',
      },
      postcode: {
        type: String,
        default: '',
      },
    },
  }
  /* https://blog.logrocket.com/using-v-model-vue-3-build-complex-forms/ */
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
