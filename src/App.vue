<script setup lang="ts">
import Default from './layouts/default.vue'
import board from './components/board.vue'
</script>

<template>
  <Default>
    <!-- boardCanvas -->
    <div class="h-96 p-3">
      <board :test="1" />
    </div>
  </Default>
</template>
