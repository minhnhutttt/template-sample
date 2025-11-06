'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'

type SlideThemeContextValue = {
  activeIndex: number
  accentColor: SlideColor
  setActiveSlide: (index: number) => void
}

export const SLIDE_COLORS = ['#ffe000', '#b76eff', '#f7bbce'] as const
export type SlideColor = (typeof SLIDE_COLORS)[number]

const SlideThemeContext = createContext<SlideThemeContextValue | null>(null)

export function SlideThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const value = useMemo<SlideThemeContextValue>(() => {
    const safeIndex =
      ((activeIndex % SLIDE_COLORS.length) + SLIDE_COLORS.length) %
      SLIDE_COLORS.length
    const color = SLIDE_COLORS[safeIndex] as SlideColor
    return {
      activeIndex: safeIndex,
      accentColor: color,
      setActiveSlide: setActiveIndex,
    }
  }, [activeIndex])

  return (
    <div style={{ ['--accent' as string]: value.accentColor }}>
      <SlideThemeContext.Provider value={value}>
        {children}
      </SlideThemeContext.Provider>
    </div>
  )
}

export function useSlideTheme() {
  const ctx = useContext(SlideThemeContext)
  if (!ctx)
    throw new Error('useSlideTheme must be used within <SlideThemeProvider>')
  return ctx
}
