<template>
  <h1 class="flex justify-center text-primary font-extrabold text-5xl mx-auto w-fit px-4 py-6 mt-7 bg-base-100 border-neutral border-4 mb-5 underline underline-offset-8 rounded-3xl shadow-2xl">NYC Restaurant Inspections</h1>
  <nav>
    <div class="flex justify-center my-10">
      <RouterLink to="/" class="border-8 border-double rounded-2xl  mx-5 px-8 py-3 bg-base-100 font-bold">Go Back to Home</RouterLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>