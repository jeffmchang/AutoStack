import React, {useEffect, useState} from 'react';

function VehicleForm(props){
    const [manufacturers, setManufacturers] = useState([]);
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    };

    const [name, setName] = useState([]);
    handleNameChange = (event) => {
        const value = event.target.value;
        setName(value)
    }

    const [pictureUrl, setPictureUrl] = useState([]);
    handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value)
    }

    const[manufacturer, setManufacturer] = useState([]);
    handleManufacturerChange = (event) => {
        const value = event.targer.value;
        setManufacturer(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = name;
        data.picture_url = pictureUrl
        data.manufacturer = manufacturer

        const VehicleUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        };

        const response = await fetch(VehicleUrl, fetchConfig);

        if (response.ok) {
            const newVehicle = await response.json()


        setName('');
        setPictureUrl('');
        setManufacturer('');
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create A New Vehicle</h1>
            <form onSubmit={handleSubmit} id="create-vehicle-form">

              {/* name */}
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

              {/* picture */}
              <div className="form-floating mb-3">
                <input
                value={pictureUrl}
                onChange={handlePictureUrlChange}
                placeholder="Room count"
                required type="text"
                name="picture_url"
                id="picture_url"
                className="form-control"
                />
                <label htmlFor="picture_url">Picture Url</label>
              </div>

              {/* id */}
              <div className="mb-3">
                <select
                value={manufacturer}
                onChange={handleManufacturerChange}
                required name="state"
                id="state"
                className="form-select"
                >
                  <option value="">Choose a Manufacturer</option>
                  {manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.name}>
                        {manufacturer.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default VehicleForm;
