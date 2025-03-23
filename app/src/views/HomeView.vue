<template>
    <div class="container">
    <button @click="goToRating">Ratings Per ZipCode</button>
    <button @click="goToPie">Restaurant Percentage Per Borough</button>
    <RestaurantList />
  </div>
</template>

<script>
import RestaurantList from '../components/RestaurantList.vue';
export default {
  components: {
    RestaurantList,
  },
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

