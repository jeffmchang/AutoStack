import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '/app/src/css/button.css'


function AutoForm() {
    const navigate = useNavigate();
    // fields-----------------------------------------
    const [color, setColor] = useState('');
    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const [year, setYear] = useState('');
    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const [modelId, setModelId] = useState('');
    const handleModelIdChange = (event) => {
        const value = event.target.value;
        setModelId(value);
    }

    // drop-down list-----------------------------------------
    const [models, setModels] = useState([]);
    const fetchData = async () => {
        const response = await fetch('http://localhost:8100/api/models/');
        const data = await response.json();
        setModels(data.models);
    }

    // submit-----------------------------------------
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};

        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = modelId;

        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const response = await fetch(autoUrl, fetchConfig);

        if (response.ok) {
            setColor('');
            setYear('');
            setVin('');
            setModelId('');
            navigate('/automobiles/');
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4" id="formDiv">
                    <h1 className="text-center">Create a New Automobile</h1>
                    <form
                        onSubmit={handleSubmit}
                        id="create-conf-form">
                        <div className="form-floating mb-3">
                            <input
                                value={color}
                                onChange={handleColorChange}
                                placeholder="Color"
                                required type="text"
                                name='color' id="color"
                                className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                maxLength="4"
                                value={year}
                                onChange={handleYearChange}
                                placeholder="Year"
                                required type="number"
                                name='year' id="year"
                                className="form-control" />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                minLength="17"
                                maxLength="17"
                                value={vin}
                                onChange={handleVinChange}
                                placeholder="VIN"
                                required type="text"
                                name='vin' id="vin"
                                className="form-control" />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="mb-3">
                            <select
                                value={modelId}
                                onChange={handleModelIdChange}
                                required name="model"
                                id="model"
                                className="form-select">
                                <option value="">Choose a Model</option>
                                {models.map(model => {
                                    return (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="text-center">
                        <button className="cta">
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

export default AutoForm;
