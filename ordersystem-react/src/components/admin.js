import React from 'react';
import $ from 'jquery';
import io from 'socket.io-client'

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const name = $("#logiName").val()
    const pass = $("#loginPass").val()
    
    this.socket = io('http://localhost:8000', {
      withCredentials: true,
      extraHeaders: {
        "ga-orderSystem": "ga-orderSystem"
      }
    })
    this.socket.on("connect", () => { 
      this.socket.emit('loginAdmin', {admin: name, pass: pass})
    });
    
  }


  render(){
    return <div className='jjk'> 
      <h4>Hola ADMIN</h4>
      <p>Comprobemos que eres tu!</p>
        <hr />
        <div className="loginBox">
          <input className="loginControl" id="logiName" type="text" name="name" placeholder="Name of admin"/>
          <input className="loginControl" id="loginPass" type="text" name="pass" placeholder="Password"/>
          <br />
          <button className="buyButton" onClick={() => this.handleClick()}>Log-In</button>
        </div>
    </div>;
  }
}

export default Admin;