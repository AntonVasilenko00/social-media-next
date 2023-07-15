import { HTMLProps, SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>
export type Icon = React.FC<IconProps>

export interface Contact {
  name: string
  imageUrl?: string
  isOnline: boolean
}

export interface Group extends Contact {}

export interface Message {
  author: Contact
  text: string
  date: Date
}

export interface Chat {
  contact: Contact
  lastMessage: Message
}

export interface ChatsProps extends HTMLProps<HTMLDivElement> {
  chats: Chat[]
}

export type Author = Contact | Group

export interface Story {
  author: Author
  previewImage?: string
}

export interface Asset {
  type: 'image' | 'music' | 'video'
  url: string
}

export interface Post {
  author: Author
  datetimePosted: Date
  text: string
  likesNumber: number
  commentsNumber: number
  repostsNumber: number
  views: number
  assets?: Asset[]
}
