'use client'

import ClientSessionProvider from '@/providers/ClientSessionProvider'
import ClientThemeProvider from '@/providers/ClientThemeProvider'

const GlobalProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ClientThemeProvider>
    <ClientSessionProvider>{children}</ClientSessionProvider>
  </ClientThemeProvider>
)

export default GlobalProvider
