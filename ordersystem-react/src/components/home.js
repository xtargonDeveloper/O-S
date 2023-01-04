import React from 'react';
import io from 'socket.io-client'
import UserProfile from './userAdminSession'
import Orders from './orders'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.sess = UserProfile.getName();
  }
  componentDidMount(){
    if(this.sess == undefined){
        window.location.replace('/admin');
      }
  }
  render(){
    
    return <div className='jjk'> 
      <h4>Hola {this.sess}</h4>
      <Orders />
    </div>;
  }
}

export default Home;