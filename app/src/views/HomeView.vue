<template>
    <div class="container">
    <button @click="goToRating">Ratings Per ZipCode</button>
    <button @click="goToPie">Restaurant Percentage Per Borough</button>
    <Restaurants v-for="restaurant in data"></Restaurants>
  </div>
</template>

<script setup>
const restaurants = ref("")
async function getRestaurantData() {
  let res = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json");
  let data = await res.json();
  // restaurants.name = data.dba;
}
onMounted(()=>{
  getRestaurantData();
})
</script>

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

