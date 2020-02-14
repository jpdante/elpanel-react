import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Home from "./Home";
import Servers from "./Servers";
import Server from "./Server";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React ELPanel
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/servers">Servers</Nav.Link>
                <Nav.Link as={NavLink} to="/server">Server</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/servers" component={Servers} />
        <Route path="/server" component={Server} />
      </div>
      </HashRouter >
    );
  }
}

export default Main;