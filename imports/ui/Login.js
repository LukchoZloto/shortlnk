import React from 'react';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(event){
    event.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email},password,(err)=>{
      console.log('Login callback ',err);
    });
  }

  render(){
    return(
      <div>


        <h1> short lnk</h1>
        {this.state.error ? <p>greshka</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref = "email" name="email" placeholder="Email"/>
        <input type="password" ref = "password" name="password" placeholder="Password"/>
          <button>Login</button>
        </form>


      <Link to="/signup">Have an account ? </Link>
   </div>
    );
  }
}
