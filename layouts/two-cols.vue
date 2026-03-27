<!--
  two-cols layout — two equal columns with HIRO footer.
  Content before ::right:: goes to the left column (default slot).
  Content after ::right:: goes to the right column (right slot).

  Usage:
    ---
    layout: two-cols
    ---

    ## Left column heading

    Left content with $\pi_\theta$ math.

    ::right::

    ## Right column heading

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
  <div ref="layoutRef" class="slidev-layout two-cols">
    <div class="columns">
      <div><slot /></div>
      <div><slot name="right" /></div>
    </div>
    <HiroFooter />
  </div>
</template>
