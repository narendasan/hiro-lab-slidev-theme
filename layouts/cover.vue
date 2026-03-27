<!--
  cover layout — gradient bg (embodied green → social pink), white text.
  Mirrors the reveal.js title-slide class.

  Usage:
    ---
    layout: cover
    ---

    # Title
    Subtitle
    Author Name
    March 2026
-->

<script setup>
import { ref } from 'vue'
import { useSlideContext } from '@slidev/client'
import { useFitText } from '../composables/useFitText.js'

const { $slidev } = useSlideContext()
const tc = $slidev?.configs?.themeConfig ?? {}
const hiroLabLogo = tc.hiroLabLogo ?? '/assets/hiro-white-text.svg'
const hiroCuLogo  = tc.hiroCuLogo  ?? '/assets/cu-boulder.svg'

const layoutRef = ref(null)
useFitText(layoutRef, { min: 0.5, max: 1.0 })
</script>

<template>
  <div
    ref="layoutRef"
    class="slidev-layout cover"
    style="background: linear-gradient(135deg, #00A878 0%, #D42183 100%);"
  >
    <div class="ts-header">
      <img :src="hiroLabLogo" class="ts-logo-lab" alt="HIRO Lab" />
      <img :src="hiroCuLogo"  class="ts-logo-uni" alt="CU Boulder" />
    </div>
    <div class="ts-spacer" />
    <div class="ts-content">
      <slot />
    </div>
    <div class="ts-spacer" />
  </div>
</template>

<style scoped>
.ts-header {
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0.8em;
  flex-shrink: 0;
  box-sizing: border-box;
}
.ts-logo-lab { height: 4em;  width: auto; object-fit: contain; }
.ts-logo-uni { width: 11em; height: auto; object-fit: contain; }
.ts-spacer   { flex: 1; }
.ts-content  { padding: 0 0.8em 1.5em; }

/* Style the markdown content rendered into the slot */
.ts-content :deep(h1) {
  font-size: 1.4em;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 0.25em;
  text-shadow: 0 1px 8px rgba(0,0,0,0.2);
}
/* p1 = subtitle, p2 = author, p3 = date */
.ts-content :deep(p) { margin: 0.3em 0; color: rgba(255,255,255,0.88); }
.ts-content :deep(p:nth-of-type(1)) { font-size: 0.88em; font-weight: 300; margin-bottom: 0.8em; }
.ts-content :deep(p:nth-of-type(2)) { font-size: 0.7em;  font-weight: 700; color: #ffffff; }
.ts-content :deep(p:nth-of-type(3)) { font-size: 0.6em;  font-weight: 300; color: rgba(255,255,255,0.75); }
</style>
