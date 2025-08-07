import { useEffect, useState, useRef } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        setIsIntersecting(isElementIntersecting)

        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }

        if (triggerOnce && isElementIntersecting) {
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce, hasIntersected])

  return {
    elementRef,
    isIntersecting,
    hasIntersected,
    isVisible: triggerOnce ? hasIntersected : isIntersecting
  }
}