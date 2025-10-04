'use client'

import React from 'react'
import Link from 'next/link'

type ScrollToTopLinkProps = React.ComponentProps<typeof Link>

const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ onClick, ...props }) => {
  return (
    <Link
      {...props}
      onClick={(event) => {
        onClick?.(event)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    />
  )
}

export default ScrollToTopLink
