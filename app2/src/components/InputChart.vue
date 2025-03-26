<template>
  <div>
    <div class="flex justify-center mb-5 gap-12">
      <button class="cursor-pointer border-2 rounded-lg mx-5 px-5 py-1 bg-base-100 font-bold shadow-lg hover:border-4" v-for="(borough, number) in boroughs" :key="number" @click="setBoroughData(borough)">
        {{ borough }}
      </button>
    </div>
    
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :key="chartCount"
    />
  </div>
  </template>

 <script>
 import { ref, onMounted, reactive } from "vue";
 import { Bar } from 'vue-chartjs'
 import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
 
 ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
 
 export default {
  
   name: 'BarChart',
   components: { Bar },
   setup() {
     const restaurants = ref([]);
     const chartCount = ref(0);
     const boroughs = ['Queens', 'Brooklyn', 'Staten Island', 'Bronx', 'Manhattan'];
     const chartData = reactive({
       labels: ['Critical', 'Not Critical', 'Not Applicable'],
       datasets: [
         {
           backgroundColor: ['#A8B5E0', '#779ECB', '#A6B6CF'],
           data: [0, 0, 0]
         },
       ]
     });
 
     const chartOptions = {
       responsive: true,
       plugins: {
         legend: { display: false },
         title: { display: true, text: 'Number of Various Restaurant Flags by Borough' }
       },
       scales: {
         y: {
           title: {
             display: true,
             text: 'Number of Restaurant Flags',
             font: {
               size: 14,
               weight: 'bold'
             }
           }
         },
         x: {
           title: {
             display: true,
             text: 'Types of Flags',
             font: {
               size: 14,
               weight: 'bold'
             }
           }
         }
       }
     };
     async function getRestaurantData() {
       try {
         let res = await fetch("https://data.cityofnewyork.us/resource/43nn-pn8j.json?$limit=5000");
         let data = await res.json();
         restaurants.value = data;
       } catch (error) {
         console.log("There was an error", error);
       }
     }
 
     function setBoroughData(borough) {
       let critical = 0;
       let notCritical = 0;
       let notApplicable = 0;
 
       const filteredData = restaurants.value.filter(restaurant => restaurant.boro === borough);

       filteredData.forEach(restaurant => {
         if (restaurant.critical_flag === "Critical") {
           critical++;
         } else if (restaurant.critical_flag === "Not Critical") {
           notCritical++;
         } else {
           notApplicable++;
         }
       });
 
       chartData.datasets[0].data = [critical, notCritical, notApplicable];
       chartCount.value++;
     }
 
     onMounted(() => {
       getRestaurantData();
     });
 
     return { chartData, chartOptions, chartCount, boroughs, setBoroughData };
   }
 };
 </script>