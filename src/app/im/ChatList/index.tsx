import { HTMLProps } from 'react'
import Image from 'next/image'

import { ProfileIcon } from '@/shared/icons/vk-icons'
import { Chat } from '@/shared/types'
import ContactProfilePicture from '@/shared/components/ContactProfilePicture'

interface ChatsProps extends HTMLProps<HTMLUListElement> {
  chats: Chat[]
}

const ChatList: React.FC<ChatsProps> = ({ chats, ...props }) => {
  return (
    <ul {...props}>
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
  )
}

export default ChatList
