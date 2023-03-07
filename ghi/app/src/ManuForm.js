import React, { useEffect, useState } from "react";

function ManuForm() {
    const [manufacturer, setManufacturer] = useState('');

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }
    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/manufacturers/');
        const data = await response.json();
        setManufacturer(data.manufacturer);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.manufacturer = manufacturer;

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
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new hat</h1>
                    <form
                        onSubmit={handleSubmit}
                        id="create-conf-form">
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
                        <button
                            type="button" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ManuForm;