import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      account: { login: "", password: "" },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };

  handleChange = ({currentTarget: input}) => {
    const account = {...this.state.account};
    account[input.name]= input.value;
    this.setState({ account })

  }

  render() {
      const { account } = this.state
    return (
      <div>
        This Is under Athis.props
        <div>Column 1</div>
        <div>
          Column 2<h1> Welcome</h1>
          <p> Your journey begins here</p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="login">Login</label>
              <input
                value={account.login}
                onChange={this.handleChange}
                name="login"
                type="text"
                id="login"
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                value={account.password}
                onChange={this.handleChange}
                name="password"
                type="password"
                id="password"
              ></input>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>Remember Me</label>
            </div>
            <div>
              <button>Sign In</button>
              <button>Forgot Password</button>
            </div>
          </form>
        </div>
        <div>Column 3</div>
      </div>
    );
  }
}

export default Login;