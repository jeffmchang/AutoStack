//needs to have cancel and finished buttons (move them to service history list)

import React, {useState, useEffect} from 'react';

function AppointmentList( ){
    const[appointments, setAppointments] = useState([]);


    const fetchAppointments = async () => {
        const appointmentsUrl = 'http://localhost:8080/api/appointments/';
        const response = await fetch(appointmentsUrl);

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)
        }
    }
    useEffect(() => {
        fetchAppointments();
    }, []);



    //fetch appointments & set their status (if finished or not)
    // const fetchAppointments = async () => {
    //     const response = await fetch('http://localhost:8080/api/appointments/');
    //     const data = await response.json();
    //     if (response.ok){
    //         const finishedAppointments = data.appointments.filter((appointment) => !appointment.completed);
    //         setAppointments(finishedAppointments);
    //     }
    // };

    //delete
    const deleteAppointment = async (event) => {
        const appointmentsUrl = `http://localhost:8080/api/appointment/${event.id}/`
        const fetchConfig = { method: "DELETE"};

        const response = await fetch(appointmentsUrl, fetchConfig)
        if (response.ok){
            fetchAppointments()
        }
    }

    //

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
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteAppointment(appointment)} type="button">Cancel</button>
                                {/* <button type="button" onClick={() => finishedAppointment (appointment)} className="btn btn-success">Finished</button> */}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentList;
