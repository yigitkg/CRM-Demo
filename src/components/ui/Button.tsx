import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import { cn } from '../../utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  animate?: boolean
}

const buttonVariants = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white border-transparent',
  secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white border-transparent',
  outline: 'bg-transparent hover:bg-primary-50 text-primary-600 border-primary-600',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-600 border-transparent',
  danger: 'bg-red-600 hover:bg-red-700 text-white border-transparent'
}

const sizeVariants = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg'
}

const buttonAnimation: Variants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      animate = true,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const ButtonComponent = animate ? motion.button : 'button'
    const motionProps = animate ? buttonAnimation : {}

    return (
      <ButtonComponent
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium border rounded-lg',
          'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          buttonVariants[variant],
          sizeVariants[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || isLoading}
        {...(animate && motionProps)}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </ButtonComponent>
    )
  }
)

Button.displayName = 'Button'