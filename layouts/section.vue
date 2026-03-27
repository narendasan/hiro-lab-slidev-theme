<!--
  section layout — white bg, gradient h2 (pink → green), centered.
  Mirrors the reveal.js focus-slide class.

  Usage:
    ---
    layout: section
    ---

    ## Section Title
    Optional subtitle text
-->

<script setup>
import { ref } from 'vue'
import { useFitText } from '../composables/useFitText.js'

const layoutRef = ref(null)
useFitText(layoutRef, { min: 0.5, max: 1.3 })
</script>

<template>
  <div ref="layoutRef" class="slidev-layout section">
    <slot />
  </div>
</template>
