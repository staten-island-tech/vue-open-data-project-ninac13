<template>
    <div class="container">
    <button class="flex justify-center" @click="goToNumbers">Number of Restaurants Per Borough</button>
    <button class="flex justify-center" @click="goToCritical">Critical Ratings of Restaurants Per Borough</button>
    <button class="flex justify-center" @click="goToInput">Ratings of Restaurants Per Borough</button>
    <h1 class="flex justify-center text-base-content text-3xl ml-48 px-4 py-4 bg-base-100 italic">50 Most Recently Updated Restaurants:</h1>
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
    goToNumbers() {
      this.$router.push('/numbers')
    },
    goToCritical() {
      this.$router.push('/criticalchart')
    },
    goToInput() {
      this.$router.push('/inputchart')
    },
  },
} 
</script>

<style>

</style>

