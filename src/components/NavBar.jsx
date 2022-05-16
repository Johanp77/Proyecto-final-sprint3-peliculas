
import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/loginActions'

export const NavBar = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Navbar bg="black" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#"><img src="https://res.cloudinary.com/dzkollux2/image/upload/v1652671306/Sprint3/logo-blockBuster_ueod8z.png" alt="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" >Todas</Nav.Link>
              <Nav.Link href="#action2">Más valoradas</Nav.Link>
              <Nav.Link href="#action2">Menos valoradas</Nav.Link>
              <NavDropdown title="Info Usuario" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Info</NavDropdown.Item>
                <NavDropdown.Item href="#action4" >Cuenta</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" onClick={()=>dispatch(logoutAsync())}>
                Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="warning">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )

}

export default NavBar