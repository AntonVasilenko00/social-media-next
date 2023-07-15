import { Roboto } from 'next/font/google'
import '@/app/styles/globals.css'
import classNames from 'classnames'

import GlobalProvider from '@/providers/'

import Header from '@/components/Header'
import SidebarNav from '@/components/SidebarNav'

import type { Metadata } from 'next'

const font = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

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
    <html lang="en">
      <body className={classNames(font.className, 'font-light')}>
        <GlobalProvider>
          <Header />
          <main className="bg-slate-100 min-h-screen">
            <div className="container mx-auto flex gap-2 py-4  px-2">
              <SidebarNav className="w-2/12 max-sm:hidden max-md:w-3/12" />
              <section className="w-10/12 max-sm:w-full max-md:w-9/12">
                {children}
              </section>
            </div>
          </main>
        </GlobalProvider>
      </body>
    </html>
  )
}
