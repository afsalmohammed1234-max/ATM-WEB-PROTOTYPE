import React, { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delayMs?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  threshold?: number
}

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
  distance = 24,
  threshold = 0.12,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If reduced motion is preferred, show immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) {
              observer.unobserve(domRef.current)
            }
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      },
    )

    const currentElem = domRef.current
    if (currentElem) {
      observer.observe(currentElem)
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem)
    }
  }, [threshold])

  const getTransform = () => {
    if (isVisible) return "none"
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`
      case "down":
        return `translate3d(0, -${distance}px, 0)`
      case "left":
        return `translate3d(${distance}px, 0, 0)`
      case "right":
        return `translate3d(-${distance}px, 0, 0)`
      case "none":
      default:
        return "none"
    }
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        transform: getTransform(),
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  )
}
