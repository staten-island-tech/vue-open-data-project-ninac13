<template>
    <div class="container">
      <div class="ml-28 flex justify-center mb-10">
        <button class="hover:border-4 cursor-pointer border-2 rounded-lg mx-5 px-5 py-1 bg-base-100 font-bold shadow-lg" @click="goToNumbers">Number of Restaurants Per Borough</button>
        <button class="hover:border-4 cursor-pointer border-2 rounded-lg mx-5 px-5 py-1 bg-base-100 font-bold shadow-lg" @click="goToCritical">Critical Ratings of Restaurants Per Borough</button>
        <button class="hover:border-4 cursor-pointer border-2 rounded-lg mx-5 px-5 py-1 bg-base-100 font-bold shadow-lg" @click="goToInput">Ratings of Restaurants Per Borough</button>
      </div>
    <h1 class="flex justify-center font-bold underline underline-offset-6 text-neutral text-4xl ml-48 px-4 py-4 italic"> Top 100 Most Recently Updated Restaurants:</h1>
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

