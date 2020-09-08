import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Game from '../Game/Game'
import Home from '../Home/Home'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <Home />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/game' render={() => (
            <Game msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
        <footer>
          <p>
          Brandon DepalmaFarr: <a href="https://www.linkedin.com/in/brandon-depalmafarr/">LinkedIn Profile</a><br/>
          John Lucker: <a href="https://www.linkedin.com/in/john-lucker/">LinkedIn Profile</a><br/>
          Frank Luis-Ravelo: <a href="https://www.linkedin.com/in/franklr/">LinkedIn Profile</a><br/>
            <a href="https://github.com/SourceCode-Sorcerers/medieval-tactics-client">GitHub Project</a><br/>
            <a href="https://sites.google.com/mintbean.io/2020-07-10-multiplayer-hackath/home?authuser=2">Hackathon Prompt</a><br/>
          A turn based tactical combat game.
          </p>
        </footer>
      </Fragment>
    )
  }
}

export default App
