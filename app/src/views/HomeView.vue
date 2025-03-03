<script>
import { ref, onMounted } from "vue";
const restaurants = ref("")
async function getRestaurantData() {
  let res = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json");
  let data = await res.json();
  restaurants.name = data.dba;
}
onMounted(() => {
  getRestaurantData();
});
</script>
<template>
  <div>
    <h1>NYC Restaurant Inspections</h1>
    <h2>Restaurants in NYC</h2>
  </div>
</template>
