<script setup lang="ts">
interface Props {
  src: string
  type: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
}

withDefaults(defineProps<Props>(), {
  autoplay: true,
  loop: true,
  muted: true,
})
</script>

<template>
  <video
    :autoplay
    :loop
    :muted
    class="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source
      :src
      :type
    >
    Seu navegador não suporta o elemento de vídeo.
  </video>
</template>
