import React, {useEffect, useState} from 'react';

function AppointmentForm(){

    //drop down............................................
    const [technicians, setTechnicians] = useState([]);
    const fetchData = async () => {
        const TechUrl = 'http://localhost:8080/api/technicians/';

        const response = await fetch(TechUrl);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    };

    //other form fields......................................
    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    };

    const [customerName, setCustomerName] = useState('');
    const handleCustomerNameChange = (event) => {
        const value = event.target.value;
        setCustomerName(value);
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
        data.vin = vin;
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
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // return.....................................................
    return(
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create A New Vehicle Model</h1>
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
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ModelForm;
