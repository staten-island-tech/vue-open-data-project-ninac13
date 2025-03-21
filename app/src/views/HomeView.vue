<template>
    <div class="container">
    <button @click="goToRating">Ratings Per ZipCode</button>
    <button @click="goToPie">Restaurant Percentage Per Borough</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToRating() {
      this.$router.push('/rating')
    },
    goToPie() {
      this.$router.push('/piechart')
    },
  },
} 
</script>

<style>

</style>

