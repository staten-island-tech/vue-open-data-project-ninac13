<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { ref, onMounted } from "vue";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

const restaurants = ref("")
async function getRestaurantData() {
  let res = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json");
  let data = await res.json();
  restaurants.name = data.dba;
}
onMounted(()=>{
  getRestaurantData();
})

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ 'Critical', 'Not Critical', 'Not Applicable' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>