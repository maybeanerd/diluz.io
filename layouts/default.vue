<template>
  <div class="h-screen">
    <Navbar />
    <div class="flex flex-col min-h-full justify-between">
      <Header />
      <div class="p-4 md:p-8 overflow-x-hidden">
        <slot />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
