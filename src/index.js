import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Main from "./pages/Main";

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

/*import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.css';

class HomeNavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    React ELPanel
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#servers">Servers</Nav.Link>
                    <Nav.Link href="#config">Config</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

class HomePage extends React.Component {
    render() {
        return (
            <HomeNavBar />
        );
    }
}*/

// ========================================
