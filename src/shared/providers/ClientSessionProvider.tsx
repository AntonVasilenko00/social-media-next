'use client'

import { SessionProvider } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const ClientSessionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default ClientSessionProvider
