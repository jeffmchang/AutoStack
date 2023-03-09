//needs to have cancel and finished buttons (move them to service history list)

import React, {useState, useEffect} from 'react';

function AppointmentList( ){
    const[appointments, setAppointments] = useState([]);
    const fetchData = async () => {
        const appointmentsUrl = 'http://localhost:8080/api/appointments/';
        const response = await fetch(appointmentsUrl);

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)
        }
    }


    // const [cancel, setCancel] = useState([]);
    // handle
    // const handleDelete = async (event) => {
    //     const appointmentsUrl = `http://localhost:8080/api/appointments/${appointments.id}/`
    //     const response = await fetchConfig  (appointmentsUrl, { method: "DELETE"});

    //     if (response.ok){
    //         const data = await response.json();
    //         setCancel(data.cancel)
    //     } else {
    //       console.log('Could not find appointment');
    //     }
    //   }

    useEffect(() => {
    fetchData();
}, []);

    return (
        <div className="my-5 container">
            <h1 className="text-dark fw-bold text-center my-3">Service Appointments</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Vin</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Reason</th>
                        <th>Technician</th>
                        <th>VIP</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, id) => {
                    return(
                        <tr key={id}>
                            <td>{ appointment.vin }</td>
                            <td>{ appointment.customer_name }</td>
                            <td>{ new Date (appointment.date).toLocaleDateString() }</td>
                            <td>{ new Date(appointment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }</td>
                            <td>{ appointment.reason }</td>
                            <td>{ appointment.technician.name }</td>
                            <td>{appointment.vip ? "Yes" : "No" } </td>
                            {/* <td>
                                <button className='btn btn-danger' onClick={() => handleDelete(appointment)} type="button">Cancel</button>
                            </td> */}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentList;
