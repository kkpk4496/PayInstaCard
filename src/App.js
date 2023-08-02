import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginPage from './components/LoginForm'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Transactions from './components/AllTransactions'
import Profile from './components/Profile'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/transactions" component={Transactions} />
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
