<script setup lang="ts">
import Default from './layouts/default.vue'
import board from './components/board.vue'
</script>

<template>
  <Default>
    <!-- boardCanvas -->
    <div class="h-80">
      <board />
    </div>
  </Default>
</template>
