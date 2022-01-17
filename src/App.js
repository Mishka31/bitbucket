// import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HeroForm from './components/heroForm/heroForm'
import s from './App.module.css'
import HeroDetails from './components/HeroDetails/HeroDetails'

const App = () => {
  // const [contacts, setContacts] = useLocalStorage("contacts", "");
  // const [filter, setfilter] = useState('')

  // const lowerFilter = filter.toLowerCase()
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(lowerFilter)
  // )

  // const onFind = (e) => setfilter(e.target.value)

  // const formSubmitHandler = (data) => console.log(data)
  // setContacts([...contacts, { id: uuidv4(), ...data }])

  // const onDelete = (id) =>
  //   setContacts((contacts) =>
  //     contacts.filter((contact) => contact.id !== id.target.id)
  //   )

  // <Route path="/home/:slug" component={FilmDetails} />
  // <Route path="/search/:slug" component={FilmDetails} />
  // <Route path="/home" exact component={HomePage} />
  // <Route path="/search" exact component={Search} />
  // <Redirect to="/" />

  return (
    <div className={s.container}>
      <Switch>
        <Route path="/home" component={HeroForm} />
        <Route path="/:slug" exact component={HeroDetails} />
        <Redirect to="/home" />
      </Switch>
      {/* <Filter value={filter} onSearch={onFind} /> */}
      {/* <HeroList /> contacts={filteredContacts} onDelete={onDelete} */}
    </div>
  )
}

export default App
