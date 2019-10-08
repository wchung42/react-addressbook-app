import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const address = (props) => {
    let addresses = [...props.addresses];
    let listAddresses = addresses.map((address) =>
        <ListGroup.Item key = {address.key}>
            <Card className = "bg-light border rounded">
                <Card.Body className = "text-left">
                <p>First Name: {address.firstName}</p>
                <p>Last Name: {address.lastName}</p>
                <p>Birthday: {address.birthday}</p>
                <p>Telephone: {address.telephone}</p>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
    
    return listAddresses;
}

export default address;