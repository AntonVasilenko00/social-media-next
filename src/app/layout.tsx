import { Roboto } from 'next/font/google'
import '@/app/styles/globals.css'

import Navbar from '@/components/Navbar'
import SidebarNav from '@/components/SidebarNav'
import ClientSessionProvider from '@/components/ClientSessionProvider'

import type { Metadata } from 'next'

const font = Roboto({ subsets: ['latin'], weight: '300' })

export const metadata: Metadata = {
  title: 'InContact',
  description: 'New Social Media app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <ClientSessionProvider>
          <Navbar />
          <main className="bg-slate-100">
            <div className="container mx-auto flex gap-2 py-4 min-h-screen px-2">
              <SidebarNav className="w-2/12 max-sm:hidden max-md:w-3/12" />
              <section className="w-10/12 max-sm:w-full max-md:w-9/12">
                {children}
              </section>
            </div>
          </main>
        </ClientSessionProvider>
      </body>
    </html>
  )
}
