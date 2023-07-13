import React, { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import classNames from 'classnames'
import { NextPage } from 'next'

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

interface ContactProfilePictureProps extends HTMLProps<HTMLDivElement> {
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

const ContactsBar: React.FC<ContactsBarProps> = ({ contacts, ...props }) => {
  return (
    <div {...props}>
      <ul className="flex gap-2 overflow-x-scroll no-scrollbar">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center cursor-pointer hover:underline"
          >
            <div className="rounded-3xl">
              <ContactProfilePicture contact={contact} />
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

interface Group extends Contact {}

interface Message {
  author: Contact
  text: string
  date: Date
}

interface Chat {
  contact: Contact | Group
  lastMessage: Message
}

interface ChatsProps extends HTMLProps<HTMLDivElement> {
  chats: Chat[]
}

const Chats: React.FC<ChatsProps> = ({ chats, ...props }) => {
  return (
    <div>
      <ul>
        {chats.map((chat, index) => (
          <li
            key={index}
            className="flex p-2 gap-1 hover:bg-slate-100 cursor-pointer rounded"
          >
            {chat.contact.imageUrl ? (
              <Image src={chat.contact.imageUrl} alt={chat.contact.name} />
            ) : (
              <ProfileIcon width={64} height={64} />
            )}
            <div className="w-full p-1">
              <div className="flex justify-between w-full">
                <span>{chat.contact.name}</span>
                <span>{chat.lastMessage.date.toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <ContactProfilePicture iconSize={32} contact={chat.contact} />
                {chat.lastMessage.text}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const chats: Chat[] = contacts.map((contact) => ({
  contact: contact,
  lastMessage: {
    author: contact,
    text: 'hi there!',
    date: new Date(),
  },
}))

const MessagerPage: NextPage = () => {
  return (
    <div className={twMerge('w-full flex gap-2')}>
      <section className="bg-white rounded-md p-2 w-2/3 max-md:w-full">
        <SearchBar className="m-2" />
        <ContactsBar contacts={contacts} className="m-1" />
        <hr />
        <Chats chats={chats} />
      </section>
      <aside className="bg-white rounded-md p-2 w-1/3 max-md:hidden h-fit">
        <ul>
          <li className="p-2 rounded cursor-pointer hover:bg-slate-100">
            all chats
          </li>
          <li className="p-2 rounded cursor-pointer hover:bg-slate-100">
            unread
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default MessagerPage
