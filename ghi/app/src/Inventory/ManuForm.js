import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '/app/src/css/button.css'

function ManuForm() {
    const navigate = useNavigate();
    // field-------------------------------------------------
    const [manufacturer, setManufacturer] = useState('');
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }



    // submit------------------------------------------------
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.name = manufacturer;

        const manuUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(manuUrl, fetchConfig);

        if (response.ok) {
            setManufacturer('');
            navigate('/manufacturers/');
        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a New Manufacturer</h1>
                    <form
                        onSubmit={handleSubmit}
                        id="create-manufacturer-form">
                        <div className="form-floating mb-3">
                            <input
                                value={manufacturer}
                                onChange={handleManufacturerChange}
                                placeholder="Fabric"
                                required type="text"
                                name='manufacturer' id="manufacturer"
                                className="form-control" />
                            <label htmlFor="manufacturer">Manufacturer</label>
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

export default ManuForm;
