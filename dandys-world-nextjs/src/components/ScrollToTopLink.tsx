'use client'

import React from 'react'
import Link from 'next/link'

type ScrollToTopLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  to: React.ComponentProps<typeof Link>['href']
}

const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ to, onClick, ...props }) => {
  return (
    <Link
      {...props}
      href={to}
      onClick={(event) => {
        onClick?.(event)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    />
  )
}

export default ScrollToTopLink
