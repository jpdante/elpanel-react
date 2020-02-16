import React, { Component } from "react";
import "./Login.css";
import Container from "react-bootstrap/Container";

class Login extends Component {
  render() {
    return (
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <div class="fadeIn first">
            <img src="/logo512.png" id="icon" alt="User Icon" height="50"/>
          </div>
          <form method="post" action="http://localhost:8080/api/login">
            <input type="text" id="email" class="fadeIn second" name="email" placeholder="Email" />
            <input type="text" id="password" class="fadeIn third" name="password" placeholder="Password" />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    );
  }
}
         
export default Login;