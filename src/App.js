// import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HeroForm from './components/heroForm/heroForm'
import s from './App.module.css'
import HeroDetails from './components/HeroDetails/HeroDetails'

const App = () => {
  return (
    <div className={s.container}>
      <Switch>
        <Route path="/home/:slug" component={HeroDetails} />
        <Route path="/home" exact component={HeroForm} />
        <Redirect to="/home" />
      </Switch>
    </div>
  )
}

export default App
