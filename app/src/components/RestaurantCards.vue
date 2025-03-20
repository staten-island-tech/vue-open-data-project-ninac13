<template>
 <div>
    <h2>{{ name }}</h2>
    <h2>{{ borough }}</h2>
  </div>
</template>

<script>
defineProps({
    name: String,
    borough: String,
})
</script>

<style>

</style>