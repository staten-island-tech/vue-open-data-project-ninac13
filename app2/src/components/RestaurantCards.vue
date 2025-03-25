<template>
 <div class="card bg-base-100 w-1/5 pb-8 pt-6 h-auto border-secondary border-2 hover:border-4 rounded-lg my-5 min-w-64 shadow-lg">
    <h1 class="text-center text-2xl text-neutral my-1 mx-5 font-bold">{{ name }}</h1>
    <h2 class="text-center mb-2 italic text-info">{{ borough }}</h2>
    <h2 class="text-center mb-2 text-neutral mx-5">{{ street }}</h2>
  </div>
</template>

<script setup>
defineProps({
    name: String,
    borough: String,
    street: String,
})
</script>

<style>

</style>