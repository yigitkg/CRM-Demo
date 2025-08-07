import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

interface ParticleBackgroundProps {
  variant?: 'default' | 'minimal' | 'cosmic' | 'network'
  className?: string
}

export const ParticleBackground = ({ 
  variant = 'default',
  className = ''
}: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const getParticleOptions = () => {
    const baseOptions = {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: variant === 'cosmic' ? ['#3b82f6', '#8b5cf6', '#06d6a0'] : '#3b82f6',
        },
        links: {
          color: '#3b82f6',
          distance: 150,
          enable: variant === 'network',
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: 'none' as const,
          enable: true,
          outModes: {
            default: 'bounce' as const,
          },
          random: false,
          speed: variant === 'minimal' ? 1 : 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: variant === 'minimal' ? 30 : variant === 'network' ? 50 : 80,
        },
        opacity: {
          value: variant === 'minimal' ? 0.3 : 0.5,
        },
        shape: {
          type: 'circle' as const,
        },
        size: {
          value: { min: 1, max: variant === 'cosmic' ? 4 : 3 },
        },
      },
      detectRetina: true,
    }

    if (variant === 'cosmic') {
      return {
        ...baseOptions,
        particles: {
          ...baseOptions.particles,
          move: {
            ...baseOptions.particles.move,
            speed: 3,
            outModes: {
              default: 'out' as const,
            },
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 2,
              size_min: 1,
            },
          },
        },
      }
    }

    return baseOptions
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={getParticleOptions()}
      className={`absolute inset-0 -z-10 ${className}`}
    />
  )
}