<script>
  export default {
    props: {
      maxWidth: String,
    },
  }
</script>
<template>
  <div class="sm:flex flex-row flex-wrap gap-10 justify-center">
    <!--REMOVE PARENT-->
    <div class="flex-row" :class="maxWidth">
      <img src="https://via.placeholder.com/200x250" alt="placeholder" />
      <div class="flex justify-between">
        <h3>TITLE</h3>
        <p>FAVORITE</p>
      </div>
      <div>Info</div>
      <div class="flex justify-between">
        <h3>Price</h3>
        <p>Buy</p>
      </div>
    </div>
    <div class="flex-row max-w-[200px]">
      <img src="https://via.placeholder.com/200x250" alt="placeholder" />
      <div class="flex justify-between">
        <h3>TITLE</h3>
        <p>FAVORITE</p>
      </div>
      <div>Info</div>
      <div>Price</div>
    </div>
    <div class="flex-row max-w-[200px]">
      <img src="https://via.placeholder.com/200x250" alt="placeholder" />
      <div class="flex justify-between">
        <h3>TITLE</h3>
        <p>FAVORITE</p>
      </div>
      <div>Info</div>
      <div>Price</div>
    </div>
    <div class="flex-row max-w-[200px]">
      <img src="https://via.placeholder.com/200x250" alt="placeholder" />
      <div class="flex justify-between">
        <h3>TITLE</h3>
        <p>FAVORITE</p>
      </div>
      <div>Info</div>
      <div>Price</div>
    </div>
  </div>
</template>
