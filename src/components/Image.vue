<script setup lang="ts">
interface Props {
  src: string
  alt: string
}

defineProps<Props>()
</script>

<template>
  <img
    :alt
    :src
    class="object-contain aspect-w-3 aspect-h-2"
    height="100%"
    width="100%"
    loading="lazy"
  >
</template>
