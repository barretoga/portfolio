<script setup lang="ts">
interface Badge {
  image_path: string
  name: string
}

interface Props {
  items: Badge[]
}

defineProps<Props>()
</script>

<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
    >
      <Image
        :src="item.image_path"
        :alt="item.name"
        class="w-[54px] h-[54px]"
      />
    </div>
  </div>
</template>
