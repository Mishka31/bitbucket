// import React, { useState } from 'react'
import HeroForm from './components/heroForm/heroForm'
import s from './App.module.css'

const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', '')
  // const [filter, setfilter] = useState('')

  // const lowerFilter = filter.toLowerCase()
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(lowerFilter)
  // )

  // const onFind = (e) => setfilter(e.target.value)

  const formSubmitHandler = (data) => console.log(data)
  // setContacts([...contacts, { id: uuidv4(), ...data }])

  // const onDelete = (id) =>
  //   setContacts((contacts) =>
  //     contacts.filter((contact) => contact.id !== id.target.id)
  //   )

  return (
    <div className={s.container}>
      <h1 className={s.titleH1}>New Superhero</h1>
      <HeroForm onSubmit={formSubmitHandler} />{' '}
      {/*onSubmit={formSubmitHandler} listArrey={contacts}*/}
      <h2 className={s.titleH2}>List of Superheros</h2>
      {/* <Filter value={filter} onSearch={onFind} />
      <ContactList contacts={filteredContacts} onDelete={onDelete} /> */}
    </div>
  )
}

export default App
