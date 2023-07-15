import { Chat, Contact } from '@/shared/types'

export const contacts: Contact[] = [
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

export const chats: Chat[] = contacts.map((contact) => ({
  contact: contact,
  lastMessage: {
    author: contact,
    text: 'hi there!',
    date: new Date(),
  },
}))
