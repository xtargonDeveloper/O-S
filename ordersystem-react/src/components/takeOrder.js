import React from 'react';
import $ from 'jquery';


class TakeOrder extends React.Component {
  constructor(props) {
    super(props);
    this.testProducts = [{name: "pepsi", price: "55.00", id: 1},{name: "fanta", price: "20.00", id: 1},{name: "corona", price:"30.00", id: 2}];
    this.handleClick = this.handleClick.bind(this);
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
      <textarea type="text" name="orderInput" id='inpList' ></textarea>
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