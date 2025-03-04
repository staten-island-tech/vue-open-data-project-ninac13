<template>
    <div class="container">
    <h1>NYC Restaurant Inspections</h1>
    <BarChart />
  </div>
</template>

<script>
import{ Bar } from 'vue-chart-js'
import BarChart from 'path/to/component/BarChart'
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
export default {
  name: 'App',
  components: { BarChart }
}
</script>

<style>

</style>

