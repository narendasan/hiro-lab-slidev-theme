<!--
  Renders the HIRO footer on slides that use non-HIRO layouts
  (e.g. Slidev's built-in 'image', 'iframe', etc).
  For HIRO layouts (default, two-cols, two-cols-header), the footer
  is included directly in the layout template — this is a fallback.
  Cover and section layouts hide the footer via CSS.
-->
<script setup>
import { useSlideContext } from '@slidev/client'
import HiroFooter from './components/HiroFooter.vue'

const { $frontmatter } = useSlideContext()

// Hide on layouts that already include the footer or should have none
const FOOTER_INCLUDED = ['default', 'two-cols', 'two-cols-header', 'cover', 'cover-dark', 'section']
const layout = $frontmatter?.layout ?? 'default'
const show = !FOOTER_INCLUDED.includes(layout)
</script>

<template>
  <HiroFooter v-if="show" />
</template>
