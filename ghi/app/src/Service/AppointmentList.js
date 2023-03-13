import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '/app/src/css/button.css'

function AppointmentList( ){

    // fetch appointments & only show if property finished =false
    const[appointments, setAppointments] = useState([]);
    const fetchAppointments = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');
        const data = await response.json();
        if (response.ok){
            const finishedAppointments = data.appointments.filter((appointment) => !appointment.finished);
            setAppointments(finishedAppointments);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    //delete
    const deleteAppointment = async (event) => {
        const appointmentsUrl = `http://localhost:8080/api/appointment/${event.id}/`
        const fetchConfig = { method: "DELETE"};

        const response = await fetch(appointmentsUrl, fetchConfig)
        if (response.ok){
            fetchAppointments()
        }
    }

    //continuously update the appointments that are finished
    const handleFinished = async (event) =>{
        const data = {}
        data["finished"] = true
        const finishedUrl = `http://localhost:8080/api/appointment/${event.id}/`
        const response = await fetch(finishedUrl);
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        await fetch(finishedUrl, fetchConfig);
        await fetchAppointments();
    }

    useEffect(() => {
        fetchAppointments();
    }, []);

    return (
        <div className="my-5 container">
            <h1 className="text-dark fw-bold text-center my-3">Service Appointments</h1>
            <h5
                className="text-center my-3">
                Your appointment will show up here once you make one!
                <br />
                <br />
                <p>
                <Link to="/appointments/new" className="btn btn-primary btn-md" >Create An Appointment</Link>
                </p>
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
                            <td>{appointment.vip ? "👑" : "❌" } </td>
                            <td>
                                <button className="custom-button" onClick={() => deleteAppointment(appointment)}>
                                    <span className="text">Delete</span>
                                    <span className="icon">
                                        <svg viewBox="0 0 24 24">
                                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                        </svg>
                                    </span>
                                </button>
                                <p> </p>
                                <button className="shadow__btn" onClick={() => handleFinished(appointment)}>
                                    Finished
                                </button>



                                {/* <button className='btn btn-success'onClick={() => handleFinished(appointment)} type="button">Finish</button> */}
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
