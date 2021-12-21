import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div style={{ display: 'flex'}}>
        <div>column 1</div>
        <div>
          column 2<h1>Welcome</h1>
          <p>Your Devmountain adventure awaits.</p>
          <form>
            <div>
              <label for="login">Login</label>
              <input type="text" id="login"></input>
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" id="password"></input>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>Remember Me</label>
            </div>
            <div>
              <button>Sign in</button>
              <button>Forgot Password?</button>
            </div>
          </form>
        </div>
        <div>column 3</div>
      </div>
    );
  }
}
