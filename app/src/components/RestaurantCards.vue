<template>
 <div>
    <h2>{{ name }}</h2>
    <h2>{{ borough }}</h2>
    <h2>{{ street }}</h2>
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