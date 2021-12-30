import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      userName: "",
      password: ""
    }
  }
    
  
  render() {
    return (
      <div style={{
        width: '35%',
        marginTop: '180px',
        marginLeft: '6%',
        textAlign: 'left',
        boxSizing: 'border-box'
        }}>
          <h1 style={{
            fontWeight: '500', 
            lineHeight: '1.1',
            fontFamily: "'Montserrat', sans-serif",
            margin: "0.5em 0",
            fontSize: "20px"}}
            >Welcome</h1>
          <p >Your Devmountain adventure awaits.</p>
          <form>
            <div style={{marginBottom: "15px"}}>
              <label htmlFor="login" style={{display: "block", fontWeight: "700", marginBottom:'2px'}}>Login</label>
              <input type="text" id="login" onChange={(e) => this.setState({userName: e.target.value})} style={{
                display: "block",
                width: "100%",
                height: "34px",
                padding: "6px 12px",
                fontSize: "14px",
                lineHeight: "1.42857143",
                color: "#555",
                backgroundColor: "#fff",
                backgroundImage: "none",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
                boxSizing: "border-box"
                }}></input>
            </div>
            <div style={{marginBottom: "15px"}}>
              <label htmlFor="password" style={{display: "block", fontWeight: "700", marginBottom:'2px'}}>Password</label>
              <input type="password" id="password" onChange={(e) => this.setState({password: e.target.value})} style={{
                display: "block",
                width: "100%",
                height: "34px",
                padding: "6px 12px",
                fontSize: "14px",
                lineHeight: "1.42857143",
                color: "#555",
                backgroundColor: "#fff",
                backgroundImage: "none",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxShadow: "inset 0 1px 1px rgba(0,0,0,.075)",
                boxSizing: "border-box"
                }}></input>
            </div>
            <div style={{display: "flex", alignContent: "center", textAlign: "auto"}}>
              <label htmlFor="remember-me">
              <input id="remember-me" type="checkbox" style={{width: "10px"}}></input>
                Remember Me</label>
            </div>
            <div style={{marginTop: '7px'}}>
              <button style={{textTransform:' uppercase',
                backgroundColor: '#fff',
                padding: '8px 10px',
                border: 'solid 1px #cdcdcd',
                color: '#19B6FA',
                fontSize: '11px',
                fontWeight: 'bold',
                letterSpacing: '1.8px',
                fontFamily: "Lato",
                marginRight: "4px"
                }}>Sign in</button>
              <a href={'/placeholder'} style={{ textDecoration:"none", color: "#666"}}>Forgot Password?</a>
            </div>
          </form>
      </div>
    );
  }
}
