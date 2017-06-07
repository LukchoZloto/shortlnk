import React from 'react';
import {browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base';
export default class Link extends React.Component {
  onLogout(){
        Accounts.logout();
    }

  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }
  render(){
    return (
      <div>
            <button onClick={this.onLogout.bind(this)}>Logout.</button>
      </div>
    );
  }
}
