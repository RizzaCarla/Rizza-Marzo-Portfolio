import React, { Fragment } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { files } from '../utilities/utilities';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container className="d-flex justify-content-end">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={files.resume} target="_blank">Resume</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation