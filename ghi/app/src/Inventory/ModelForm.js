import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '/app/src/css/button.css'


function ModelForm(){
  const navigate = useNavigate();
    //drop down............................................
    const [manufacturers, setManufacturers] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    };

    //other form fields......................................
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const [pictureUrl, setPictureUrl] = useState('');
    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value);
    };

    const[manufacturerId, setManufacturerId] = useState('');
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturerId(value);
    };

    // handle submit.....................................
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturerId;

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        };

        const response = await fetch(modelUrl, fetchConfig);

        if (response.ok) {
            setName('');
            setPictureUrl('');
            setManufacturerId('');
            navigate('/models/');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // return.....................................................
    return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4" id="formDiv">
            <h1 className="text-center">Add A New Vehicle Model</h1>
            <p></p>
            <form onSubmit={handleSubmit} id="create-model-form">

              {/* name.......................................... */}
              <div className="form-floating mb-3">
                <input
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                required type="text"
                name="name"
                id="name"
                className="form-control"
                />
                <label htmlFor="name">Vehicle Model Name</label>
              </div>

              {/* picture......................................... */}
              <div className="form-floating mb-3">
                <input
                value={pictureUrl}
                onChange={handlePictureUrlChange}
                placeholder="Picture URL"
                required type="text"
                name="picture_url"
                id="picture_url"
                className="form-control"
                />
                <label htmlFor="picture_url">Picture URL</label>
              </div>

              {/* manufacturer......................................... */}
              <div className="mb-3">
                <select
                value={manufacturerId}
                onChange={handleManufacturerChange}
                required name="manufacturer"
                id="manufacturer"
                className="form-select"
                >
                  <option value="">Choose a Manufacturer</option>
                  {manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
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

export default ModelForm;
