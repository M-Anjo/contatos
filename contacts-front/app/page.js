'use client'

import { useState } from 'react'

import importedContacts from './Contacts'

let contacts = importedContacts

export default function Home () {
  let [contactList, setContactList] = useState(MakeContactList())
  let key = contacts.length + 1

  function Header() {
    return (
      <header>
        <button onClick={() => AddContact()}>Add Contact</button>
      </header>
    )
  }

  function RemoveContact (keyToRemove) {
    contacts = contacts.filter(contact => contact.key !== keyToRemove)
    setContactList(MakeContactList)
  }

  function AddContact () {
    const name = prompt("name: ")
    const phone = prompt("phone: ")
    contacts = [...contacts, {key, name, phone}]
    key++
    setContactList(MakeContactList)
  }

  function MakeContactList() { 
    return (
      contacts.map(contact =>( 
          <li key={contact.key}>
	    <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <button onClick={() => RemoveContact(contact.key)}>Remove Contact</button>
          </li>
      ))
    )
  }

  return (
    <main>
      <Header/>
      <ul>
        {contactList}
      </ul>
    </main>
  )
}
