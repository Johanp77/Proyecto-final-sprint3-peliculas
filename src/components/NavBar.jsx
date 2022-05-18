import { getAuth } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../redux/actions/loginActions';
import styled from 'styled-components';
import MoviesGrid, { movieFilterMax, movieFilterMin } from './MoviesGrid';


const Photo = styled.img`
  border-radius: 50%;
  width: 25px;
`

export const NavBar = () => {

  const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
}


  const userPhoto = <Photo src={user.photoURL} alt="user" />
  const userName = <span>{user.displayName}</span>

  const dispatch = useDispatch()
  return (
    <div>
      <Navbar bg="black" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/home"><img src="https://res.cloudinary.com/dzkollux2/image/upload/v1652671306/Sprint3/logo-blockBuster_ueod8z.png" alt="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" onClick={() => MoviesGrid()}>Todas</Nav.Link>
              <Nav.Link href="#action2" onClick={() => movieFilterMax()}>Más valoradas</Nav.Link>
              <Nav.Link href="#action2" onClick={() => movieFilterMin()}>Menos valoradas</Nav.Link>
              <NavDropdown title={userPhoto} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" title={user.name} >Hola, {userName}</NavDropdown.Item>
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