<script setup>
import {ref, onMounted} from 'vue';
import Restaurants from "./RestaurantCards.vue";
const restaurants = ref([]);

async function getRestaurantData() {
    try {
        let res = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json");
        let data = await res.json();
        restaurants.value = data;
    } catch (error) {
        console.log("There was an error", error);
    }
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
