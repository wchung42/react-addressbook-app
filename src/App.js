import React, { Component } from 'react';
import './App.css';
import { Container, Col } from 'react-bootstrap';
import Address from './Address/Address';
import { generate } from 'randomstring';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends Component {
  // default state
  state = {
    addresses: [
      { key: generate(10), firstName: "Cathy" , lastName: "Pierce", birthday: "9/14/1996", telephone: "200-910-8132" },
      { key: generate(10), firstName: "Alfonso", lastName: "Cooley", birthday: "8/10/1973", telephone: "200-657-9362" },
      { key: generate(10), firstName: "Victor", lastName: "Gordon", birthday:  "8/3/1970", telephone: "200-661-9407" },
      { key: generate(10), firstName: "Colleen", lastName: "Wright", birthday: "10/28/1967", telephone: "200-250-7949" },
      { key: generate(10), firstName: "James", lastName: "Johnston", birthday: "5/11/1972", telephone: "200-645-3176" },
      { key: generate(10), firstName: "Anna", lastName: "Reyes", birthday: "9/10/1975", telephone: "200-707-8670" }
  ],
    formFirstName: '',
    formLastName: '',
    formBirthday: '',
    formTelephone: '',
    search: '',
  }

  addAddressHandler = (event) => {
    event.preventDefault();
    const newAddress =  {
      key: generate(10),
      firstName: this.state.formFirstName,
      lastName: this.state.formLastName,
      birthday: this.state.formBirthday,
      telephone: this.state.formTelephone
    };
    this.setState({addresses: [...this.state.addresses, newAddress]});
    this.setState({formFirstName: ''});
    this.setState({formLastName: ''});
    this.setState({formBirthday: ''});
    this.setState({formTelephone: ''});
  }

  deleteAddressHandler = (indexToDelete) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      const addresses = [...this.state.addresses];
      //const indexToDelete = addresses.findIndex((address) => address.key === key);
      addresses.splice(indexToDelete, 1);
      this.setState({addresses: addresses});
    }
  }
  
  updateSearch = (event) => {
    this.setState({search: event.target.value});
  }
  
  render = () => {
    let filteredAddresses = this.state.addresses.filter(
      (address) => {
        return address.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Address Book </h1>
          </header>
          <input type = "text" placeholder = "Enter a name" onChange = {this.updateSearch.bind(this)}></input>
          
          {filteredAddresses.map((address, index) => {
            return <Address 
              key = {address.key}
              firstName = {address.firstName} 
              lastName = {address.lastName}
              birthday = {address.birthday}
              telephone = {address.telephone}
              delete = {() => this.deleteAddressHandler(index)} />
          })}

          {/* adding the form */}
          <h2 className = 'text-left'>Add a new contact</h2>
          <Form className = 'text-left' onSubmit = { this.addAddressHandler }>
            <Form.Group controlId = "formAddress">
              <Form.Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type = "text" isrequired='true'
                    value = {this.state.formFirstName} 
                    onChange = {(e) => this.setState({formFirstName: e.target.value})}/>
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type = "text" 
                    value = {this.state.formLastName} 
                    onChange = {(e) => this.setState({formLastName: e.target.value})}/>
                </Col>
              </Form.Row>
              
              <Form.Label>Birthday</Form.Label>
              <Form.Control type = "text" placeholder = "MM/DD/YYYY" 
                value = {this.state.formBirthday} 
                onChange = {(e) => this.setState({formBirthday: e.target.value})}/>
              <Form.Label>Telephone Number</Form.Label>
              <Form.Control type = "text" placeholder = "XXX-XXX-XXXX" 
                value = {this.state.formTelephone} 
                onChange = {(e) => this.setState({formTelephone: e.target.value})}/>
            </Form.Group>
            <Button variant = "primary" type = "submit">Add Contact</Button>
          </Form>
          
        </Container>
        
      </div>
    );
  }
}

export default App;
