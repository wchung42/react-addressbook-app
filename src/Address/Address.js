import React from 'react';
import Card from 'react-bootstrap/Card';

const address = (props) => {
    return (
        <Card border = 'primary' style = {{ width: '18rem'}} >
            <span className = 'text-right' key = {props.key}
                onClick = {props.delete.bind(null, props.key)}>{'\uD83D\uDDD1'}
            </span>
            <Card.Body className = 'text-left'>
            <p><b>First Name:</b> {props.firstName}</p>
            <p><b>Last Name:</b> {props.lastName}</p>
            <p><b>Birthday:</b> {props.birthday}</p>
            <p><b>Telephone:</b> {props.telephone}</p>
            </Card.Body>
        </Card>        
    )
}

export default address;