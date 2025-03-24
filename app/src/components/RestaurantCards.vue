<template>
 <div class="card bg-secondary-content w-2/5 pb-50 pt-6 h-auto border-secondary border-2 hover:border-4 rounded-lg my-5 min-w-64 shadow-md">
    <h1 class="text-center text-2xl text-neutral my-1">{{ name }}</h1>
    <h2 class="text-center mb-2 italic">{{ borough }}</h2>
    <h2 class="text-center mb-2">{{ street }}</h2>
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