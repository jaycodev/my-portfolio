'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(ids?: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elems: HTMLElement[] =
      ids && ids.length
        ? (ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[])
        : (Array.from(document.querySelectorAll('section[id]')) as HTMLElement[])

    if (elems.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '0px 0px -30% 0px',
      }
    )

    elems.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
