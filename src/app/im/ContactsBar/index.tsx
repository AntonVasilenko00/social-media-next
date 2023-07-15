import { HTMLProps } from 'react'

import { Contact } from '@/shared/types'
import ContactProfilePicture from '@/shared/components/ContactProfilePicture'

interface ContactsBarProps extends HTMLProps<HTMLDivElement> {
  contacts: Contact[]
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

export default ContactsBar
