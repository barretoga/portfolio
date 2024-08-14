<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'

interface BreakpointSettings {
  slidesPerView: number
  spaceBetween: number
}

interface Breakpoints {
  [key: string]: BreakpointSettings
}

interface Props<T = any> {
  items: Array<T>
  slidesPerView?: number
  loop?: boolean
  breakpoints?: Breakpoints
  autoplay?: {
    delay: number
    disableOnInteraction?: boolean
  }
}

const props = withDefaults(defineProps<Props>(), {
  slidesPerView: 1,
  loop: false,
})

let modules: unknown[] = []

if (props.autoplay) {
  modules.push(Autoplay)
}
</script>

<template>
  <Swiper
    :slides-per-view
    :loop="true"
    :items
    :breakpoints
    :autoplay
    :modules
    class="flex h-auto w-full max-w-[100vw] py-4"
  >
    <SwiperSlide
      v-for="(item, index) in items"
      :key="index"
      class="h-auto w-full items-center justify-center flex"
    >
      <slot :item="item" />
    </SwiperSlide>
  </Swiper>
</template>
