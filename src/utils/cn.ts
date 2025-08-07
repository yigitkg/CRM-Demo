import { type ClassValue } from 'clsx'

type ClassValueExtended = ClassValue | undefined | null | false

export function cn(...inputs: ClassValueExtended[]): string {
  const classes = inputs
    .filter(Boolean)
    .map(input => {
      if (typeof input === 'string') return input.trim()
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ')
      }
      return String(input)
    })
    .filter(Boolean)
    .join(' ')
  
  return classes.replace(/\s+/g, ' ').trim()
}