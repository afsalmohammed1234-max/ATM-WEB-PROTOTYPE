import React, { useEffect, useRef, useState } from "react"

interface TrailPoint {
  x: number
  y: number
  id: number
  size: number
  opacity: number
  isDark: boolean
}

// Cursor styling configurations
const CURSOR_THEMES = {
  // Gold effect for darker background tones
  gold: {
    primary: "#E8B84A",
    ringBorderHover: "rgba(232, 184, 74, 0.95)",
    ringBorderNormal: "rgba(232, 184, 74, 0.55)",
    ringBgHover: "rgba(232, 184, 74, 0.12)",
    ringBgClick: "rgba(232, 184, 74, 0.25)",
    ringShadowHover:
      "0 0 16px rgba(232, 184, 74, 0.35), inset 0 0 8px rgba(232, 184, 74, 0.15)",
    ringShadowNormal: "0 0 10px rgba(232, 184, 74, 0.15)",
    dotGlow: "0 0 8px #E8B84A, 0 0 16px rgba(232, 184, 74, 0.6)",
    trailGlow: "0 0 8px rgba(232, 184, 74, 0.6)",
  },
  // Dark Neon Pink effect for lighter color backgrounds
  neonPink: {
    primary: "#9B0E4E",
    ringBorderHover: "rgba(155, 14, 78, 0.95)",
    ringBorderNormal: "rgba(155, 14, 78, 0.6)",
    ringBgHover: "rgba(155, 14, 78, 0.12)",
    ringBgClick: "rgba(155, 14, 78, 0.22)",
    ringShadowHover:
      "0 0 16px rgba(155, 14, 78, 0.35), inset 0 0 8px rgba(155, 14, 78, 0.15)",
    ringShadowNormal: "0 0 10px rgba(155, 14, 78, 0.15)",
    dotGlow: "0 0 8px #9B0E4E, 0 0 14px rgba(155, 14, 78, 0.55)",
    trailGlow: "0 0 8px rgba(155, 14, 78, 0.55)",
  },
}

/**
 * Analyzes the DOM hierarchy at the cursor position to determine if the effective
 * background is a darker tone (returns true -> gold) or a lighter colour (returns false -> dark neon pink).
 */
