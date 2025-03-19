<template>
    <div class="container">
    <button @click="goToRating">Ratings Per ZipCode</button>
    <button>Ratings Per ZipCode</button>
    <RatingGraph />
  </div>
</template>

<script>
export default {
  methods: {
    goToRating() {
      this.$router.push('/rating')
    },
  },
} 
</script>

<style>

</style>

