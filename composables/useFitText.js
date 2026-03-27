import { onMounted } from 'vue'

/**
 * Adaptive font-size: binary-searches the largest font-size (as an em
 * multiplier on the .slidev-layout root) at which the slide content fits
 * without overflowing. Runs once after the first paint.
 *
 * Always scales between min and max — scales UP to fill space when sparse,
 * scales DOWN to fit when dense.
 *
 * @param {import('vue').Ref<HTMLElement|null>} elRef  ref to the .slidev-layout root div
 * @param {{ min?: number, max?: number }} opts
 */
export function useFitText(elRef, { min = 0.62, max = 1.4 } = {}) {
  function fit() {
    const el = elRef.value
    if (!el) return

    // overflow:visible on flex items doesn't create a scroll region, so
    // scrollHeight === clientHeight regardless of content size. Use 'auto'
    // to force a real scroll region so scrollHeight correctly exceeds
    // clientHeight when content overflows.
    el.style.overflow = 'auto'

    // Binary search: 12 iterations → precision ≈ (max-min)/4096 ≈ 0.0002em
    let lo = min, hi = max
    for (let i = 0; i < 12; i++) {
      const mid = (lo + hi) / 2
      el.style.fontSize = `${mid}em`
      if (el.scrollHeight <= el.clientHeight + 2) lo = mid
      else hi = mid
    }
    el.style.fontSize = `${lo}em`
    el.style.overflow = ''
  }

  onMounted(() => {
    // Double rAF: first frame lets Vue finish patching the DOM,
    // second frame lets the browser complete its initial layout pass
    // before we measure and adjust.
    requestAnimationFrame(() => requestAnimationFrame(fit))
  })
}
