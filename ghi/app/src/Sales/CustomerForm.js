import React, { useState } from "react";
import '/app/src/css/button.css'

function CustomerForm() {
    // field-------------------------------------------------
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const [address, setAddress] = useState('');
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }

    const [phone_number, setPhoneNumber] = useState('');
    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    }

    // submit------------------------------------------------
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.name = name;
        data.address = address;
        data.phone_number = phone_number;

        const customerUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(customerUrl, fetchConfig);

        if (response.ok) {
            setName('');
            setAddress('');
            setPhoneNumber('');
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4" id="formDiv">
                    <h1 className="text-center">Add A New Customer</h1>
                    <p></p>
                    <form
                        onSubmit={handleSubmit}
                        id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Name"
                                required type="text"
                                name='name' id="name"
                                className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={address}
                                onChange={handleAddressChange}
                                placeholder="Address"
                                maxLength={30}
                                required type="text"
                                name='address' id="address"
                                className="form-control" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={phone_number}
                                onChange={handlePhoneNumberChange}
                                placeholder="Phone Number"
                                required type="text"
                                maxLength={10}
                                name='phone_number' id="phone_number"
                                className="form-control" />
                            <label htmlFor="phone_number">Phone Number</label>
                        </div>
                        <div className="text-center">
                        <button class="cta">
                            <span>Create</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomerForm;
