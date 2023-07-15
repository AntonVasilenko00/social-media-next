import React, { HTMLProps } from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

import { VKLogoIcon } from '@/shared/icons/vk-icons'
import { ptSans } from '@/shared/components/layout/Header'

const LOGO_ICON_SIZE = 28

const LOGO_LABEL = 'VKONTAKTE'

const Logo: React.FC<HTMLProps<HTMLDivElement>> = (props) => (
  <div
    {...props}
    className={twMerge('flex items-center gap-1', props.className)}
  >
    <VKLogoIcon
      width={LOGO_ICON_SIZE}
      height={LOGO_ICON_SIZE}
      className="cursor-pointer"
    />
    <p className={classNames(ptSans.className, 'uppercase')}>{LOGO_LABEL}</p>
  </div>
)

export default Logo
