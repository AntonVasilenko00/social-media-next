import React, { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import classNames from 'classnames'

import SearchBar from '@/components/SearchBar'

import { ProfileIcon } from '@/lib/icons/vk-icons'

interface Contact {
  name: string
  imageUrl?: string
  isOnline: boolean
}

interface ContactsBarProps extends HTMLProps<HTMLDivElement> {
  contacts: Contact[]
}

export const ContactsBar: React.FC<ContactsBarProps> = ({
  contacts,
  ...props
}) => {
  return (
    <div {...props}>
      <ul className="flex gap-2 overflow-x-scroll no-scrollbar">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center cursor-pointer hover:underline"
          >
            <div className="rounded-3xl">
              {contact.imageUrl ? (
                <Image src={contact.imageUrl} alt={contact.name} />
              ) : (
                <ProfileIcon
                  width={64}
                  height={64}
                  className={classNames(
                    {
                      'text-vk-text-primary': contact.isOnline,
                    },
                    'text-vk-icon',
                  )}
                />
              )}
            </div>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const contacts: Contact[] = [
  { name: 'Max', isOnline: false },
  { name: 'Vasya', isOnline: true },
  { name: 'Oleg', isOnline: false },
  { name: 'Alex', isOnline: true },
  { name: 'Alex', isOnline: true },
  { name: 'Alex', isOnline: true },
  { name: 'Alex', isOnline: true },
  { name: 'Alex', isOnline: true },
  { name: 'Alex', isOnline: true },
  { name: 'Alex', isOnline: true },
  { name: 'Alex', isOnline: true },
]

const Feed: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={twMerge('w-full flex gap-2 items-center')}>
      <section className="bg-white rounded-md p-2 w-2/3 max-sm:w-full">
        <SearchBar className="m-2" />
        <ContactsBar contacts={contacts} className="m-1" />
      </section>
      <aside className="bg-white rounded-md p-2 w-1/3 max-sm:hidden">
        filter
      </aside>
    </div>
  )
}

export default Feed
