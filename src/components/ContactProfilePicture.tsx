import React, { HTMLProps } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { ProfileIcon } from '@/lib/icons/vk-icons'
import { Contact } from '@/lib/types'

export interface ContactProfilePictureProps extends HTMLProps<HTMLDivElement> {
  contact: Contact
  iconSize?: number
}
const ContactProfilePicture: React.FC<ContactProfilePictureProps> = ({
  contact,
  iconSize = 64,
  ...props
}) => {
  return (
    <div {...props}>
      {contact.imageUrl ? (
        <Image src={contact.imageUrl} alt={contact.name} />
      ) : (
        <ProfileIcon
          width={iconSize}
          height={iconSize}
          className={classNames(
            {
              'text-vk-text-primary': contact.isOnline,
            },
            'text-vk-icon',
          )}
        />
      )}
    </div>
  )
}

export default ContactProfilePicture
