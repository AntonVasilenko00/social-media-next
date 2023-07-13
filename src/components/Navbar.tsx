import React, { HTMLProps } from 'react'
import { PT_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import Logo from '@/components/Logo'
import SearchBar from '@/components/SearchBar'
import Navigation from '@/components/Navigation'

export const ptSans = PT_Sans({
  subsets: ['cyrillic'],
  weight: '700',
})

const Navbar: React.FC<HTMLProps<HTMLHeadElement>> = (props) => {
  return (
    <header
      {...props}
      className={twMerge(
        'flex items-center container mx-auto px-2',
        props.className,
      )}
    >
      <div className="flex items-center w-full h-12 gap-2 max-sm:justify-between">
        <Logo className="w-2/12 max-md:w-3/12" />
        <SearchBar className="w-4/12 max-sm:w-5/12 max-md:w-4/12 max-sm:hidden" />
        <Navigation className="w-6/12 max-sm:hidden max-md:w-5/12" />
      </div>
    </header>
  )
}

export default Navbar