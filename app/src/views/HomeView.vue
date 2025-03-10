<template>
    <div class="container">
    <h1>NYC Restaurant Inspections</h1>
    <button>Ratings Per ZipCode</button>
    <button>Ratings Per ZipCode</button>
    <RatingGraph />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import RatingGraph from '@/components/RatingGraph.vue';

export default {
  name: 'HomeView',
  components: { RatingGraph }
}
</script>

<style>

</style>

