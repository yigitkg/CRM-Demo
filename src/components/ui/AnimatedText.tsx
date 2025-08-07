import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  variant?: 'fadeIn' | 'slideUp' | 'typewriter' | 'wave'
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  },
  wave: {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        repeatDelay: 2
      }
    })
  }
}

export const AnimatedText = ({ 
  text, 
  className, 
  delay = 0, 
  variant = 'slideUp' 
}: AnimatedTextProps) => {
  const letters = Array.from(text)

  if (variant === 'typewriter') {
    return (
      <motion.span
        className={className}
        initial={{ width: 0 }}
        animate={{ width: 'auto' }}
        transition={{ duration: text.length * 0.1, delay }}
        style={{ overflow: 'hidden', display: 'inline-block', whiteSpace: 'nowrap' }}
      >
        {text}
      </motion.span>
    )
  }

  return (
    <motion.span
      className={cn('inline-block', className)}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={variants[variant]}
          custom={i}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface AnimatedParagraphProps {
  children: string
  className?: string
  delay?: number
}

export const AnimatedParagraph = ({ 
  children, 
  className, 
  delay = 0 
}: AnimatedParagraphProps) => {
  const words = children.split(' ')

  return (
    <motion.p
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: 'easeOut' }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}