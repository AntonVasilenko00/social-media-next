'use client'

import ClientSessionProvider from '@/shared/providers/ClientSessionProvider'
import ClientThemeProvider from '@/shared/providers/ClientThemeProvider'

const GlobalProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ClientThemeProvider>
    <ClientSessionProvider>{children}</ClientSessionProvider>
  </ClientThemeProvider>
)

export default GlobalProvider
