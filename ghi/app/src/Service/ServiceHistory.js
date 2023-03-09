// needs to have a search feature for vin numbers

import React, {useState, useEffect} from 'react';

function ServiceHistory( ){

    const[appointments, setAppointments] = useState([]);
    const fetchData = async () => {
        const appointmentsUrl = 'http://localhost:8080/api/appointments/';
        const response = await fetch(appointmentsUrl);

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)
        }
    }

    //for search
    const[search, setSearch] = useState('');
    const[appointment, setAppointment] = useState([]);

    // handle submit.....................................
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const data = {};
        // data.vin = vin;

    //     const modelUrl = 'http://localhost:8080/api/technicians/';
    //     const fetchConfig = {
    //         method: 'post',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-type': 'application/json',
    //         }
    //     };

    //     const response = await fetch(modelUrl, fetchConfig);

    //     if (response.ok) {
    //         setName('');
    //         setEmployeeNumber('');
    //     }
    // };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="my-5 container">
            <div className="input-group mb-3">
                <input
                onChange={(event) => setSearch(event.target.value)}
                type="text"
                className="form-control"
                placeholder="Type to search..."
                aria-label="search"
                aria-describedby="basic-addon2"
                >
                </input>

                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search VIN</button>
                </div>
            </div>
                <h1 className="text-dark fw-bold text-center my-3">Service Appointment History</h1>
                <h5
                   className="text-center my-3"> All service history is stored here
                </h5>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Vin</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Reason</th>
                            <th>Technician</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.filter((appointment)=> {
                            return search === "" ? appointment : appointment.vin.includes(search)
                        }).map((appointment, id) => {
                        return(
                            <tr key={id}>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.customer_name }</td>
                                <td>{ new Date (appointment.date).toLocaleDateString() }</td>
                                <td>{ new Date(appointment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }</td>
                                <td>{ appointment.reason }</td>
                                <td>{ appointment.technician.name }</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
    );
}

export default ServiceHistory;
