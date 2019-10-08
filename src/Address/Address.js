import React from 'react';

const address = (props) => {
    return (
        <div className = "Address">
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Birthday: {props.birthday}</p>
            <p>Telephone: {props.telephone}</p>
        </div>
    )
}

export default address;