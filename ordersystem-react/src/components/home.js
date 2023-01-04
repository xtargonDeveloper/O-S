import React from 'react';
import io from 'socket.io-client'
import UserProfile from './userAdminSession'

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
    </div>;
  }
}

export default Home;