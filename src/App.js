import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import MoneyTransactions from './components/MoneyTransactions'

const App = () => {

  return(
    <Router>
      <Switch>
        <Route path="/sign-in" component= {SignIn}></Route>
        <Route path="/sign-up" component= {SignUp}></Route>
        <Route path="/money-transactions" component= {MoneyTransactions}></Route>
      </Switch>
    </Router>
  )
}

export default App
