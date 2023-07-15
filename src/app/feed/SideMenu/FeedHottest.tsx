import { HTMLProps } from 'react'

import { FireIcon } from '@/shared/icons/vk-icons'
import Checkbox from '@/shared/components/ui/Checkbox'

const FIRE_ICON_SIZE = 18

const LABEL = 'Hottest first'

interface FeedHottestProps extends HTMLProps<HTMLInputElement> {}

const FeedHottest: React.FC<FeedHottestProps> = () => {
  return (
    <label className="my-2 p-2 flex items-center bg-white rounded cursor-pointer w-full">
      <FireIcon
        width={FIRE_ICON_SIZE}
        height={FIRE_ICON_SIZE}
        className="text-red-500"
      />
      <p className="mx-2 select-none">{LABEL}</p>
      <Checkbox />
    </label>
  )
}

export default FeedHottest
