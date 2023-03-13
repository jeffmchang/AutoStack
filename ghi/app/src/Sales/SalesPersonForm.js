import React, { useState } from "react";
import '/app/src/css/button.css'

function SalesPersonForm() {
    // field-------------------------------------------------
    const [name, setSalesName] = useState('');
    const handleSalesNameChange = (event) => {
        const value = event.target.value;
        setSalesName(value);
    }

    const [employee_number, setemployeeId] = useState('');
    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setemployeeId(value);
    }

    // submit------------------------------------------------
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};


        data.name = name;
        data.employee_number = employee_number;

        const salePersonUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(salePersonUrl, fetchConfig);

        if (response.ok) {
            setSalesName('');
            setemployeeId('');
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4" id="formDiv">
                    <h1 className="text-center">Create a New Salesperson</h1>
                    <form

                        onSubmit={handleSubmit}
                        id="create-salesperson-form">
                        <div className="form-floating mb-3">
                            <input
                                value={name}
                                onChange={handleSalesNameChange}
                                placeholder="Name"
                                required type="text"
                                name='salesName' id="salesName"
                                className="form-control" />
                            <label htmlFor="salesName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                value={employee_number}
                                onChange={handleEmployeeIdChange}
                                placeholder="Employee ID#"
                                maxLength={4}
                                required type="text"
                                name='employeeId' id="employeeId"
                                className="form-control" />
                            <label htmlFor="employeeId">Employee ID#</label>
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

export default SalesPersonForm;
