import React, { HTMLProps } from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

import { ptSans } from '@/components/Navbar'

import { VKLogoIcon } from '@/lib/icons/vk-icons'

const Logo: React.FC<HTMLProps<HTMLDivElement>> = (props) => (
  <div
    {...props}
    className={twMerge('flex items-center gap-1', props.className)}
  >
    <VKLogoIcon width={28} height={28} className="cursor-pointer" />
    <p className={classNames(ptSans.className, 'uppercase')}>VKONTAKTE</p>
  </div>
)

export default Logo
