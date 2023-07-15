import React from 'react'
import { twMerge } from 'tailwind-merge'
import { NextPage } from 'next'

import SearchBar from '@/shared/components/SearchBar'

import ChatList from '@/app/im/ChatList'
import ContactsBar from '@/app/im/ContactsBar'
import { chats, contacts } from '@/app/im/mocks/data'

const MessagerPage: NextPage = () => {
  return (
    <div className={twMerge('w-full flex gap-2')}>
      <section className="bg-white rounded-md p-2 w-2/3 max-md:w-full">
        <SearchBar className="m-2" />
        <ContactsBar contacts={contacts} className="m-1" />
        <hr />
        <ChatList chats={chats} />
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
