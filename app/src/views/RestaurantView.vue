<script setup>
import Restaurants from "../components/RestaurantCards.vue"
const restaurants = ref("");
async function getRestaurantData() {
  let res = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json");
  let data = await res.json();
  restaurants.value = data;
}
onMounted(()=>{
  getRestaurantData();
})
</script>

<template>
    <div class="container">
    <Restaurants v-for="restaurant in restaurants"
      :key="restaurant.dba"
      :name="restaurant.dba"
      :borough="restaurant.boro"
      :street="restaurant.street"
    ></Restaurants>
  </div>
</template>