function checkIsDarkBackground(element: HTMLElement | null): boolean {
  let curr: HTMLElement | null = element

  while (curr && curr !== document.documentElement && curr !== document.body) {
    // 1. Direct class check for rapid detection matching project theme
    const className = typeof curr.className === "string" ? curr.className : ""

    if (className) {
      // Explicit light backgrounds in the project design system (white, pastel crimson, gold)
      if (
        className.includes("bg-white") ||
        className.includes("bg-[#F7E8EC]") ||
        className.includes("bg-[#FCF0F3]") ||
        className.includes("bg-[#FAFBFB]") ||
        className.includes("bg-[#E8B84A]") ||
        className.includes("bg-[#F3CA68]") ||
        className.includes("bg-slate-100") ||
        className.includes("bg-gray-100")
      ) {
        return false
      }

      // Explicit dark backgrounds in the project design system (midnight dark neon pink, dark accents)
      if (
        className.includes("bg-[#1E0412]") ||
        className.includes("bg-[#9B0E4E]") ||
        className.includes("bg-[#2D071B]") ||
        className.includes("bg-[#16020D]") ||
        className.includes("from-[#1E0412]") ||
        className.includes("from-[#9B0E4E]") ||
        className.includes("from-[#2D071B]") ||
        className.includes("from-[#16020D]") ||
        className.includes("bg-slate-900") ||
        className.includes("bg-black")
      ) {
        return true
      }
    }

    // 2. Computed Style detection (handles arbitrary colors, overlays, rgba, and gradients)
    try {
      const style = window.getComputedStyle(curr)

      // Check background-color
      const bgColor = style.backgroundColor
      if (
        bgColor &&
        bgColor !== "transparent" &&
        bgColor !== "rgba(0, 0, 0, 0)"
      ) {
        const rgbMatch = bgColor.match(
          /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/,
        )
        if (rgbMatch) {
          const r = parseInt(rgbMatch[1], 10)
          const g = parseInt(rgbMatch[2], 10)
          const b = parseInt(rgbMatch[3], 10)
          const a = rgbMatch[4] !== undefined ? parseFloat(rgbMatch[4]) : 1

          if (a > 0.2) {
            // Perceived luminance formula (ITU-R BT.601)
            const brightness = (r * 299 + g * 587 + b * 114) / 1000
            return brightness < 135
          }
        }
      }

      // Check background-image (e.g. CSS gradients)
      const bgImage = style.backgroundImage
      if (bgImage && bgImage !== "none" && bgImage.includes("gradient")) {
        const rgbMatches = [
          ...bgImage.matchAll(/rgba?\((\d+),\s*(\d+),\s*(\d+)/g),
        ]
        if (rgbMatches.length > 0) {
          let sumBrightness = 0
          for (const m of rgbMatches) {
            const r = parseInt(m[1], 10)
            const g = parseInt(m[2], 10)
            const b = parseInt(m[3], 10)
            sumBrightness += (r * 299 + g * 587 + b * 114) / 1000
          }
          const avgBrightness = sumBrightness / rgbMatches.length
          return avgBrightness < 135
        }
      }

      // 3. Semantic dark landmarks
      if (curr.tagName === "HEADER" || curr.tagName === "FOOTER") {
        return true
      }
    } catch {
      // Ignore cross-origin or detached node issues
    }

    curr = curr.parentElement
  }

  // Base page body is white (#FFFFFF)
  return false
}

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isDarkBg, setIsDarkBg] = useState(true)

  // Mouse coords & animation state refs
  const mousePos = useRef({ x: -100, y: -100 })
  const followerPos = useRef({ x: -100, y: -100 })
  const prevMousePos = useRef({ x: -100, y: -100 })
  const velocity = useRef({ x: 0, y: 0, speed: 0, angle: 0 })
  const animationFrameId = useRef<number | null>(null)

  // Performance tracking refs to prevent redundant React re-renders
  const isVisibleRef = useRef(false)
  const currentIsDarkRef = useRef(true)
  const lastTargetRef = useRef<HTMLElement | null>(null)

  // DOM elements refs for direct performant transform updates (60-120 FPS)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [trails, setTrails] = useState<TrailPoint[]>([])
  const trailCounter = useRef(0)

  useEffect(() => {
    // Check if device supports fine hover (desktop / trackpad / mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (!mediaQuery.matches) {
      return // Do not render on touch devices (phones/tablets)
    }

    setIsEnabled(true)

    let lastTrailTime = 0

    const updateTargetContext = (target: HTMLElement | null) => {
      if (!target || target === lastTargetRef.current) return
      lastTargetRef.current = target

      // Check if hovering over interactive elements
      const isInteractive = Boolean(
        target.closest(
          'button, a, input, textarea, select, [role="button"], label, .interactive-item, [data-interactive="true"]',
        ),
      )
      setIsHovered(isInteractive)

      // Check if background tone is darker or lighter
      const isDark = checkIsDarkBackground(target)
      if (isDark !== currentIsDarkRef.current) {
        currentIsDarkRef.current = isDark
        setIsDarkBg(isDark)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisibleRef.current) {
        isVisibleRef.current = true
        setIsVisible(true)
      }

      const target =
        e.target as HTMLElement | null ||
        document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null
      updateTargetContext(target)

      // Add trailing stardust particle during movement
      const now = performance.now()
      if (now - lastTrailTime > 45) {
        lastTrailTime = now
        trailCounter.current += 1
        const newPoint: TrailPoint = {
          x: e.clientX,
          y: e.clientY,
          id: trailCounter.current,
          size: Math.random() * 4 + 3,
          opacity: 0.45,
          isDark: currentIsDarkRef.current,
        }
        setTrails((prev) => [...prev.slice(-5), newPoint])
      }
    }

    const handleScroll = () => {
      if (mousePos.current.x < 0 || mousePos.current.y < 0) return
      const target = document.elementFromPoint(
        mousePos.current.x,
        mousePos.current.y,
      ) as HTMLElement | null
      updateTargetContext(target)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const handleMouseLeave = () => {
      isVisibleRef.current = false
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      isVisibleRef.current = true
      setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    // Smooth Lerp Animation Loop
    const renderLoop = () => {
      // Calculate velocity
      const vx = mousePos.current.x - prevMousePos.current.x
      const vy = mousePos.current.y - prevMousePos.current.y
      const speed = Math.sqrt(vx * vx + vy * vy)
      const angle = Math.atan2(vy, vx) * (180 / Math.PI)

      velocity.current = { x: vx, y: vy, speed, angle }
      prevMousePos.current = { ...mousePos.current }

      // Lerp outer follower ring with smooth damping
      const ease = 0.16
      followerPos.current.x +=
        (mousePos.current.x - followerPos.current.x) * ease
      followerPos.current.y +=
        (mousePos.current.y - followerPos.current.y) * ease

      // Update dot transform instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`
      }

      // Update ring transform with slight velocity stretch & angle
      if (ringRef.current) {
        const stretch = Math.min(speed * 0.012, 0.3)
        ringRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${1 + stretch}, ${1 - stretch * 0.5})`
      }

      animationFrameId.current = requestAnimationFrame(renderLoop)
    }

    animationFrameId.current = requestAnimationFrame(renderLoop)

    // Clean up trailing dots
    const trailInterval = setInterval(() => {
      setTrails((prev) =>
        prev
          .map((t) => ({ ...t, opacity: t.opacity - 0.08, size: t.size * 0.9 }))
          .filter((t) => t.opacity > 0.05),
      )
    }, 40)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current)
      clearInterval(trailInterval)
    }
  }, [])

  if (!isEnabled) return null

  const currentTheme = isDarkBg ? CURSOR_THEMES.gold : CURSOR_THEMES.neonPink

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[99999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Subtle Trailing Particles (individual points preserve their color at creation) */}
      {trails.map((t) => {
        const pointTheme = t.isDark
          ? CURSOR_THEMES.gold
          : CURSOR_THEMES.neonPink
        return (
          <div
            key={t.id}
            className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75"
            style={{
              left: `${t.x}px`,
              top: `${t.y}px`,
              width: `${t.size}px`,
              height: `${t.size}px`,
              opacity: t.opacity,
              backgroundColor: pointTheme.primary,
              boxShadow: pointTheme.trailGlow,
            }}
          />
        )
      })}

      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform transition-[width,height,border-color,background-color,box-shadow] duration-200 ease-out"
        style={{
          width: isClicked ? "26px" : isHovered ? "56px" : "36px",
          height: isClicked ? "26px" : isHovered ? "56px" : "36px",
          borderRadius: "50%",
          border: isHovered
            ? `2px solid ${currentTheme.ringBorderHover}`
            : `1.5px solid ${currentTheme.ringBorderNormal}`,
          backgroundColor: isHovered
            ? currentTheme.ringBgHover
            : isClicked
              ? currentTheme.ringBgClick
              : "transparent",
          boxShadow: isHovered
            ? currentTheme.ringShadowHover
            : currentTheme.ringShadowNormal,
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
      >
        {/* Subtle crosshair indicator when hovering interactive items */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
              style={{ backgroundColor: currentTheme.primary }}
            />
          </div>
        )}
      </div>

      {/* Inner Precision Lead Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform transition-[opacity,width,height,background-color,box-shadow] duration-200 ease-out"
        style={{
          width: isHovered ? "4px" : isClicked ? "10px" : "7px",
          height: isHovered ? "4px" : isClicked ? "10px" : "7px",
          borderRadius: "50%",
          backgroundColor: currentTheme.primary,
          boxShadow: currentTheme.dotGlow,
          opacity: isHovered ? 0.85 : 1,
        }}
      />
    </div>
  )
}
