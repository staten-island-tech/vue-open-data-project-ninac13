<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :key="chartCount"
    />
  </template>
  
  <script>
  import { ref, onMounted, reactive } from "vue";
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'CriticalGraph',
    components: { Bar },
    setup() {
      const restaurants = ref([]);
      const chartCount = ref(0);
      const chartData = reactive({
        labels: ['Queens', 'Brooklyn', 'Staten Island', 'Bronx', 'Manhattan'],
        datasets: [
          {
            label: 'Number of Critical Flags',
            backgroundColor: '#F6D7E8',
            data: [0, 0, 0, 0, 0]
          }
        ]
      });
  
      const chartOptions = {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'NYC Restaurants by Borough' }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Number of Critical Ratings',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Borough',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          }
        }
      }
  
      async function getRestaurantData() {
        try {
          let res = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json?$limit=5000");
          let data = await res.json();
          addNumber(data);
        } catch (error) {
          console.log("There was an error", error);
        }
      }
  
      function addNumber(data) {
        let q = 0;
        let br = 0;
        let si = 0;
        let bo = 0;
        let m = 0;
  
        data.forEach(restaurant => {
        if (restaurant.critical_flag === "Critical"){
            if (restaurant.boro === "Queens"){
            q++;
          }
          else if (restaurant.boro === "Brooklyn"){
            bo++;
          }
          else if (restaurant.boro === "Staten Island"){
            si++;
          }
          else if (restaurant.boro === "Bronx"){
            br++;
          }
          else if (restaurant.boro === "Manhattan"){
            m++;
          }
        }
        });

        chartData.datasets[0].data = [q, bo, si, br, m];
        chartCount.value++;
      }
  
      onMounted(() => {
        getRestaurantData();
      });
  
      return { chartData, chartOptions, chartCount };
    }
  }
  </script>