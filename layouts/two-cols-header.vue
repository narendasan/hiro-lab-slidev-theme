<!--
  two-cols-header layout — heading row above two equal columns.
  Default slot = header. ::left:: = left column. ::right:: = right column.

  Usage:
    ---
    layout: two-cols-header
    ---

    ## Slide Title

    ::left::

    Left content here.

    ::right::

    Right content here.
-->

<script setup>
import { ref } from 'vue'
import HiroFooter from '../components/HiroFooter.vue'
import { useFitText } from '../composables/useFitText.js'

const layoutRef = ref(null)
useFitText(layoutRef)
</script>

<template>
  <div ref="layoutRef" class="slidev-layout two-cols-header">
    <div class="two-cols-header-top">
      <slot />
    </div>
    <div class="columns" style="margin-top: 0.5em;">
      <div><slot name="left" /></div>
      <div><slot name="right" /></div>
    </div>
    <HiroFooter />
  </div>
</template>

<style scoped>
.two-cols-header { display: flex; flex-direction: column; }
.two-cols-header-top { flex-shrink: 0; }
.columns { flex: 1; min-height: 0; align-items: stretch; }
.columns > div { min-height: 0; overflow: hidden; }
</style>
