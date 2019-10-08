import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const address = (props) => {
    let addresses = [...props.addresses];
    let listAddresses = addresses.map((address) =>
        <ListGroup.Item key = {address.key}>
            <Card border = 'primary' style = {{ width: '20rem'}} >
                <span className = 'text-right' key = {address.key} onClick = {props.deleted.bind(null, address.key)}>{'\uD83D\uDDD1'}</span>
                <Card.Body className = 'text-left'>
                <p><b>First Name:</b> {address.firstName}</p>
                <p><b>Last Name:</b> {address.lastName}</p>
                <p><b>Birthday:</b> {address.birthday}</p>
                <p><b>Telephone:</b> {address.telephone}</p>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
    
    return listAddresses;
}

export default address;