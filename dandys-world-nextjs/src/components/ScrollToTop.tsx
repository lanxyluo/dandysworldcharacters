'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ScrollToTop: React.FC = () => {
  const pathname = usePathname()

  useEffect(() => {
    // scroll to the top every time the route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return null // component does not render any markup
}

export default ScrollToTop
