import React from 'react';
import $ from 'jquery';
import io from 'socket.io-client'
import UserProfile from './userAdminSession'

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.sess = UserProfile.getName();
  }

  handleClick(){
    const name = $("#logiName").val()
    const pass = $("#loginPass").val()

    console.log(this.sess)

    if(this.sess == undefined){
      UserProfile.setName(name)
      window.location.replace('/home');
    }else{
      window.location.replace('/home');
    }
    
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