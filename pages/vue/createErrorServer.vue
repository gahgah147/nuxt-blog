<template>
  <div class="flex flex-col items-center bg-white py-24">
    <h1 class="text-6xl font-semibold text-sky-400">重新整理後你應該看不到這個頁面</h1>
  </div>
</template>

<script setup>
throw createError({
  statusCode: 500,
  statusMessage: 'Internal Server Error'
})
</script>