import React from 'react';
import $ from 'jquery';
import io from 'socket.io-client'
//import UserProfile from './userAdminSession'

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:8000', {
        withCredentials: true,
        extraHeaders: {
          "ga-orderSystem": "ga-orderSystem"
        }
    })
    this.socket.on("reciveOrder", (data) => {
        $("#boxOrders").append("<h5>"+data+"</h5>")
    });
  }



  render(){
    
    return <div className='jjk'> 
      <h4>Estas son las ordernes pendientes</h4>
      <hr />
      <div id="boxOrders"></div>
    </div>;
  }
}

export default Orders;