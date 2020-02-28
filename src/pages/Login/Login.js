import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import api from "../../context/api";
import { login } from "../../context/auth";
import "./Login.css";

class Login extends Component {

  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/api/login", { email, password });
        if(response.data.success) {
          login(response.data.token);
          this.props.history.push("/app");
        } else {
          this.setState({
            error: response.data.error
          });
        }
      } catch (err) {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="/logo512.png" id="icon" alt="User Icon" height="50" />
          </div>
          {this.state.error && <p className="errorMessage">{this.state.error}</p>}
          <form onSubmit={this.handleSignIn}>
            <input
              type="text"
              id="email"
              className="fadeIn second"
              name="email"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <input type="submit" className ="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);