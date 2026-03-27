<script setup>
defineProps({
  type:  { type: String, default: 'note' },
  title: { type: String, default: null },
})
</script>

<template>
  <div :class="`admonition admonition-${type}`">
    <div v-if="title" class="admonition-title">{{ title }}</div>
    <slot />
  </div>
</template>
