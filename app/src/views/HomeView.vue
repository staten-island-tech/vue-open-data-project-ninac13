<template>
  <div class="container">
    <h1>NYC Restaurant Inspections</h1>
    <RestaurantCard
      v-for="(restaurant, index) in restaurant"
      :key="restaurant.name"
      :id="index + 1"
    />
  </div>
  
</template>

<script>
import RestaurantCard from "@/components/RestaurantCard.vue";
import { ref, onMounted } from "vue";
const restaurants = ref("")
async function getRestaurantData() {
  let res = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json");
  let data = await res.json();
  restaurants.name = data.dba;
}
onMounted(()=>{
  getRestaurantData();
})

</script>

<style>

</style>

