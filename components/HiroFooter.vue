<script setup>
import { computed } from 'vue'
import { useDark } from '@vueuse/core'
import { useSlideContext, useNav } from '@slidev/client'

const { $slidev } = useSlideContext()
const tc    = $slidev?.configs?.themeConfig ?? {}
const title = $slidev?.configs?.title ?? ''
const isDark = useDark()

const footerLogo = computed(() => isDark.value
  ? (tc.hiroFooterLogoDark ?? '/assets/hiro-square.svg')
  : (tc.hiroFooterLogo     ?? '/assets/hiro-square-black.svg')
)
const cuLogo = computed(() => isDark.value
  ? (tc.hiroCuLogoWhite ?? '/assets/cu-boulder-white.svg')
  : (tc.hiroCuLogo      ?? '/assets/cu-boulder.svg')
)

const { currentPage, total } = useNav()
const progress = computed(() => `${(currentPage.value / Math.max(total.value, 1)) * 100}%`)
</script>

<template>
  <footer class="hiro-footer">
    <div class="hiro-progress-bar">
      <div class="hiro-progress-fill" :style="{ width: progress }" />
    </div>
    <div class="hiro-footer-content">
      <img :src="footerLogo" class="hiro-footer-logo" alt="HIRO Lab" />
      <span class="hiro-footer-title">{{ title }}</span>
      <img :src="cuLogo" class="hiro-footer-cu-logo" alt="CU Boulder" />
    </div>
  </footer>
</template>

<style scoped>
.hiro-progress-bar {
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  width: 100%;
}
.hiro-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #F32B92, #32FFB8);
  transition: width 0.4s cubic-bezier(0.26, 0.86, 0.44, 0.985);
}
</style>
