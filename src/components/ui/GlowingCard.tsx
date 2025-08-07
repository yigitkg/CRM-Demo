import { HTMLAttributes, forwardRef, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '../../utils/cn'

interface GlowingCardProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: string
  intensity?: 'low' | 'medium' | 'high'
  animate3D?: boolean
}

export const GlowingCard = forwardRef<HTMLDivElement, GlowingCardProps>(
  (
    {
      className,
      children,
      glowColor = 'rgba(59, 130, 246, 0.3)',
      intensity = 'medium',
      animate3D = false,
      ...props
    },
    ref
  ) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]))
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]))

    const intensityMap = {
      low: '0 0 20px',
      medium: '0 0 40px',
      high: '0 0 60px'
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!animate3D) return
      
      const rect = cardRef.current?.getBoundingClientRect()
      if (!rect) return

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    const handleMouseLeave = () => {
      if (!animate3D) return
      mouseX.set(0)
      mouseY.set(0)
    }

    return (
      <motion.div
        ref={cardRef}
        className={cn(
          'relative overflow-hidden rounded-xl',
          'transition-all duration-300',
          'hover:shadow-2xl',
          className
        )}
        style={{
          ...(animate3D && {
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          })
        }}
        whileHover={{
          boxShadow: `${intensityMap[intensity]} ${glowColor}`,
          scale: 1.02
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Glow effect overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    )
  }
)

GlowingCard.displayName = 'GlowingCard'