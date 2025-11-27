'use client'

import gsap from 'gsap'
import { useLayoutEffect } from 'react'

type Options = {
  selector?: string
}

function parseDurationToSeconds(input: string | undefined): number {
  if (!input) return 20
  const trimmed = input.trim().toLowerCase()
  if (trimmed.endsWith('ms')) {
    const ms = parseFloat(trimmed.replace('ms', ''))
    return isNaN(ms) ? 20 : ms / 1000
  }
  if (trimmed.endsWith('s')) {
    const s = parseFloat(trimmed.replace('s', ''))
    return isNaN(s) ? 20 : s
  }
  const s = parseFloat(trimmed)
  return isNaN(s) ? 20 : s
}

export function useInfiniteScroll(opts: Options = {}) {
  const { selector = '[data-infinite-scroll]' } = opts

  useLayoutEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    )

    const cleanup: Array<() => void> = []

    elements.forEach((el) => {
      const attr = el.dataset.infiniteScroll ?? '2:20s'
      const [rawCount, rawDuration] = attr.split(':')
      const count = Math.max(1, Number.parseInt(rawCount || '2', 10))
      const duration = parseDurationToSeconds(rawDuration)

      const firstChild = el.children[0]
      if (!firstChild) return

      const originalLen = el.children.length

      for (let i = 1; i < count; i++) {
        el.appendChild(firstChild.cloneNode(true))
      }

      const prevWillChange = el.style.willChange
      el.style.willChange = 'transform'

      const translateXPercent = 100 / count

      const tween = gsap.to(el, {
        xPercent: -translateXPercent,
        duration,
        ease: 'none',
        repeat: -1,
      })

      cleanup.push(() => {
        tween.kill()
        gsap.set(el, { clearProps: 'transform' })
        el.style.willChange = prevWillChange

        while (el.children.length > originalLen) {
          el.removeChild(el.lastElementChild as Element)
        }
      })
    })

    return () => {
      cleanup.forEach((fn) => fn())
    }
  }, [selector])
}
