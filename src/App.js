// import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HeroForm from './components/heroForm/heroForm'
import s from './App.module.css'
import HeroDetails from './components/HeroDetails/HeroDetails'

const App = () => {
  return (
    <div className={s.container}>
      <Switch>
        <Route path="/" exact component={HeroForm} />
        <Route path="/:slug" component={HeroDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
