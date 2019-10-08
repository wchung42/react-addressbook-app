import React, { Component } from 'react';
import './App.css';
import Address from './Address/Address'

class App extends Component {
  // default state
  state = {
    addresses: [
      { firstName: "Cathy" , lastName: "Pierce", birthday: "9/14/1996", telephone: "200-910-8132" },
      { firstName: "Alfonso", astName: "Cooley", birthday: "8/10/1973", telephone: "200-657-9362" },
      { firstName: "Victor", lastName: "Gordon", birthday:  "8/3/1970", telephone: "200-661-9407" },
      { firstName: "Colleen", lastName: "Wright", birthday: "10/28/1967", telephone: "200-250-7949" },
      { firstName: "James", lastName: "Johnston", birthday: "5/11/1972", telephone: "200-645-3176" },
      { firstName: "Anna", lastName: "Reyes", birthday: "9/10/1975", telephone: "200-707-8670" }
  ]
  }
  
  render = () => {
    
      let addresses = (
        <div>
          {this.state.addresses.map((address) => {
            return <Address
              firstName = {address.firstName}
              lastName = {address.lastName}
              birthday = {address.birthday}
              telephone = {address.telephone} />
          })}
        </div>
      );
    
    return (
      <div className="App">
        <header className="App-header text-left">
          <h1>React Address Book </h1>
        </header>
        { addresses }
      </div>
    );
  }
}

export default App;
