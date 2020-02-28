import React, { Component } from "react";
import { Route, NavLink, HashRouter, withRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Home from "./Home/Home";
import Servers from "./Servers/Servers";
import Server from "./Server/Server";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#">
              <img alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React ELPanel
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/servers">Servers</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
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

export default withRouter(Main);