import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
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
    formTelephone: ''
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
  
  render = () => {

    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Address Book </h1>
          </header>
          {/* rendering the default addresses */}
          <Address addresses = {this.state.addresses}></Address>
          {/* adding the form */}
          <h2 className = 'text-left'>Add an address</h2>
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
            <Button variant = "primary" type = "submit">Add Address</Button>
          </Form>
          
        </Container>
        
      </div>
    );
  }
}

export default App;
