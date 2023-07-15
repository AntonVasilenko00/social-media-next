'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

const ClientThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}

export default ClientThemeProvider
