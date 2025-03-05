<template>
    <router-link :to="rstPath" class="card">
      <h2>{{ restaurant.name }}</h2>
      <h3>{{ id }}</h3>
    </router-link>
  </template>
  
  <script setup>
  import { computed } from "vue";
  const props = defineProps({
    restaurant: Object,
    id: Number,
  });
  const rstPath = computed(() => {
    return `/restaurant/${props.id}`;
  });
  </script>
  