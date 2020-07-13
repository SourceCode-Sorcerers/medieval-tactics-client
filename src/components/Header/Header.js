import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="md">
    <div className="container">
      <Navbar.Brand href="#">
        Medieval Tactics
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

export default Header
