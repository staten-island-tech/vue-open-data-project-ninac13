<template>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  const route = useRoute();
  const restaurant = ref("");
  async function getRestaurant() {
    let res = await fetch(`https://data.cityofnewyork.us/resource/43nn-pn8j.json`);
    let data = await res.json();
    restaurant.value = data;
  }
  onMounted(() => {
    getRestaurant();
  });
  </script>
  
  <style scoped></style>