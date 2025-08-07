'use client'

import Image from 'next/image'
import { useTheme } from './theme-provider'

interface ThemeLogoProps {
  width?: number
  height?: number
  className?: string
  alt?: string
}

export function ThemeLogo({
  width = 80,
  height = 80,
  className = 'rounded',
  alt = 'Swing! Logo',
}: ThemeLogoProps) {
  const { theme } = useTheme()

  // Determine which logo to show based on theme
  const getLogoSrc = () => {
    if (theme === 'dark') {
      return '/images/Swing.webp'
    }
    // For light mode or system theme (which defaults to light)
    return '/images/logo-color.png'
  }

  return (
    <Image
      src={getLogoSrc()}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}
