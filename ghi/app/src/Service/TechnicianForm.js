import React, {useState, useEffect} from 'react';
import '/app/src/css/button.css'

// tech form.....................................................
function TechnicianForm({fetchTechnicians}){

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const [employeeNumber, setEmployeeNumber] = useState('');
    const handleEmployeeNumberChange = (event) => {
        const value = event.target.value;
        setEmployeeNumber(value);
    };

    // handle submit.....................................
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.employee_number = employeeNumber;


        const techUrl = 'http://localhost:8080/api/technicians/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            }
        };

        const response = await fetch(techUrl, fetchConfig);

        if (response.ok) {
            setName('');
            setEmployeeNumber('');
            fetchTechnicians();
        }
    };

    // return.....................................................
    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4" id="formDiv">
            <h1 className="text-center">Add A New Technician</h1>
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
                <label htmlFor="name">Name</label>
              </div>

              {/* employee number......................................... */}
              <div className="form-floating mb-3">
                <input
                value={employeeNumber}
                onChange={handleEmployeeNumberChange}
                placeholder="Employee Number"
                required type="number"
                name="employee_number"
                id="employee_number"
                className="form-control"
                />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              <p>  </p>
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
export default TechnicianForm;
