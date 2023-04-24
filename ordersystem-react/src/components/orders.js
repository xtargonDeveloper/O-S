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
    this.testCount = 0
  }

  render(){
    this.socket.on("reciveOrder", (data) => {
      this.testCount++
      if(this.testCount == 1){
        console.log(this.testCount)
        $("#boxOrders").append("<div class='aOrder'><div class='optOrder'><i class='iconOrder iconTrash fa fa-trash' aria-hidden='true' id='"+data.a+"'></i> | <i class='iconOrder iconTrue fa fa-calendar-check-o' aria-hidden='true' id='"+data.a+"'></i></div><hr /><h5>"+data.b+"</h5></div>")
        console.log(data)
        
        $(".iconTrash").click((e)=>{
          alert("Se eliminara la siguiente orden "+e.target.id);
        })
        $(".iconTrue").click((e)=>{
          alert("Se agregara como venta finalizada la siguiente orden "+e.target.id);
        })
      }
      if(this.testCount == 2){
        this.testCount = 0
        console.log(this.testCount)
      }
    });
    return <div className='jjk'> 
      <h4>Estas son las ordernes pendientes</h4>
      <hr />
      <div id="boxOrders"></div>
    </div>;
  }
}

export default Orders;