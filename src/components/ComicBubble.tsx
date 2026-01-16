import { useEffect, useRef, useState } from "react"

interface ComicBubbleProps {
  children: React.ReactNode
  quote: string
}

export function ComicBubble({ children, quote }: ComicBubbleProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState<"top" | "bottom">("bottom")
  const [horizontalOffset, setHorizontalOffset] = useState(0)
  const triggerRef = useRef<HTMLSpanElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isVisible || !triggerRef.current || !bubbleRef.current) return

    const updatePosition = () => {
      if (!triggerRef.current || !bubbleRef.current) return

      const triggerRect = triggerRef.current.getBoundingClientRect()
      const bubbleRect = bubbleRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const viewportWidth = window.innerWidth

      // Calculate horizontal offset to keep bubble within viewport
      const triggerCenterX = triggerRect.left + triggerRect.width / 2
      const bubbleHalfWidth = bubbleRect.width / 2
      const padding = 8 // Minimum padding from viewport edge
      
      let offset = 0
      // Check if bubble would overflow left
      if (triggerCenterX - bubbleHalfWidth < padding) {
        offset = padding - (triggerCenterX - bubbleHalfWidth)
      }
      // Check if bubble would overflow right
      else if (triggerCenterX + bubbleHalfWidth > viewportWidth - padding) {
        offset = (viewportWidth - padding) - (triggerCenterX + bubbleHalfWidth)
      }
      setHorizontalOffset(offset)

      // Check if there's enough space below
      const spaceBelow = viewportHeight - triggerRect.bottom
      const spaceAbove = triggerRect.top

      // Position above if not enough space below, or if more space above
      if (spaceBelow < bubbleRect.height + 20 && spaceAbove > spaceBelow) {
        setPosition("top")
      } else {
        setPosition("bottom")
      }
    }

    updatePosition()
    window.addEventListener("scroll", updatePosition, true)
    window.addEventListener("resize", updatePosition)

    return () => {
      window.removeEventListener("scroll", updatePosition, true)
      window.removeEventListener("resize", updatePosition)
    }
  }, [isVisible])

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help text-primary hover:text-glow transition-all"
      >
        {children}
      </span>

      {isVisible && (
        <div
          ref={bubbleRef}
          className={`absolute left-1/2 z-50 ${
            position === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
          style={{
            animation: "fadeIn 0.2s ease-in",
            transform: `translateX(calc(-50% + ${horizontalOffset}px))`,
          }}
        >
          <div className="relative bg-background border-2 border-primary shadow-[0_0_20px_hsl(38_100%_50%/0.3)] p-4 max-w-md w-[90vw] sm:w-[400px]">
            {/* Terminal header */}
            <div className="text-xs text-primary mb-2 font-terminal tracking-wider">
              [ ARCHIVED_QUOTE ]
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground font-mono">
              "{quote}"
            </p>
            
            {/* Terminal-style connector */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 ${
                position === "top" ? "top-full" : "bottom-full"
              }`}
            >
              <div
                className={`w-0 h-0 border-l-[12px] border-r-[12px] ${
                  position === "top"
                    ? "border-t-[12px] border-t-primary border-l-transparent border-r-transparent"
                    : "border-b-[12px] border-b-primary border-l-transparent border-r-transparent"
                }`}
              />
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] ${
                  position === "top"
                    ? "top-[2px] border-t-[10px] border-t-background border-l-transparent border-r-transparent"
                    : "bottom-[2px] border-b-[10px] border-b-background border-l-transparent border-r-transparent"
                }`}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(${position === "top" ? "10px" : "-10px"});
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </span>
  )
}

