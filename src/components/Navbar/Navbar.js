import React, { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";


export default function Nav(props) {


    return (
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
           <Navbar.Brand href="/">Google Books Search Utility</Navbar.Brand>
           </Container>
      </Navbar>
    )
}