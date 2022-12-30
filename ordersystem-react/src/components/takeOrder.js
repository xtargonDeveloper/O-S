import React from 'react';
import $ from 'jquery';
import io from 'socket.io-client'


class TakeOrder extends React.Component {
  constructor(props) {
    super(props);
    this.verfNumber = 0;
    this.testProducts = [{name: "pepsi", price: "55.00", id: 1},{name: "fanta", price: "20.00", id: 1},{name: "corona", price:"30.00", id: 2}];
    this.handleClick = this.handleClick.bind(this);
    this.clearInp = this.clearInp.bind(this);
    this.getOrder = this.getOrder.bind(this);
  }

  clearInp(){$("#inpList").val("")}
  getOrder(){
    if (this.verfNumber === 1) {
      $("#inpList").val("")
      this.verfNumber = 0;
    }
    else{
      const dataToSend = $("#inpList").val()
      console.log(dataToSend)
      $("#inpList").val('Listo! Tu pedido llegara pronto')
      this.verfNumber++
      console.log(this.verfNumber)
      //socket client send data
      this.socket = io('http://localhost:8080')
      this.socket.on('first', (data)=>{
        console.log(data)
      })
    }
  }

  handleClick(ident) {
   var inp = $("#inpList").val()
   if(inp === "")
     $("#inpList").val(ident)
   else
     $("#inpList").val(inp+" "+ident)
  }

  render(){
    return <div className='takeOrder'> 
      <h4>We take your order <br /> Here and now!</h4>

      <textarea type="text" name="orderInput" id='inpList' disabled ></textarea>
      <br />
      <button id='clr' onClick={() => this.clearInp()}>Clear</button>
      <button id='gor'onClick={() => this.getOrder()}>Get order</button>
      <hr />
      <table>
          <thead>
            <tr>
              <th>No</th>
              <th>name</th>
              <th>Price</th>
              </tr>
          </thead>
          <tbody>
            {this.testProducts.map((product, i) => {
               return (<tr  key={i} ><td>{i+1}</td><td>{product.name}</td><td>{product.price}</td><td><button className='buyButton' onClick={() => this.handleClick(product.name)}>Order</button></td></tr>) 
            })}
          </tbody>
      </table>
    </div>;
  }
}

export default TakeOrder;