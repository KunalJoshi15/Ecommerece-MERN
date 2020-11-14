import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// All the react containers are to be taken using the library we have by default

const Header = () => {
    return (
        <header>
            
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Proshop</Navbar.Brand>
              </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to="/cart">
      <Nav.Link className='fa fa-shopping-cart' href="/cart">Cart</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
      <Nav.Link className='fa fa-user' href="/login">Login</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </header>
    )
}

export default Header
