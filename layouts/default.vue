<script setup>
import { ref } from 'vue'
import HiroFooter from '../components/HiroFooter.vue'
import { useFitText } from '../composables/useFitText.js'

const layoutRef = ref(null)
useFitText(layoutRef)
</script>

<template>
  <div ref="layoutRef" class="slidev-layout default">
    <slot />
    <HiroFooter />
  </div>
</template>
