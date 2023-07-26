<template>
  <el-button v-bind="props">
    <slot />
  </el-button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: string
    [key: string]: any
  }>(),
  {
    type: 'primary'
  }
)

// 写一个求和的函数
</script>
