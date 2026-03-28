<!--
  cover layout — gradient bg (embodied green → social pink), white text.
  Same grid structure as cover-dark; swap background to use the colorful gradient.

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
const hiroLabLogo    = tc.hiroLabLogo     ?? '/assets/hiro-white-text.svg'
const hiroCuLogoWhite = tc.hiroCuLogoWhite ?? '/assets/cu-boulder-white.svg'

const contentRef = ref(null)
useFitText(contentRef, { min: 0.5, max: 1.4 })
</script>

<template>
  <div
    class="slidev-layout cover"
    style="background: linear-gradient(135deg, #00A878 0%, #D42183 100%);"
  >
    <div class="ts-header">
      <img :src="hiroLabLogo"     class="ts-logo-lab" alt="HIRO Lab" />
      <img :src="hiroCuLogoWhite" class="ts-logo-uni" alt="CU Boulder" />
    </div>
    <div ref="contentRef" class="ts-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.cover {
  display: grid;
  grid-template-rows: 14% 86%;
}
.ts-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  box-sizing: border-box;
  overflow: hidden;
}
.ts-logo-lab { height: 70%;  width: auto; object-fit: contain; max-height: 3.5rem; }
.ts-logo-uni { height: 38%;  width: auto; object-fit: contain; max-height: 1.6rem; }
.ts-content  {
  overflow: hidden;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ts-content :deep(h1) {
  font-family: 'Geom', 'Outfit', sans-serif;
  font-size: 3.2em;
  font-weight: 300;
  color: #ffffff;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-shadow: 0 2px 16px rgba(0,0,0,0.18);
  padding: 0.08em 0;
  margin: 0 0 0.15em;
}
/* p1 = subtitle, p2 = author, p3 = date */
.ts-content :deep(p)               { margin: 0.3em 0; }
.ts-content :deep(p:nth-of-type(1)) { font-size: 1.4em;  font-weight: 200; color: rgba(255,255,255,0.85); margin-bottom: 0.9em; }
.ts-content :deep(p:nth-of-type(2)) { font-size: 1.4em;  font-weight: 600; color: #ffffff; }
.ts-content :deep(p:nth-of-type(3)) { font-size: 1.0em;  font-weight: 300; color: rgba(255,255,255,0.75); }
</style>
