<template>
  <h1 class="flex justify-center text-primary font-extrabold text-5xl mx-auto w-fit px-4 py-6 mt-7 bg-base-100 border-neutral border-4 mb-5 underline underline-offset-8 rounded-3xl shadow-2xl">NYC Restaurant Inspections</h1>
  <nav>
    <RouterLink to="/" class="border-2 rounded-lg mx-5">Go Back to Home</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>